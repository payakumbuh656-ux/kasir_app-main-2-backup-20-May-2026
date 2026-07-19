import React, { useState, useEffect, useRef } from "react";
import { truncateText } from "./lib/truncateText";
import useBarcodeScanner from "./core/useBarcodeScanner";
import { createStockMovement } from "./services/stockMovement";
import StockMovementTimeline from "./components/StockMovementTimeline";
import ProductImagePicker from "./components/ProductImagePicker";
import ProductEditorModal from "./components/ProductEditorModal";
import ProductImagePanel from "./components/ProductImagePanel";
import PageContainer from "./components/PageContainer";
import Receipt from "./modules/receipt/Receipt";
import { formatReceipt } from "./modules/receipt/receiptFormatter";
import { PrinterService } from "./modules/receipt/printer/PrinterService";
import StoreSettings from "./components/settings/StoreSettings";
import SettingsMenu from "./components/settings/SettingsMenu";
import PrinterSettings from "./components/settings/PrinterSettings";
import StaffSettings from "./components/settings/StaffSettings";
import SecuritySettings from "./components/settings/SecuritySettings";
import SettingsPage from "./components/settings/SettingsPage";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  Search,
  CreditCard,
  Package,
  History,
  LayoutDashboard,
  LogOut,
  Barcode,
  Save,
  X,
  Edit2,
  Printer,
  PieChart,
  BarChart3,
  Settings,
  LogIn,
  Eye,
  DollarSign,
  TrendingUp,
} from "lucide-react";
import { db, auth, googleProvider } from "./lib/firebase";
import { Capacitor } from "@capacitor/core";

import {
  onAuthStateChanged,
  signOut,
  signInWithCustomToken,
} from "firebase/auth";

import {
  collection,
  addDoc,
  onSnapshot,
  setDoc,
  getDoc,
  getDocs,
  doc,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";

import StockInspector from "./components/StockInspector";
import StockTable from "./components/StockTable";
import RestockModal from "./components/RestockModal";
import ReduceStockModal from "./components/ReduceStockModal";
import AdjustmentModal from "./components/AdjustmentModal";

const handleFirestoreError = (error: any) => {
  console.error("FIRESTORE ERROR");
  console.error("code:", error.code);
  console.error("message:", error.message);
  console.error(error);
};

const OperationType = {
  LIST: "LIST",
  DELETE: "DELETE",
};

interface Product {
  id: string;
  barcode: string;
  name: string;
  supplier: string;
  price: number;
  modal: number;

  stock: number;
  initialStock: number;

  category: string;

  imageUrl?: string;
}

interface CartItem extends Product {
  quantity: number;
}

const DEFAULT_PRODUCTS: Product[] = [
  {
    id: "1",
    barcode: "899123456701",
    name: "Le Minerale 600ml",
    supplier: "PT Tirta Investama",
    price: 3500,
    modal: 2200,
    stock: 50,
    initialStock: 50,
    category: "Minuman",
  },
  {
    id: "2",
    barcode: "899123456702",
    name: "Indomie Goreng Spesial",
    supplier: "PT Indofood",
    price: 3100,
    modal: 2500,
    stock: 100,
    category: "Makanan",
  },
  {
    id: "3",
    barcode: "899123456703",
    name: "Sari Roti Tawar",
    supplier: "PT Nippon Indosari",
    price: 15000,
    modal: 12500,
    stock: 12,
    category: "Makanan",
  },
];

export default function App() {
  const [user, setUser] = useState<any>(null);

  const [storeName, setStoreName] = useState("");
  const [toast, setToast] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<any>(null);

  const [storeLogo, setStoreLogo] = useState("");
  const [role, setRole] = useState("owner");
  const [loadingStore, setLoadingStore] = useState(true);

  const [setupStoreName, setSetupStoreName] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [view, setView] = useState<
    "pos" | "stock" | "history" | "reports" | "dashboard" | "settings" | ""
  >("pos");

  const [settingsTab, setSettingsTab] = useState<
    "store" | "printer" | "staff" | "security"
  >("store");

  const [currentRole, setCurrentRole] = useState<"state" | "owner" | null>(
    null,
  );

  const [isRoleModalOpen, setIsRoleModalOpen] = useState(true);
  const [ownerPinInput, setOwnerPinOutput] = useState("");

  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [stockMovements, setStockMovements] = useState<any[]>([]);
  const [selectedOutlet, setSelectedOutlet] = useState("Outlet Pusat");
  const [ownerPeriod, setOwnerPeriod] = useState("today");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark",
  );

  const now = new Date();

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");

    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const cardClass = darkMode
    ? "bg-slate-900 border border-slate-800"
    : "bg-white border border-slate-200";

  const textPrimary = darkMode ? "text-white" : "text-slate-900";

  const textSecondary = darkMode ? "text-slate-400" : "text-slate-500";

  const todaySales = transactions
    .filter((t) => {
      const trxDate = new Date(t.date);

      return (
        trxDate.getDate() === now.getDate() &&
        trxDate.getMonth() === now.getMonth() &&
        trxDate.getFullYear() === now.getFullYear()
      );
    })
    .reduce((acc, t) => acc + t.total, 0);

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const yesterdaySales = transactions
    .filter((t) => {
      const trxDate = new Date(t.date);

      return (
        trxDate.getDate() === yesterday.getDate() &&
        trxDate.getMonth() === yesterday.getMonth() &&
        trxDate.getFullYear() === yesterday.getFullYear()
      );
    })
    .reduce((acc, t) => acc + t.total, 0);

  const salesGrowth =
    yesterdaySales > 0
      ? ((todaySales - yesterdaySales) / yesterdaySales) * 100
      : todaySales > 0
        ? 100
        : 0;

  const todayTransactions = transactions.filter((t) => {
    const trxDate = new Date(t.date);

    return (
      trxDate.getDate() === now.getDate() &&
      trxDate.getMonth() === now.getMonth() &&
      trxDate.getFullYear() === now.getFullYear()
    );
  }).length;

  const yesterdayTransactions = transactions.filter((t) => {
    const trxDate = new Date(t.date);

    return (
      trxDate.getDate() === yesterday.getDate() &&
      trxDate.getMonth() === yesterday.getMonth() &&
      trxDate.getFullYear() === yesterday.getFullYear()
    );
  }).length;

  const transactionGrowth =
    yesterdayTransactions > 0
      ? ((todayTransactions - yesterdayTransactions) / yesterdayTransactions) *
        100
      : todayTransactions > 0
        ? 100
        : 0;

  const monthSales = transactions
    .filter((t) => {
      const trxDate = new Date(t.date);
      const now = new Date();

      return (
        trxDate.getMonth() === now.getMonth() &&
        trxDate.getFullYear() === now.getFullYear()
      );
    })
    .reduce((acc, t) => acc + t.total, 0);

  const filteredTransactions = transactions.filter((t) => {
    const trxDate = new Date(t.date);
    const now = new Date();

    if (ownerPeriod === "today") {
      return (
        trxDate.getDate() === now.getDate() &&
        trxDate.getMonth() === now.getMonth() &&
        trxDate.getFullYear() === now.getFullYear()
      );
    }

    if (ownerPeriod === "month") {
      return (
        trxDate.getMonth() === now.getMonth() &&
        trxDate.getFullYear() === now.getFullYear()
      );
    }

    return trxDate.getFullYear() === now.getFullYear();
  });

  const totalTransactions = filteredTransactions.length;
  const salesChartData = [...Array(7)].map((_, index) => {
    const date = new Date();

    date.setDate(date.getDate() - (6 - index));

    const dayName = date.toLocaleDateString("id-ID", {
      weekday: "short",
    });

    const dayTransactions = transactions.filter((t) => {
      const trxDate = new Date(t.date);

      return (
        trxDate.getDate() === date.getDate() &&
        trxDate.getMonth() === date.getMonth() &&
        trxDate.getFullYear() === date.getFullYear()
      );
    });

    return {
      day: dayName,
      sales: dayTransactions.reduce((a, b) => a + b.total, 0),
      trx: dayTransactions.length,
    };
  });

  const totalProfit = filteredTransactions.reduce((acc, t) => {
    const profit = t.items.reduce((sum: number, it: any) => {
      const product = products.find((p) => p.id === it.id);

      const modal = product?.modal || 0;

      return sum + (it.price - modal) * it.quantity;
    }, 0);

    return acc + profit;
  }, 0);

  const yesterdayProfit = transactions
    .filter((t) => {
      const trxDate = new Date(t.date);

      return (
        trxDate.getDate() === yesterday.getDate() &&
        trxDate.getMonth() === yesterday.getMonth() &&
        trxDate.getFullYear() === yesterday.getFullYear()
      );
    })
    .reduce((acc, t) => {
      const profit = t.items.reduce((sum: number, it: any) => {
        const product = products.find((p) => p.id === it.id);
        const modal = product?.modal || 0;

        return sum + (it.price - modal) * it.quantity;
      }, 0);

      return acc + profit;
    }, 0);

  const profitGrowth =
    yesterdayProfit > 0
      ? ((totalProfit - yesterdayProfit) / yesterdayProfit) * 100
      : totalProfit > 0
        ? 100
        : 0;

  const averageTransaction =
    totalTransactions > 0
      ? filteredTransactions.reduce((acc, t) => acc + t.total, 0) /
        totalTransactions
      : 0;

  const bestSeller = (() => {
    const counts: Record<string, number> = {};

    transactions.forEach((t) => {
      t.items.forEach((item: any) => {
        counts[item.name] = (counts[item.name] || 0) + item.quantity;
      });
    });

    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);

    return sorted[0]?.[0] || "-";
  })();

  // Firebase Sync
  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, async (u) => {
      setUser(u);

      if (u) {
        setIsLoggedIn(true);

        console.log("USER LOGIN:", u.uid);

        const userRef = doc(db, "users", u.uid);

        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {
          console.log("MEMBUAT USER BARU");

          await setDoc(
            userRef,
            {
              email: u.email || "",
              displayName: u.displayName || "",
              storeName: "",
              role: "owner",
            },
            {
              merge: true,
            },
          );
        }

        const latestSnap = await getDoc(userRef);

        if (latestSnap.exists()) {
          const data = latestSnap.data();

          setStoreName(data.storeName || "");
          setSetupStoreName(data.storeName || "");
          setStoreLogo(data.storeLogo || "");
          setRole(data.role || "owner");
        }

        setLoadingStore(false);

        console.log("USER DOC BERHASIL DIBACA");
      } else {
        setIsLoggedIn(false);

        setProducts([]);
        setTransactions([]);

        setStoreName("");
        setRole("owner");

        setLoadingStore(false);
      }
    });

    return () => unsubAuth();
  }, []);

  useEffect(() => {
    async function testElectron() {
      if (!window.electron) return;

      const result = await window.electron.ping();
      console.log("Electron IPC:", result);

      const platform = await window.electron.system.platform();
      console.log("Platform:", platform);

      const printers = await PrinterService.getPrinters();
      console.log("Printers:", printers);
    }

    testElectron();
  }, []);

  useEffect(() => {
    if (!user) return;

    const unsubProducts = onSnapshot(
      collection(db, "users", user.uid, "products"),
      (snapshot) => {
        const items = snapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as Product,
        );

        setProducts(items);

        console.log(
          "SNAPSHOT STOCK",
          items.find((p) => p.id === selectedProductId)?.stock,
        );
      },
      (error) => handleFirestoreError(error),
    );

    const unsubTransactions = onSnapshot(
      query(
        collection(db, "users", user.uid, "transactions"),
        orderBy("date", "desc"),
      ),
      (snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setTransactions(items);
      },
      (error) => handleFirestoreError(error),
    );

    const unsubMovements = onSnapshot(
      query(
        collection(db, "users", user.uid, "movements"),
        orderBy("createdAt", "desc"),
      ),
      (snapshot) => {
        setStockMovements(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })),
        );
      },
      (error) => handleFirestoreError(error),
    );

    return () => {
      unsubProducts();
      unsubTransactions();
      unsubMovements();
    };
  }, [user]);

  // Checkout & Receipt States
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [isReceiptModalOpen, setIsReceiptModalOpen] = useState(false);
  const [paidAmount, setPaidAmount] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState("Tunai");
  const [lastTransaction, setLastTransaction] = useState<any>(null);
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null);

  const [isTransactionDetailOpen, setIsTransactionDetailOpen] = useState(false);

  // States for Stock Management
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null,
  );
  const selectedProduct =
    products.find((p) => p.id === selectedProductId) ?? null;
  console.log("SELECTED PRODUCT STOCK", selectedProduct?.stock);

  const [isImagePanelOpen, setIsImagePanelOpen] = useState(false);
  const [productImagePreview, setProductImagePreview] = useState("");

  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [newProduct, setNewProduct] = useState<Product>({
    id: "",
    barcode: "",
    name: "",
    supplier: "",
    price: 0,
    modal: 0,

    stock: 0,
    initialStock: 0,

    category: "Umum",
    imageUrl: "",
  });

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");

  const [isRestockModalOpen, setIsRestockModalOpen] = useState(false);
  const [isReduceStockModalOpen, setIsReduceStockModalOpen] = useState(false);
  const [isAdjustmentModalOpen, setIsAdjustmentModalOpen] = useState(false);

  const [restockQty, setRestockQty] = useState("");
  const [restockSupplier, setRestockSupplier] = useState("");
  const [restockNote, setRestockNote] = useState("");

  const [editingQtyId, setEditingQtyId] = useState<string | null>(null);
  const [editingQty, setEditingQty] = useState("");

  const [reduceQty, setReduceQty] = useState("");
  const [reduceReason, setReduceReason] = useState("");
  const [reduceNote, setReduceNote] = useState("");

  const [adjustmentStock, setAdjustmentStock] = useState("");
  const [adjustmentReason, setAdjustmentReason] = useState("");
  const [adjustmentNote, setAdjustmentNote] = useState("");

  const [posSearch, setPosSearch] = useState("");
  const [stockSearch, setStockSearch] = useState("");
  const [manualSearch, setManualSearch] = useState("");
  const [scannerBuffer, setScannerBuffer] = useState("");
  const [stockCategory, setStockCategory] = useState("Semua");
  const [stockSort, setStockSort] = useState("az");

  const barcodeRef = useRef<HTMLInputElement>(null);
  const addProductBarcodeRef = useRef<HTMLInputElement>(null);
  const addProductNameRef = useRef<HTMLInputElement>(null);
  useBarcodeScanner({
    enabled: view === "pos" || view === "stock" || isAddingProduct,

    onScan: (barcode) => {
      // Tambah Barang
      if (isAddingProduct) {
        setNewProduct((prev) => ({
          ...prev,
          barcode,
        }));
        return;
      }

      // Cari Produk
      const found = products.find((p) => p.barcode === barcode);

      if (!found) {
        showToast(`Barcode ${barcode} tidak ditemukan`);
        return;
      }

      // POS
      if (view === "pos") {
        addToCart(found);
        return;
      }

      // Gudang
      if (view === "stock") {
        setStockSearch(barcode);
        setSelectedProductId(found.id);
        return;
      }
    },
  });

  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleGoogleLogin = async () => {
    if (isLoggingIn) return;

    try {
      setIsLoggingIn(true);

      await window.electron.auth.login();
    } catch (error) {
      console.error(error);
      showToast("Gagal membuka Google Login");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);

      showToast("Berhasil logout!");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteAllTransactions = async () => {
    if (!user) return;

    if (!window.confirm("Hapus semua riwayat transaksi?")) {
      return;
    }

    try {
      const snapshot = await getDocs(
        collection(db, "users", user.uid, "transactions"),
      );

      await Promise.all(
        snapshot.docs.map((docItem) =>
          deleteDoc(doc(db, "users", user.uid, "transactions", docItem.id)),
        ),
      );

      showToast("Semua riwayat transaksi berhasil dihapus");
    } catch (error) {
      console.error(error);

      showToast("Gagal menghapus riwayat transaksi");
    }
  };

  const showToast = (message: string) => {
    console.log("SHOW TOAST");

    setToast(message);

    setTimeout(() => {
      setIsToastVisible(true);
    }, 10);

    setTimeout(() => {
      setIsToastVisible(false);

      setTimeout(() => {
        setToast("");
      }, 500);
    }, 3000);
  };

  const formatRupiah = (value: string) => {
    const numberString = value.replace(/\D/g, "");

    return new Intl.NumberFormat("id-ID").format(Number(numberString));
  };

  const handleSelectProductImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const preview = URL.createObjectURL(file);

    setProductImagePreview(preview);

    setIsImagePanelOpen(false);
  };

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setSelectedImage(file);

    setImagePreview(URL.createObjectURL(file));
  };

  const handleSaveStore = async () => {
    if (!user) return;

    console.log("setupStoreName =", setupStoreName);

    try {
      await setDoc(
        doc(db, "users", user.uid),
        {
          storeName: setupStoreName,
          storeLogo: storeLogo,
        },
        {
          merge: true,
        },
      );

      setStoreName(setupStoreName);

      showToast("Profil toko berhasil disimpan!");
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (loginData.username === "admin" && loginData.password === "admin123") {
      setIsLoggedIn(true);
    } else {
      showToast("Username: admin, Password: admin123");
    }
  };

  const addToCart = (product: Product) => {
    if (product.stock <= 0) {
      showToast(`"${truncateText(product.name, 28)}" stok habis.`);
      return;
    }

    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        if (existing.quantity >= product.stock) {
          showToast(
            `Stok "${truncateText(product.name, 28)}" hanya tersedia ${product.stock} pcs.`,
          );
          return prev;
        }

        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const updateCartQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const product = products.find((p) => p.id === id);
          const newQty = Math.max(1, item.quantity + delta);
          if (product && newQty > product.stock) {
            showToast("Maksimal stok tercapai");
            return item;
          }
          return { ...item, quantity: newQty };
        }
        return item;
      }),
    );
  };

  const updateCartQtyDirect = (id: string, qty: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;

        const product = products.find((p) => p.id === id);

        if (!product) return item;

        const newQty = Math.max(1, Math.min(qty, product.stock));

        if (qty > product.stock) {
          showToast(
            `Stok "${truncateText(product.name, 28)}" hanya tersedia ${product.stock} pcs.`,
          );
        }

        return {
          ...item,
          quantity: newQty,
        };
      }),
    );
  };

  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    const subtotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    if (paidAmount < subtotal) {
      showToast("Uang pelanggan kurang!");
      return;
    }

    setIsProcessing(true);
    const transactionId = Date.now().toString();
    const newTransaction = {
      id: transactionId,
      items: cart.map((it) => ({
        id: it.id,
        name: it.name,
        price: it.price,
        quantity: it.quantity,
      })),

      total: subtotal,
      paidAmount: paidAmount,
      changeAmount: paidAmount - subtotal,

      paymentMethod: paymentMethod,

      outletId: "OutletPusat",
      date: Date.now(),
    };

    try {
      // Save Transaction to Firestore
      await setDoc(
        doc(db, "users", user.uid, "transactions", transactionId),
        newTransaction,
      );

      // Update Stocks in Firestore
      await Promise.all(
        cart.map(async (item) => {
          const product = products.find((p) => p.id === item.id);

          if (product) {
            const updatedStock = product.stock - item.quantity;

            await setDoc(doc(db, "users", user.uid, "products", product.id), {
              ...product,
              stock: updatedStock,
            });

            console.log("SALE MOVEMENT", {
              productId: product.id,
              qty: item.quantity,
              previousStock: product.stock,
              currentStock: updatedStock,
            });

            try {
              await createStockMovement({
                userId: user.uid,
                productId: product.id,

                type: "SALE",

                qty: item.quantity,

                previousStock: product.stock,
                currentStock: updatedStock,

                note: `Penjualan #${transactionId}`,

                createdBy: "KASIR",
              });

              console.log("SALE MOVEMENT BERHASIL");
            } catch (err) {
              console.error("SALE MOVEMENT ERROR", err);
            }
          }
        }),
      );

      setLastTransaction(newTransaction);
      setCart([]);
      setIsCheckoutModalOpen(false);
      setIsReceiptModalOpen(true);
      setPaidAmount(0);
    } catch (error) {
      console.error("CHECKOUT ERROR:", error);
      showToast("Gagal menyimpan barang ke Cloud.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSaveProduct = async () => {
    if (!newProduct.name) {
      showToast("Nama barang harus diisi!");
      return;
    }
    if (!newProduct.barcode) {
      showToast(
        "Barcode harus diisi! Jika tidak ada barcode, silakan buat kode unik.",
      );
      return;
    }

    try {
      const id = editingProduct ? editingProduct.id : Date.now().toString();

      const productToSave = {
        ...newProduct,
        id,

        initialStock: editingProduct
          ? (newProduct.initialStock ??
            editingProduct.initialStock ??
            editingProduct.stock)
          : newProduct.stock,
      };

      await setDoc(doc(db, "users", user.uid, "products", id), productToSave);

      setIsAddingProduct(false);
      setIsImagePanelOpen(false);
      setEditingProduct(null);
      setNewProduct({
        id: "",
        barcode: "",
        name: "",
        supplier: "",
        price: 0,
        modal: 0,

        stock: 0,
        initialStock: 0,

        category: "Umum",
      });
      showToast("Barang berhasil disimpan!");
    } catch (error: any) {
      console.error("HANDLE SAVE PRODUCT ERROR:", error);

      alert(
        JSON.stringify(
          {
            code: error?.code,
            message: error?.message,
          },
          null,
          2,
        ),
      );

      showToast("Gagal menyimpan barang ke Cloud.");
    }
  };

  const handleDeleteProduct = async (id: string) => {
    console.log("DELETE CLICKED");

    const product = products.find((p) => p.id === id);

    console.log(product);

    setProductToDelete(product);
    setIsDeleteModalOpen(true);

    console.log("MODAL OPEN");
  };

  const confirmDeleteProduct = async () => {
    if (!productToDelete) return;

    try {
      await deleteDoc(
        doc(db, "users", user.uid, "products", productToDelete.id),
      );

      showToast(`"${productToDelete.name}" Berhasil Dihapus!`);

      setIsDeleteModalOpen(false);
      setProductToDelete(null);
    } catch (error) {
      console.error(error);
    }
  };

  const DeleteConfirmationModal = () => {
    if (!isDeleteModalOpen) return null;

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">
            Hapus Produk?
          </h2>

          <p className="text-slate-500 mb-6">
            Produk yang dihapus akan hilang dari daftar stok dan tidak dapat
            dipulihkan kembali.
          </p>

          <div className="flex justify-end gap-3">
            <button
              onClick={() => {
                setIsDeleteModalOpen(false);
                setProductToDelete(null);
              }}
              className="px-5 py-2 rounded-xl border border-slate-200 font-semibold"
            >
              Batal
            </button>

            <button
              onClick={confirmDeleteProduct}
              className="px-5 py-2 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700"
            >
              Ya, Hapus
            </button>
          </div>
        </div>
      </div>
    );
  };

  const topProducts = products
    .map((product) => {
      const sold = transactions.reduce((total, trx) => {
        const item = trx.items.find((i: any) => i.id === product.id);
        return total + (item ? item.quantity : 0);
      }, 0);

      return {
        name: product.name,
        sold,
      };
    })
    .sort((a, b) => b.sold - a.sold)
    .slice(0, 5);

  const lowStockProducts = products
    .filter((product) => product.stock <= 10)
    .sort((a, b) => a.stock - b.stock)
    .slice(0, 5);

  if (loadingStore) {
    return (
      <div className="h-screen flex items-center justify-center bg-slate-900 text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Memuat data toko...</h2>
          <p className="text-slate-400 mt-2">Mohon tunggu sebentar</p>
        </div>
      </div>
    );
  }

  console.log("VIEW SEKARANG =", view);
  console.log("ROLE SEKARANG =", role);

  if (!isLoggedIn) {
    return (
      <div className="h-screen w-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-indigo-600 rounded-2xl mx-auto flex items-center justify-center text-white mb-4">
              <ShoppingCart size={32} />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">
              IndoTech Minimarket
            </h1>
            <p className="text-slate-500 text-sm">
              Sistem Kasir Pintar & Terintegrasi
            </p>
          </div>
          <button
            onClick={() => {
              handleGoogleLogin();
            }}
            className="w-full py-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-2xl font-bold transition-all flex items-center justify-center space-x-2 shadow-sm"
          >
            <LogIn size={20} className="text-indigo-600" />
            <span>Masuk dengan Google</span>
          </button>
          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <div className="relative flex justify-center text-[10px] uppercase font-bold text-slate-400 bg-white inline-block mx-auto px-4">
              Atau Gunakan Akun Demo
            </div>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
                Username
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="admin"
                value={loginData.username}
                onChange={(e) =>
                  setLoginData({ ...loginData, username: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="••••••••"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
            </div>
            <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold transition-all">
              Login Ke Sistem
            </button>
          </form>
          <p className="text-center text-xs text-slate-400 font-medium">
            Demo: admin / admin123
          </p>
        </div>
      </div>
    );
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload || payload.length === 0) return null;

    return (
      <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl px-5 py-4 min-w-[220px]">
        <p className="font-bold text-slate-800 mb-3">Hari {label}</p>

        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <span className="font-medium text-slate-600">{entry.name}</span>

            <span className="font-bold text-slate-900">
              {entry.name === "Penjualan"
                ? `Rp ${entry.value.toLocaleString("id-ID")}`
                : entry.value}
            </span>
          </div>
        ))}
      </div>
    );
  };

  const handleInspectorEdit = () => {
    if (!selectedProduct) return;

    setEditingProduct(selectedProduct);
    setNewProduct(selectedProduct);
    setIsAddingProduct(true);
  };

  const handleInspectorDelete = () => {
    if (!selectedProduct) return;

    handleDeleteProduct(selectedProduct.id);
  };

  const handleInspectorRestock = () => {
    if (!selectedProduct) return;

    console.log("OPEN RESTOCK", selectedProduct);

    setRestockQty("");
    setRestockSupplier("");
    setRestockNote("");

    setIsRestockModalOpen(true);
  };

  const handleInspectorReduceStock = () => {
    if (!selectedProduct) return;

    setReduceQty("");
    setReduceReason("");
    setReduceNote("");

    setIsReduceStockModalOpen(true);
  };

  const handleInspectorAdjustment = () => {
    if (!selectedProduct) return;

    setAdjustmentStock(String(selectedProduct.stock));
    setAdjustmentReason("");
    setAdjustmentNote("");

    setIsAdjustmentModalOpen(true);
  };

  const handleConfirmRestock = async () => {
    if (!selectedProduct || !user) return;

    const qty = Number(restockQty);

    if (!qty || qty <= 0) {
      showToast("Jumlah tidak valid.");
      return;
    }

    try {
      console.log({
        stock: selectedProduct.stock,
        stockType: typeof selectedProduct.stock,
        qty,
        qtyType: typeof qty,
        result: Number(selectedProduct.stock) + Number(qty),
      });
      const updatedProduct = {
        ...selectedProduct,
        stock: Number(selectedProduct.stock) + qty,
      };

      console.log(
        "OLD:",
        selectedProduct.stock,
        "QTY:",
        qty,
        "NEW:",
        updatedProduct.stock,
      );

      await setDoc(
        doc(db, "users", user.uid, "products", selectedProduct.id),
        updatedProduct,
      );

      console.log("AFTER SETDOC", {
        selectedStock: selectedProduct.stock,
        updatedStock: updatedProduct.stock,
      });

      await createStockMovement({
        userId: user.uid,
        productId: selectedProduct.id,
        productName: selectedProduct.name,

        type: "RESTOCK",

        qty: qty,

        previousStock: selectedProduct.stock,
        currentStock: updatedProduct.stock,

        supplier: restockSupplier,
        note: restockNote,

        createdBy: "OWNER",
      });

      showToast("Restock berhasil.");

      setIsRestockModalOpen(false);

      setRestockQty("");
      setRestockSupplier("");
      setRestockNote("");
    } catch (error) {
      console.error(error);
      showToast("Gagal melakukan restock.");
    }
  };

  const handleConfirmReduceStock = async () => {
    if (!selectedProduct || !user) return;

    const qty = Number(reduceQty);

    if (!qty || qty <= 0) {
      showToast("Jumlah tidak valid.");
      return;
    }

    if (qty > selectedProduct.stock) {
      showToast("Jumlah melebihi stok saat ini.");
      return;
    }

    const updatedProduct = {
      ...selectedProduct,
      stock: selectedProduct.stock - qty,
    };

    try {
      await setDoc(
        doc(db, "users", user.uid, "products", selectedProduct.id),
        updatedProduct,
      );

      setProducts((prev) =>
        prev.map((item) =>
          item.id === updatedProduct.id ? updatedProduct : item,
        ),
      );

      await createStockMovement({
        userId: user.uid,
        productId: selectedProduct.id,
        productName: selectedProduct.name,

        type: "REDUCE",

        qty,

        previousStock: selectedProduct.stock,
        currentStock: updatedProduct.stock,

        supplier: reduceReason,
        note: reduceNote,

        createdBy: "OWNER",
      });

      setIsReduceStockModalOpen(false);

      setReduceQty("");
      setReduceReason("");
      setReduceNote("");

      showToast("Stok berhasil dikurangi.");
    } catch (error) {
      console.error(error);
      showToast("Gagal mengurangi stok.");
    }
  };

  const handleConfirmAdjustment = async () => {
    if (!selectedProduct || !user) return;

    const physicalStock = Number(adjustmentStock);

    if (isNaN(physicalStock) || physicalStock < 0) {
      showToast("Stok fisik tidak valid.");
      return;
    }

    const previousStock = Number(selectedProduct.stock);
    const currentStock = physicalStock;
    const difference = currentStock - previousStock;

    const updatedProduct = {
      ...selectedProduct,
      stock: currentStock,
    };

    try {
      await setDoc(
        doc(db, "users", user.uid, "products", selectedProduct.id),
        updatedProduct,
      );

      setProducts((prev) =>
        prev.map((item) =>
          item.id === updatedProduct.id ? updatedProduct : item,
        ),
      );

      await createStockMovement({
        userId: user.uid,
        productId: selectedProduct.id,
        productName: selectedProduct.name,

        type: "ADJUSTMENT",

        qty: Math.abs(difference),

        previousStock,
        currentStock,

        supplier: adjustmentReason,
        note: adjustmentNote,

        createdBy: "OWNER",
      });

      showToast("Penyesuaian stok berhasil.");

      setIsAdjustmentModalOpen(false);

      setAdjustmentStock("");
      setAdjustmentReason("");
      setAdjustmentNote("");
    } catch (error) {
      console.error(error);
      showToast("Gagal melakukan penyesuaian stok.");
    }
  };

  const supplierSuggestions = [
    ...new Set(
      products
        .map((p) => p.supplier)
        .filter(
          (supplier): supplier is string =>
            !!supplier && supplier.trim() !== "",
        ),
    ),
  ];

  const receiptData = lastTransaction
    ? formatReceipt(
        lastTransaction,
        {
          name: storeName,
        },
        {
          id: user?.uid ?? "",
          name: user?.displayName ?? "",
        },
      )
    : null;

  const handlePrintReceipt = () => {
    PrinterService.print();
  };

  return (
    <div
      className={`flex h-screen font-sans text-sm ${
        darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-800"
      }`}
    >
      {/* Sidebar Navigation */}
      <aside
        className={`hidden md:flex w-20 h-screen sticky top-0 border-r flex-col flex-shrink-0 ${
          darkMode
            ? "bg-slate-900 border-slate-800"
            : "bg-white border-slate-200"
        }`}
      >
        <div className="flex justify-center pt-6 pb-4">
          <div
            className={`w-10 h-10 rounded-2xl flex items-center justify-center text-white transition-all duration-300 ${
              darkMode
                ? "bg-indigo-600 shadow-[0_0_25px_2px_rgba(99,102,241,0.45)]"
                : "bg-indigo-600 shadow-lg shadow-indigo-200"
            }`}
          >
            <ShoppingCart size={24} />
          </div>
        </div>
        <div className={"flex flex-col items-center"}>
          <div
            className={`w-2 h-2 rounded-full ${user ? "bg-green-500 animate-pulse" : "bg-slate-300"}`}
          ></div>

          <span
            className={`text-[8px] font-bold mt-1 uppercase leading-none ${
              darkMode ? "text-slate-500" : "text-slate-400"
            }`}
          >
            {user ? "Cloud" : "Offline"}
          </span>

          <div className="text-[10px] text-red-500 mt-1">{role}</div>
          <div className="w-10 h-px bg-slate-200 my-3"></div>
        </div>
        <nav className="flex flex-col items-center space-y-6 flex-1 mt-6">
          <button
            onClick={() => setView("pos")}
            className={`p-3 rounded-xl transition-all ${view === "pos" ? "text-indigo-600 bg-indigo-50" : "text-slate-400 hover:text-indigo-600 hover:bg-slate-50"}`}
            title="Kasir"
          >
            <LayoutDashboard size={24} />
          </button>
          <button
            onClick={() => setView("stock")}
            className={`p-3 rounded-xl transition-all ${view === "stock" ? "text-indigo-600 bg-indigo-50" : "text-slate-400 hover:text-indigo-600 hover:bg-slate-50"}`}
            title="Stok Barang"
          >
            <Package size={24} />
          </button>
          <button
            onClick={() => setView("history")}
            className={`p-3 rounded-xl transition-all ${view === "history" ? "text-indigo-600 bg-indigo-50" : "text-slate-400 hover:text-indigo-600 hover:bg-slate-50"}`}
            title="Riwayat"
          >
            <History size={24} />
          </button>

          {role === "owner" && (
            <button
              onClick={() => {
                console.log("dashboard clicked");
                setView("dashboard");
              }}
              className={`p-3 rounded-xl transition-all ${
                view === "dashboard"
                  ? "text-indigo-600 bg-indigo-50"
                  : "text-slate-400 hover:text-indigo-600 hover:bg-slate-50"
              }`}
              title="Dashboard Penjualan"
            >
              <PieChart size={24} />
            </button>
          )}

          <button
            onClick={() => setView("settings")}
            className={`p-3 rounded-xl transition-all ${
              view === "settings"
                ? "text-indigo-600 bg-indigo-50"
                : "text-slate-400 hover:text-indigo-600 hover:bg-slate-50"
            }`}
            title="Pengaturan"
          >
            <Settings size={24} />
          </button>
        </nav>
        <div className="flex justify-center pb-4">
          <button
            onClick={handleLogout}
            className="p-3 mb-4 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
          >
            <LogOut size={24} />
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto flex flex-col">
        {/* VIEW: POS / KASIR */}
        {view === "pos" && (
          <div className="flex flex-col md:flex-row flex-1 min-h-0 overflow-auto">
            <div className="flex-1 min-h-0 p-4 md:p-6 xl:p-8 overflow-y-auto">
              <header className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
                <div>
                  <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-slate-900">
                    {storeName || "IndoTech POS"}
                  </h1>
                  <p className="text-xs font-medium text-indigo-600">
                    Powered by IndoTech
                  </p>
                  <p className="text-slate-500 text-sm">
                    Scan barcode atau ketik nama barang.
                  </p>
                </div>
                <div className="relative w-full md:w-80">
                  <Barcode
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    size={18}
                  />
                  <input
                    ref={barcodeRef}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck={false}
                    type="text"
                    placeholder="Cari Barang..."
                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                    value={manualSearch}
                    onChange={(e) => setManualSearch(e.target.value)}
                  />
                </div>
              </header>

              <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                {products
                  .filter(
                    (p) =>
                      p.name
                        .toLowerCase()
                        .includes(manualSearch.toLowerCase()) ||
                      p.barcode.includes(manualSearch),
                  )
                  .map((product) => (
                    <div
                      key={product.id}
                      onClick={() => addToCart(product)}
                      className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-indigo-500 hover:shadow-xl transition-all cursor-pointer active:scale-95 group"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded-md font-bold text-slate-400">
                          {product.barcode}
                        </span>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-md font-bold ${product.stock < 10 ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}
                        >
                          {product.stock} pcs
                        </span>
                      </div>
                      <h3
                        className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors uppercase line-clamp-2 leading-5"
                        title={product.name}
                      >
                        {truncateText(product.name, 48)}
                      </h3>
                      <p className="text-lg font-black text-slate-900 mt-2">
                        Rp {product.price.toLocaleString("id-ID")}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            {/* Right Cart Summary */}
            <aside
              className={`w-full lg:w-80 xl:w-96 border-t lg:border-t-0 lg:border-l flex flex-col ${
                darkMode
                  ? "bg-slate-900 border-slate-800"
                  : "bg-white border-slate-200"
              }`}
            >
              <div
                className={`p-6 border-b ${
                  darkMode ? `border-slate-800` : "border-slate-200"
                }`}
              >
                <h2 className="text-xl font-bold flex items-center">
                  Keranjang{" "}
                  <span className="ml-2 bg-indigo-100 text-indigo-600 text-xs px-2 py-1 rounded-full">
                    {cart.length}
                  </span>
                </h2>
              </div>
              <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-3">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center opacity-30 text-center">
                    <ShoppingCart size={48} className="mb-2" />
                    <p className="text-sm">Siap melayani pembeli</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-3 p-3 bg-slate-50 rounded-xl border border-slate-100"
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm truncate uppercase">
                          {item.name}
                        </h4>
                        <p className="text-xs text-slate-400">
                          Rp {item.price.toLocaleString("id-ID")}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateCartQty(item.id, -1)}
                          className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600"
                        >
                          <Minus size={12} />
                        </button>
                        {editingQtyId === item.id ? (
                          <input
                            autoFocus
                            type="number"
                            min={1}
                            max={item.stock}
                            inputMode="numeric"
                            className="w-12 text-center text-sm font-bold border border-indigo-400 rounded-md outline-none"
                            value={editingQty}
                            onChange={(e) => {
                              const value = e.target.value;

                              if (value === "") {
                                setEditingQty("");
                                return;
                              }

                              const qty = Math.max(
                                1,
                                Math.min(Number(value), item.stock),
                              );

                              setEditingQty(qty.toString());
                            }}
                            onBlur={() => {
                              const qty = Number(editingQty);

                              updateCartQtyDirect(item.id, qty);

                              setEditingQtyId(null);
                              setEditingQty("");
                            }}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                const qty = Number(editingQty);

                                updateCartQtyDirect(item.id, qty);

                                setEditingQtyId(null);
                                setEditingQty("");
                              }

                              if (e.key === "Escape") {
                                setEditingQtyId(null);
                                setEditingQty("");
                              }
                            }}
                          />
                        ) : (
                          <button
                            className="w-12 text-center text-sm font-bold"
                            onClick={() => {
                              setEditingQtyId(item.id);
                              setEditingQty(item.quantity.toString());
                            }}
                          >
                            {item.quantity}
                          </button>
                        )}
                        <button
                          onClick={() => updateCartQty(item.id, 1)}
                          className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() =>
                          setCart((c) => c.filter((x) => x.id !== item.id))
                        }
                        className="text-slate-300 hover:text-red-500"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))
                )}
              </div>
              <div className="shrink-0 p-6 bg-slate-900 text-white rounded-t-3xl">
                <div className="flex justify-between text-sm text-slate-400 mb-4 font-bold">
                  <span>TOTAL HARGA</span>
                  <span className="text-white text-2xl font-black">
                    Rp{" "}
                    {cart
                      .reduce((a, b) => a + b.price * b.quantity, 0)
                      .toLocaleString("id-ID")}
                  </span>
                </div>
                <button
                  disabled={cart.length === 0}
                  onClick={() => setIsCheckoutModalOpen(true)}
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <CreditCard size={20} />
                  <span>BAYAR / SELESAI</span>
                </button>
              </div>
            </aside>
          </div>
        )}

        {/* VIEW: STOCK MANAGEMENT */}
        {view === "stock" && (
          <div className="p-4 md:p-6 xl:p-8 overflow-y-auto flex-1 animate-in fade-in duration-300">
            <header className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
              <div>
                <h1
                  className={`text-2xl font-bold ${
                    darkMode ? "text-indigo-400" : "text-indigo-600"
                  }`}
                >
                  Gudang & Stok Barang
                </h1>
                <p
                  className={`text-sm ${
                    darkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Kelola katalog produk minimarket Anda.
                </p>
              </div>
              <button
                onClick={() => {
                  setEditingProduct(null);
                  setNewProduct({
                    id: "",
                    barcode: "",
                    name: "",
                    supplier: "",
                    price: 0,
                    modal: 0,
                    stock: 0,
                    initialStock: 0,
                    category: "Umum",
                  });
                  setIsAddingProduct(true);
                  setIsImagePanelOpen(false);
                }}
                className="w-full md:w-auto flex items-center justify-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all"
              >
                <Plus size={20} />
                <span>Tambah Barang Baru</span>
              </button>
            </header>

            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-3xl p-5 border border-slate-200">
                <p className="text-xs font-bold text-slate-400 uppercase">
                  Total Produk
                </p>

                <h2 className="text-3xl font-black text-slate-900 mt-2">
                  {products.length}
                </h2>
              </div>

              <div className="bg-white rounded-3xl p-5 border border-slate-200">
                <p className="text-xs font-bold text-slate-400 uppercase">
                  Total Stok
                </p>

                <h2 className="text-3xl font-black text-indigo-600 mt-2">
                  {products.reduce((a, b) => a + b.stock, 0)}
                </h2>
              </div>

              <div className="bg-white rounded-3xl p-5 border border-slate-200">
                <p className="text-xs font-bold text-slate-400 uppercase">
                  Stok Rendah
                </p>

                <h2 className="text-3xl font-black text-red-500 mt-2">
                  {products.filter((p) => p.stock <= 10).length}
                </h2>
              </div>

              <div className="bg-white rounded-3xl p-5 border border-slate-200">
                <p className="text-xs font-bold text-slate-400 uppercase">
                  Total Modal
                </p>

                <h2 className="text-xl font-black text-green-600 mt-2">
                  Rp{" "}
                  {products
                    .reduce((a, b) => a + b.modal * b.stock, 0)
                    .toLocaleString("id-ID")}
                </h2>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-4 mb-6">
              <div className="flex flex-col lg:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Cari barang, barcode, supplier..."
                  value={stockSearch}
                  onChange={(e) => setStockSearch(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <select
                  value={stockCategory}
                  onChange={(e) => setStockCategory(e.target.value)}
                  className="px-4 py-3 rounded-2xl border border-slate-200 font-semibold"
                >
                  <option value="Semua">Semua Kategori</option>

                  {[...new Set(products.map((p) => p.category))]
                    .sort()
                    .map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                </select>

                <select
                  value={stockSort}
                  onChange={(e) => setStockSort(e.target.value)}
                  className="px-4 py-3 rounded-2xl border border-slate-200 font-semibold"
                >
                  <option value="az">Nama A-Z</option>
                  <option value="za">Nama Z-A</option>
                  <option value="stock-low">Stok Terendah</option>
                  <option value="stock-high">Stok Tertinggi</option>
                </select>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-1 min-w-0">
                <div
                  className={`rounded-3xl border ${
                    darkMode
                      ? "bg-slate-900 border-slate-800"
                      : "bg-white border-slate-200 shadow-sm"
                  }`}
                >
                  <div className="overflow-x-auto overflow-y-visible xl:overflow-x-visible">
                    <table className="w-full xl:min-w-0 min-w-[1100px]">
                      <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                          <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">
                            Barcode
                          </th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">
                            Nama Barang
                          </th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">
                            Supplier
                          </th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">
                            Kategori
                          </th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase text-right">
                            Modal
                          </th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase text-right">
                            Harga Jual
                          </th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase text-center">
                            Stok
                          </th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase text-center">
                            Aksi
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-medium">
                        {products
                          .filter((p) => {
                            const keyword = stockSearch.toLowerCase();

                            const matchSearch =
                              p.name.toLowerCase().includes(keyword) ||
                              p.barcode.toLowerCase().includes(keyword) ||
                              p.supplier.toLowerCase().includes(keyword);

                            const matchCategory =
                              stockCategory === "Semua" ||
                              p.category === stockCategory;

                            return matchSearch && matchCategory;
                          })
                          .sort((a, b) => {
                            switch (stockSort) {
                              case "az":
                                return a.name.localeCompare(b.name);

                              case "za":
                                return b.name.localeCompare(a.name);

                              case "stock-low":
                                return a.stock - b.stock;

                              case "stock-high":
                                return b.stock - a.stock;

                              default:
                                return 0;
                            }
                          })
                          .map((p) => (
                            <tr
                              key={p.id}
                              onClick={() => {
                                if (selectedProductId === p.id) return;

                                setSelectedProductId(p.id);
                              }}
                              style={{
                                transition:
                                  "background-color .18s ease, transform .18s ease",
                              }}
                              className={`cursor-pointer transition-colors duration-200 ${
                                selectedProductId === p.id
                                  ? "border-l-4 border-indigo-600 bg-indigo-50/80"
                                  : "hover:bg-slate-50"
                              }`}
                            >
                              <td className="px-6 py-4 font-mono text-[11px] text-slate-400 whitespace-nowrap">
                                {p.barcode}
                              </td>
                              <td className="px-6 py-4 max-w-[340px]">
                                <div title={p.name} className="space-y-1">
                                  <p className="font-bold text-slate-900 uppercase leading-5 line-clamp-2">
                                    {p.name}
                                  </p>

                                  <p className="text-[11px] uppercase tracking-wide text-slate-400">
                                    {p.category}
                                  </p>
                                </div>
                              </td>
                              <td className="px-6 py-4 max-w-[220px]">
                                <p
                                  title={p.supplier}
                                  className="truncate text-xs uppercase text-slate-500"
                                >
                                  {p.supplier || "-"}
                                </p>
                              </td>
                              <td className="px-6 py-4">
                                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-600">
                                  {p.category}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-right font-bold text-slate-400 whitespace-nowrap">
                                Rp {p.modal?.toLocaleString("id-ID")}
                              </td>
                              <td className="px-6 py-4 text-right font-black text-indigo-600 whitespace-nowrap">
                                Rp {p.price.toLocaleString("id-ID")}
                              </td>
                              <td className="px-6 py-4 text-center">
                                <span
                                  className={`px-3 py-1 rounded-full text-xs font-bold ${p.stock < 10 ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}
                                >
                                  {p.stock} pcs
                                </span>
                              </td>
                              <td className="px-6 py-4 text-center">
                                <div className="flex justify-center space-x-2">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();

                                      setSelectedProductId(
                                        selectedProductId === p.id
                                          ? null
                                          : p.id,
                                      );
                                    }}
                                    className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"
                                    title="Detail Barang"
                                  >
                                    <Eye size={18} />
                                  </button>

                                  <button
                                    onClick={() => {
                                      setEditingProduct(p);
                                      setNewProduct(p);
                                      setIsImagePanelOpen(false);
                                      setIsAddingProduct(true);
                                    }}
                                    className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"
                                  >
                                    <Edit2 size={18} />
                                  </button>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleDeleteProduct(p.id);
                                    }}
                                    className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                                  >
                                    <Trash2 size={18} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Tambah/Edit Produk */}
            {selectedProduct && (
              <>
                <div
                  className="fixed inset-0 z-40 bg-transparent"
                  onClick={() => setSelectedProductId(null)}
                />

                <div
                  key={selectedProduct?.id}
                  className="fixed inset-y-0 right-0 z-50 w-[390px] h-screen animate-in fade-in slide-in-from-right-2 duration-150"
                >
                  <StockInspector
                    selectedProduct={selectedProduct}
                    onClose={() => setSelectedProductId(null)}
                    onEdit={handleInspectorEdit}
                    onRestock={handleInspectorRestock}
                    onReduceStock={handleInspectorReduceStock}
                    onAdjustment={handleInspectorAdjustment}
                    onDelete={handleInspectorDelete}
                    movements={stockMovements.filter(
                      (m) => m.productId === selectedProduct.id,
                    )}
                  />
                </div>
              </>
            )}

            {isAddingProduct && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 md:p-8">
                <div
                  className={`w-full max-w-lg overflow-hidden rounded-[28px] animate-in zoom-in-95 duration-200 ${
                    darkMode ? "bg-slate-900 text-slate-100" : "bg-white"
                  }`}
                >
                  <div className="relative mb-6 overflow-hidden bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-500">
                    <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-white/10 blur-3xl" />

                    <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-violet-300/20 blur-3xl" />

                    <div className="relative flex items-start justify-between px-7 pt-5 pb-5">
                      <div className="flex items-center gap-5 min-w-0">
                        <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-[18px] border border-white/20 bg-white/10 backdrop-blur-xl shadow-lg">
                          {editingProduct ? (
                            <Edit2
                              size={32}
                              strokeWidth={2.2}
                              className="text-white"
                            />
                          ) : (
                            <Plus
                              size={32}
                              strokeWidth={2.2}
                              className="text-white"
                            />
                          )}
                        </div>

                        <div className="min-w-0">
                          <h2 className="text-[34px] font-extrabold leading-tight tracking-tight text-white">
                            {editingProduct
                              ? "Edit Barang"
                              : "Input Barang Baru"}
                          </h2>

                          <p className="mt-1 truncate text-[15px] font-medium text-white/85">
                            {editingProduct
                              ? newProduct.name || "Perbarui informasi produk"
                              : "Tambahkan produk baru ke inventaris"}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setIsAddingProduct(false);
                          setIsImagePanelOpen(false);
                        }}
                        className="rounded-xl p-2 text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white"
                      >
                        <X size={22} />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4 px-6 py-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
                        Kode Barcode
                      </label>
                      <div className="flex flex-col md:flex-row gap-2">
                        <input
                          ref={addProductBarcodeRef}
                          type="text"
                          autoComplete="off"
                          autoCorrect="off"
                          autoCapitalize="off"
                          spellCheck={false}
                          className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="Scan atau Ketik..."
                          value={newProduct.barcode}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
                              barcode: e.target.value,
                            })
                          }
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setNewProduct({
                              ...newProduct,
                              barcode: "IT" + Date.now().toString().slice(-10),
                            })
                          }
                          className="px-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all text-xs font-bold shadow-sm"
                        >
                          Generate
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
                          Kategori
                        </label>
                        <select
                          className="w-full px-4 py-3 bg-slate-50 border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                          value={newProduct.category}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
                              category: e.target.value,
                            })
                          }
                        >
                          <option>Minuman</option>
                          <option>Makanan</option>
                          <option>Snack</option>
                          <option>Laptop/Elektronik</option>
                          <option>Alat Tulis</option>
                          <option>Lainnya</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
                          Nama Barang
                        </label>
                        <input
                          ref={addProductNameRef}
                          type="text"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="Contoh: Aqua 600ml"
                          value={newProduct.name}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
                              name: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
                        Supplier
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Contoh: PT Sumber Alfaria Trijaya"
                        value={newProduct.supplier}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            supplier: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
                          Harga Modal (Rp)
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 text-slate-500"
                          value={
                            newProduct.modal
                              ? formatRupiah(newProduct.modal.toString())
                              : ""
                          }
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
                              modal: Number(e.target.value.replace(/\D/g, "")),
                            })
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
                          Harga Jual (Rp)
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 font-bold"
                          value={
                            newProduct.price
                              ? formatRupiah(newProduct.price.toString())
                              : ""
                          }
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
                              price: Number(e.target.value.replace(/\D/g, "")),
                            })
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
                        Stok Awal
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                        value={newProduct.initialStock}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            initialStock: parseInt(e.target.value) || 0,
                            stock: parseInt(e.target.value) || 0,
                          })
                        }
                      />
                    </div>

                    {productImagePreview && (
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                        <img
                          src={productImagePreview}
                          alt="Preview Produk"
                          className="h-48 w-full rounded-xl object-cover"
                        />
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={() => setIsImagePanelOpen(true)}
                      className="w-full py-3 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-all font-semibold text-slate-700 mb-3"
                    >
                      Tambah Foto Produk
                    </button>

                    <button
                      onClick={handleSaveProduct}
                      className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold flex items-center justify-center space-x-2 shadow-lg shadow-indigo-100 transition-all"
                    >
                      <Save size={20} />
                      <span>Simpan Ke Database</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
            {isImagePanelOpen && (
              <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40">
                <div className="animate-in zoom-in-95 duration-200">
                  <ProductImagePanel
                    imagePreview={productImagePreview}
                    onSelect={handleSelectProductImage}
                  />

                  <button
                    type="button"
                    onClick={() => setIsImagePanelOpen(false)}
                    className="mt-4 w-full rounded-2xl bg-slate-700 py-3 font-semibold text-white hover:bg-slate-800"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        <RestockModal
          open={isRestockModalOpen}
          onClose={() => setIsRestockModalOpen(false)}
          qty={restockQty}
          setQty={setRestockQty}
          supplier={restockSupplier}
          setSupplier={setRestockSupplier}
          note={restockNote}
          setNote={setRestockNote}
          currentStock={selectedProduct?.stock ?? 0}
          productName={selectedProduct?.name ?? ""}
          suppliers={supplierSuggestions}
          onSave={handleConfirmRestock}
        />
        <ReduceStockModal
          open={isReduceStockModalOpen}
          onClose={() => setIsReduceStockModalOpen(false)}
          qty={reduceQty}
          setQty={setReduceQty}
          supplier={reduceReason}
          setSupplier={setReduceReason}
          note={reduceNote}
          setNote={setReduceNote}
          currentStock={selectedProduct?.stock ?? 0}
          productName={selectedProduct?.name ?? ""}
          suppliers={supplierSuggestions}
          onSave={handleConfirmReduceStock}
        />

        <AdjustmentModal
          open={isAdjustmentModalOpen}
          onClose={() => setIsAdjustmentModalOpen(false)}
          qty={adjustmentStock}
          setQty={setAdjustmentStock}
          reason={adjustmentReason}
          setReason={setAdjustmentReason}
          note={adjustmentNote}
          setNote={setAdjustmentNote}
          currentStock={selectedProduct?.stock ?? 0}
          productName={selectedProduct?.name ?? ""}
          suppliers={supplierSuggestions}
          onSave={handleConfirmAdjustment}
        />

        {/* VIEW: HISTORY TRANSAKSI */}
        {view === "history" && (
          <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-6 overflow-y-auto flex-1 animate-in slide-in-from-bottom duration-500">
            <header className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold text-slate-900">
                  Riwayat Penjualan
                </h1>

                <p className="text-slate-500 text-sm">
                  Semua transaksi yang sudah selesai.
                </p>
              </div>

              <button
                onClick={handleDeleteAllTransactions}
                className="px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                🗑 Hapus Semua
              </button>
            </header>

            <div className="space-y-4">
              {transactions.map((t) => (
                <div
                  className={`group p-5 md:p-6 rounded-3xl border transition-all hover:shadow-xl ${
                    darkMode
                      ? "bg-slate-900 border-slate-800"
                      : "bg-white border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-slate-400">
                          {t.date}
                        </span>

                        <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-bold">
                          ID: {t.id.slice(-6)}
                        </span>
                      </div>

                      <p className="text-sm font-bold text-slate-900">
                        {t.items.length} Item
                      </p>

                      <p className="text-xs text-slate-500 mt-1">
                        {t.items[0]?.name}
                        {t.items.length > 1
                          ? ` +${t.items.length - 1} item lainnya`
                          : ""}
                      </p>

                      <div className="flex gap-2">
                        <span
                          className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                            t.paymentMethod === "QRIS"
                              ? "bg-green-100 text-green-600"
                              : "bg-indigo-100 text-indigo-600"
                          }`}
                        >
                          {t.paymentMethod || "Tunai"}
                        </span>

                        <span className="text-[10px] text-slate-500 font-bold">
                          Rp {t.paidAmount?.toLocaleString("id-ID")}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-center gap-3 min-w-[180px]">
                    <p className="text-2xl font-black text-indigo-600">
                      Rp {t.total.toLocaleString("id-ID")}
                    </p>

                    <span className="text-[11px] bg-green-100 text-green-600 px-3 py-1 rounded-full font-bold">
                      LUNAS
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setSelectedTransaction(t);
                          setIsTransactionDetailOpen(true);
                        }}
                        className="text-xs px-3 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 font-semibold"
                      >
                        Detail
                      </button>

                      <button
                        onClick={() => {
                          setLastTransaction(t);
                          setIsReceiptModalOpen(true);
                        }}
                        className="text-xs px-3 py-1 rounded-xl bg-indigo-100 text-indigo-600 hover:bg-indigo-200 font-semibold"
                      >
                        Print
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        setLastTransaction(t);
                        setIsReceiptModalOpen(true);
                      }}
                      className="ml-4 p-2 text-slate-400 hover:text-indigo-600 transition-all opacity-0 group-hover:opacity-100"
                      title="Cetak Ulang Struk"
                    >
                      <Printer size={16} />
                    </button>
                  </div>
                </div>
              ))}
              {transactions.length === 0 && (
                <div className="py-20 text-center text-slate-400">
                  Belum ada transaksi hari ini.
                </div>
              )}
            </div>
          </div>
        )}

        {view === "dashboard" && (
          <div className="p-8 overflow-y-auto flex-1 animate-in fade-in duration-300">
            <header className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <select className="px-4 py-2 rounded-xl border border-slate-200 bg-white font-semibold shadow-sm">
                  <option>Semua Cabang</option>
                </select>

                <select
                  value={ownerPeriod}
                  onChange={(e) => setOwnerPeriod(e.target.value)}
                  className="px-4 py-2 rounded-xl border border-slate-200 bg-white font-semibold shadow-sm"
                >
                  <option value="today">Hari Ini</option>
                  <option value="month">Bulan Ini</option>
                  <option value="year">Tahun Ini</option>
                </select>
              </div>

              <div>
                <h1
                  className={`text-4xl font-black ${darkMode ? "text-white" : "text-indigo-600"}`}
                >
                  Dashboard Penjualan
                </h1>

                <p
                  className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}
                >
                  Pantau performa seluruh outlet secara realtime.
                </p>
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-8">
              <div
                className={`rounded-3xl border p-4 transition-all duration-300 hover:shadow-lg ${
                  darkMode
                    ? "bg-slate-900 border-slate-800"
                    : "bg-white border-slate-200"
                }`}
              >
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg flex-shrink-0">
                    <DollarSign size={18} className="text-white" />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                      {ownerPeriod === "today"
                        ? "Penjualan Hari Ini"
                        : ownerPeriod === "month"
                          ? "Penjualan Bulan Ini"
                          : "Penjualan Tahun Ini"}
                    </p>

                    <h2 className="text-[22px] leading-none font-black text-indigo-600 mt-1 whitespace-nowrap">
                      Rp{" "}
                      {(ownerPeriod === "today"
                        ? todaySales
                        : ownerPeriod === "month"
                          ? monthSales
                          : transactions.reduce((a, b) => a + b.total, 0)
                      ).toLocaleString("id-ID")}
                    </h2>

                    <div className="flex items-center gap-2 mt-3">
                      {salesGrowth > 0 ? (
                        <>
                          <span className="text-green-500 font-bold text-sm">
                            ▲ {salesGrowth.toFixed(1)}%
                          </span>
                          <span className="text-slate-400 text-sm">
                            dari kemarin
                          </span>
                        </>
                      ) : salesGrowth < 0 ? (
                        <>
                          <span className="text-red-500 font-bold text-sm">
                            ▼ {Math.abs(salesGrowth).toFixed(1)}%
                          </span>
                          <span className="text-slate-400 text-sm">
                            dari kemarin
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="text-slate-400 font-bold text-sm">
                            0%
                          </span>
                          <span className="text-slate-400 text-sm">
                            dari kemarin
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`rounded-3xl border p-4 border transition-all duration-300 ${
                  darkMode
                    ? "bg-slate-900 border-slate-800"
                    : "bg-white border-slate-200"
                }`}
              >
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center shadow-lg flex-shrink-0">
                    <BarChart3 size={18} className="text-white" />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                      Total Transaksi
                    </p>

                    <h2 className="text-[22px] leading-none font-black text-indigo-600 mt-1">
                      {totalTransactions}
                    </h2>

                    <div className="flex items-center gap-2 mt-3">
                      {transactionGrowth > 0 ? (
                        <>
                          <span className="text-green-500 font-bold text-sm">
                            ▲ {transactionGrowth.toFixed(1)}%
                          </span>

                          <span className="text-slate-400 text-sm">
                            dari kemarin
                          </span>
                        </>
                      ) : transactionGrowth < 0 ? (
                        <>
                          <span className="text-red-500 font-bold text-sm">
                            ▼ {Math.abs(transactionGrowth).toFixed(1)}%
                          </span>

                          <span className="text-slate-400 text-sm">
                            dari kemarin
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="text-slate-400 font-bold text-sm">
                            0%
                          </span>

                          <span className="text-slate-400 text-sm">
                            dari kemarin
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Total Keuntungan */}
              <div
                className={`rounded-3xl border p-4 transition-all duration-300 ${
                  darkMode
                    ? "bg-slate-900 border-slate-800"
                    : "bg-white border-slate-200"
                }`}
              >
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center shadow-lg flex-shrink-0">
                    <TrendingUp size={18} className="text-white" />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                      Total Keuntungan
                    </p>

                    <h2 className="text-[22px] leading-none font-black text-green-600 mt-1 whitespace-nowrap">
                      Rp {totalProfit.toLocaleString("id-ID")}
                    </h2>

                    <div className="flex items-center gap-2 mt-3">
                      {profitGrowth > 0 ? (
                        <>
                          <span className="text-green-500 font-bold text-sm">
                            ▲ {profitGrowth.toFixed(1)}%
                          </span>

                          <span className="text-slate-400 text-sm">
                            dari kemarin
                          </span>
                        </>
                      ) : profitGrowth < 0 ? (
                        <>
                          <span className="text-red-500 font-bold text-sm">
                            ▼ {Math.abs(profitGrowth).toFixed(1)}%
                          </span>

                          <span className="text-slate-400 text-sm">
                            dari kemarin
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="text-slate-400 font-bold text-sm">
                            0%
                          </span>

                          <span className="text-slate-400 text-sm">
                            dari kemarin
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`rounded-3xl border p-4 transition-all duration-300 ${
                  darkMode
                    ? "bg-slate-900 border-slate-800"
                    : "bg-white border-slate-200"
                }`}
              >
                <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                  Jumlah Produk
                </p>

                <h2 className="text-[36px] font-black text-indigo-600 mt-2">
                  {products.length}
                </h2>
              </div>

              <div
                className={`rounded-3xl border p-4 transition-all duration-300 ${
                  darkMode
                    ? "bg-slate-900 border-slate-800"
                    : "bg-white border-slate-200"
                }`}
              >
                <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                  Rata-rata Transaksi
                </p>

                <h2 className="text-[36px] font-black text-indigo-600 mt-2">
                  Rp {averageTransaction.toLocaleString("id-ID")}
                </h2>
              </div>

              <div
                className={`rounded-3xl border p-4 transition-all duration-300 ${
                  darkMode
                    ? "bg-slate-900 border-slate-800"
                    : "bg-white border-slate-200"
                }`}
              >
                <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                  Outlet Aktif
                </p>

                <h2 className="text-[36px] font-black text-green-600 mt-2">
                  1
                </h2>
              </div>
            </div>

            <div className="mt-10 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
              <h2 className="text-xl font-bold text-indigo-600 mb-4">
                Grafik Penjualan 7 Hari Terakhir
              </h2>

              <div className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesChartData}>
                    <CartesianGrid strokeDasharray="2 6" stroke="#f1f5f9" />

                    <XAxis dataKey="day" />

                    <YAxis
                      tickFormatter={(value) =>
                        `Rp${(value / 1000000).toFixed(0)}jt`
                      }
                    />

                    <Tooltip content={<CustomTooltip />} />

                    <Legend />

                    <Line
                      type="natural"
                      dataKey="sales"
                      stroke="#4f46e5"
                      strokeWidth={3}
                      name="Penjualan"
                      dot={{ r: 3 }}
                      activeDot={{ r: 6 }}
                    />

                    <Line
                      type="natural"
                      dataKey="trx"
                      stroke="#10b981"
                      strokeWidth={3}
                      name="Transaksi"
                      dot={{ r: 3 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
                <h2 className="text-xl font-bold text-indigo-600 mb-4">
                  🏆 Top Produk Terlaris
                </h2>

                <div className="space-y-4">
                  {topProducts.slice(0, 3).map((product, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center border-b border-slate-100 pb-3"
                    >
                      <div>
                        <p
                          className="font-semibold text-slate-800"
                          title={product.name}
                        >
                          #{index + 1}{" "}
                          {product.name.length > 25
                            ? product.name.substring(0, 25) + "..."
                            : product.name}
                        </p>
                      </div>

                      <span className="font-bold text-indigo-600">
                        {product.sold}x
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
                <h2 className="text-xl font-bold text-red-600 mb-4">
                  ⚠ Stok Menipis
                </h2>

                <div className="space-y-4">
                  {lowStockProducts.length === 0 ? (
                    <p className="text-slate-500">Semua stok aman 👍</p>
                  ) : (
                    lowStockProducts.slice(0, 3).map((product) => (
                      <div
                        key={product.id}
                        className="flex justify-between items-center border-b border-slate-100 pb-3"
                      >
                        <span
                          className="font-semibold text-slate-800"
                          title={product.name}
                        >
                          {product.name.length > 25
                            ? product.name.substring(0, 25) + "..."
                            : product.name}
                        </span>

                        <span className="font-bold text-red-500">
                          {product.stock}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {view === "settings" && (
          <div className="p-8 overflow-y-auto flex-1 animate-in fade-in duration-300">
            <SettingsPage
              settingsTab={settingsTab}
              setSettingsTab={setSettingsTab}
              setupStoreName={setupStoreName}
              setSetupStoreName={setSetupStoreName}
              user={user}
              role={role}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              handleSaveStore={handleSaveStore}
            />
          </div>
        )}
      </main>

      {toast && (
        <div
          className={`fixed top-8 right-8 z-50
      bg-slate-900/95 backdrop-blur-md
      text-white
      px-10 py-6
      rounded-3xl
      shadow-[0_20px_50px_rgba(0,0,0,0.35)]
      border border-slate-700
      transform transition-all duration-500 ease-out
      ${
        isToastVisible
          ? "translate-y-0 scale-100 opacity-100"
          : "-translate-y-8 scale-95 opacity-0"
      }
    `}
        >
          <div className="flex items-center gap-4">
            <div className="text-3xl">✅</div>

            <div>
              <p className="text-[24px] font-bold">{toast}</p>
            </div>
          </div>

          <div className="mt-4 h-1 bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-green-400 animate-[progress_3s_linear]" />
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {isCheckoutModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white w-full max-w-md rounded-3xl p-8 animate-in zoom-in-95 duration-200">
            <header className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
              <h2 className="text-xl font-bold flex items-center">
                Konfirmasi Pembayaran
              </h2>
              <button
                onClick={() => setIsCheckoutModalOpen(false)}
                className="text-slate-400 hover:text-red-500"
              >
                <X size={24} />
              </button>
            </header>

            <div className="space-y-6">
              <div className="p-4 bg-slate-50 rounded-2xl">
                <p className="text-xs font-bold text-slate-400 uppercase mb-1">
                  Total Tagihan
                </p>
                <p className="text-3xl font-black text-indigo-600">
                  Rp{" "}
                  {cart
                    .reduce((a, b) => a + b.price * b.quantity, 0)
                    .toLocaleString("id-ID")}
                </p>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">
                  Metode Pembayaran
                </label>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setPaymentMethod("Tunai")}
                    className={`py-3 rounded-xl font-bold transition-all ${
                      paymentMethod === "Tunai"
                        ? "bg-indigo-600 text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    💵 Tunai
                  </button>

                  <button
                    onClick={() => setPaymentMethod("QRIS")}
                    className={`py-3 rounded-xl font-bold transition-all ${
                      paymentMethod === "QRIS"
                        ? "bg-green-600 text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    📱 QRIS
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">
                  {paymentMethod === "QRIS"
                    ? "Nominal QRIS"
                    : "Uang Pelanggan (Tunai)"}
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">
                    Rp
                  </span>
                  <input
                    type="text"
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-xl font-bold outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="0"
                    value={paidAmount ? paidAmount.toLocaleString("id-ID") : ""}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");
                      setPaidAmount(Number(value) || 0);
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-3">
                <button
                  onClick={() => setPaidAmount((prev) => prev + 50000)}
                  className="py-3 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-600 rounded-xl font-bold text-sm transition-all"
                >
                  50K
                </button>

                <button
                  onClick={() => setPaidAmount((prev) => prev + 100000)}
                  className="py-3 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-600 rounded-xl font-bold text-sm transition-all"
                >
                  100K
                </button>

                <button
                  onClick={() => setPaidAmount((prev) => prev + 200000)}
                  className="py-3 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-600 rounded-xl font-bold text-sm transition-all"
                >
                  200K
                </button>

                <button
                  onClick={() => setPaidAmount((prev) => prev + 500000)}
                  className="py-3 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-600 rounded-xl font-bold text-sm transition-all"
                >
                  500K
                </button>

                <button
                  onClick={() => setPaidAmount((prev) => prev + 1000000)}
                  className="py-3 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-600 rounded-xl font-bold text-sm transition-all"
                >
                  1JT
                </button>

                <button
                  onClick={() => {
                    const totalBelanja = cart.reduce(
                      (a, b) => a + b.price * b.quantity,
                      0,
                    );

                    setPaidAmount(totalBelanja);
                  }}
                  className="py-3 bg-green-600 text-white hover:bg-green-700 rounded-xl font-bold text-sm transition-all"
                >
                  UANG PAS
                </button>

                <button
                  onClick={() => {
                    const totalBelanja = cart.reduce(
                      (a, b) => a + b.price * b.quantity,
                      0,
                    );

                    setPaidAmount(Math.ceil(totalBelanja / 50000) * 50000);
                  }}
                  className="col-span-2 py-3 bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl font-bold text-sm transition-all"
                >
                  BULATKAN
                </button>

                <button
                  onClick={() => setPaidAmount(0)}
                  className="py-3 bg-red-50 text-red-600 hover:bg-red-100 rounded-xl font-bold text-sm transition-all"
                >
                  RESET
                </button>
              </div>

              {paidAmount > 0 && (
                <div className="flex justify-between items-center p-4 rounded-2xl bg-green-50 border border-green-100">
                  <span className="font-bold text-green-700">Kembalian:</span>
                  <span className="text-xl font-black text-green-700">
                    Rp{" "}
                    {Math.max(
                      0,
                      paidAmount -
                        cart.reduce((a, b) => a + b.price * b.quantity, 0),
                    ).toLocaleString("id-ID")}
                  </span>
                </div>
              )}

              <button
                onClick={handleCheckout}
                disabled={
                  isProcessing ||
                  paidAmount <
                    cart.reduce((a, b) => a + b.price * b.quantity, 0)
                }
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-100"
              >
                <span>
                  {isProcessing ? "MEMPROSES..." : "PROSES TRANSAKSI"}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Receipt Modal */}
      {isReceiptModalOpen && lastTransaction && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setIsReceiptModalOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-[390px] bg-white shadow-2xl flex flex-col">
            <div className="border-b px-6 py-5">
              <h2 className="text-xl font-black text-indigo-600">
                Pembayaran Berhasil
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Silakan periksa struk sebelum mencetak.
              </p>
            </div>

            <div className="receipt-container flex-1 overflow-y-auto px-6 py-6">
              <Receipt receipt={receiptData} />
            </div>

            <div className="border-t p-6 flex gap-3">
              <button
                onClick={() => setIsReceiptModalOpen(false)}
                className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl font-bold transition-all"
              >
                Tutup
              </button>
              <button
                onClick={handlePrintReceipt}
                className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold flex items-center justify-center space-x-2 transition-all shadow-lg shadow-indigo-100"
              >
                <Printer size={16} />
                <span>Cetak</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {isTransactionDetailOpen && selectedTransaction && (
        <div className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black text-indigo-600">
                Detail Transaksi
              </h2>

              <button
                onClick={() => setIsTransactionDetailOpen(false)}
                className="text-slate-400 hover:text-red-500 text-xl"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-500">ID Transaksi</span>

                <span className="font-bold">{selectedTransaction.id}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">Jumlah Item</span>

                <span className="font-bold">
                  {selectedTransaction.items.length}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">Produk Pertama</span>

                <span className="font-bold">
                  {selectedTransaction.items[0]?.name}
                </span>
              </div>
            </div>

            <button className="w-full py-3 bg-slate-100 hover:bg-slate-200 rounded-xl font-bold">
              Lihat Daftar Barang
            </button>

            <div className="border-t pt-4 mt-4 space-y-2">
              <div className="flex justify-between">
                <span>Metode Pembayaran</span>
                <span className="font-bold">
                  {selectedTransaction.paymentMethod || "Tunai"}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Dibayar</span>
                <span className="font-bold">
                  Rp {selectedTransaction.paidAmount?.toLocaleString("id-ID")}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Kembalian</span>
                <span className="font-bold">
                  Rp {selectedTransaction.changeAmount?.toLocaleString("id-ID")}
                </span>
              </div>

              <div className="flex justify-between text-lg font-black text-indigo-600 pt-2">
                <span>Total</span>
                <span>
                  Rp {selectedTransaction.total.toLocaleString("id-ID")}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <DeleteConfirmationModal />
    </div>
  );
}
