import React, { useState, useEffect, useRef, useMemo } from "react";
import { truncateText } from "./lib/truncateText";
import useBarcodeScanner from "./core/useBarcodeScanner";
import { createStockMovement } from "./services/stockMovement";
import { createReturn } from "./modules/returns/returnService";
import StockMovementTimeline from "./components/StockMovementTimeline";
import ProductImagePicker from "./components/ProductImagePicker";
import ProductEditorModal from "./components/ProductEditorModal";
import CategoryCombobox from "./components/CategoryCombobox";
import UnitCombobox from "./components/UnitCombobox";
import ProductImagePanel from "./components/ProductImagePanel";
import PageContainer from "./components/PageContainer";
import Receipt from "./modules/receipt/Receipt";
import { formatReceipt } from "./modules/receipt/receiptFormatter";
import { PrinterService } from "./modules/receipt/printer/PrinterService";
import StoreSettings from "./components/settings/StoreSettings";
import SettingsMenu from "./components/settings/SettingsMenu";
import PrinterSettings from "./components/settings/PrinterSettings";
import StaffSettings from "./components/settings/StaffSettings";
import { subscribeStaff, verifyStaffPin } from "./modules/staff/service";
import InvoiceCalendar from "./components/InvoiceCalendar";
import { DEFAULT_CATEGORIES } from "./constants/defaultCategories";
import { DEFAULT_UNITS } from "./constants/defaultUnits";
import { verifyOwnerPin, hasOwnerPin, setOwnerPin } from "./modules/owner";
import ProductFormMain from "./components/product/ProductFormMain";
import { canAccess } from "./modules/staff/permissions";
import { getCurrentActor } from "./modules/staff/actor";
import type { Staff } from "./modules/staff/types";
import {
  setOperatorSession,
  setOwnerSession,
  clearPOSSession,
  getCurrentStaff,
  getCurrentMode,
  resetSessionMemory,
} from "./modules/staff/session";
import SecuritySettings from "./components/settings/SecuritySettings";
import SettingsPage from "./components/settings/SettingsPage";
import OperatorGate from "./components/auth/OperatorGate";
import OwnerPinModal from "./components/auth/OwnerPinModal";
import OperatorCard from "./components/auth/OperatorCard";
import type { Product } from "./types/product";
import type { CartItem } from "./types/cart";
import { ResponsiveContainer, LineChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  Search,
  CreditCard,
  Package,
  History,
  FileText,
  LayoutDashboard,
  LogOut,
  Barcode,
  Save,
  X,
  PenLine,
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

import { signInWithPopup, onAuthStateChanged, signOut, signInWithCredential, GoogleAuthProvider } from "firebase/auth";

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
  limit,
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

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

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
    initialStock: 100,
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
    initialStock: 12,
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
  const [isOperatorGateOpen, setIsOperatorGateOpen] = useState(true);
  const [isOwnerPinOpen, setIsOwnerPinOpen] = useState(false);
  const [ownerPinMode, setOwnerPinMode] = useState<"SETUP" | "VERIFY">("VERIFY");
  const [showOwnerMode, setShowOwnerMode] = useState(false);
  const [isEndShiftConfirmOpen, setIsEndShiftConfirmOpen] = useState(false);
  const [staffList, setStaffList] = useState<Staff[]>([]);
  const [staffLoading, setStaffLoading] = useState(true);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [view, setView] = useState<"pos" | "stock" | "history" | "reports" | "dashboard" | "settings" | "">("pos");

  const [settingsTab, setSettingsTab] = useState<"store" | "printer" | "staff" | "security">("store");

  const [currentRole, setCurrentRole] = useState<"state" | "owner" | null>(null);

  const [isRoleModalOpen, setIsRoleModalOpen] = useState(true);
  const [ownerPinInput, setOwnerPinOutput] = useState("");

  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  const [expandedDiscountId, setExpandedDiscountId] = useState<string | null>(null);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [stockMovements, setStockMovements] = useState<any[]>([]);
  const [selectedOutlet, setSelectedOutlet] = useState("Outlet Pusat");
  const [ownerPeriod, setOwnerPeriod] = useState("today");

  useEffect(() => {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      setIsOperatorGateOpen(true);
      return;
    }

    const mode = getCurrentMode(currentUser.uid);

    if (mode) {
      setIsOperatorGateOpen(false);
    } else {
      setIsOperatorGateOpen(true);
    }
  }, []);

  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  function handleEndShift() {
    const user = auth.currentUser;

    if (!user) return;

    clearPOSSession(user.uid);

    setShowOwnerMode(true);
    setIsEndShiftConfirmOpen(false);
    setIsOperatorGateOpen(true);
  }

  useEffect(() => {
    let timer: number | undefined;
    let isHolding = false;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Shift") return;

      if (e.repeat) return;

      if (isHolding) return;

      isHolding = true;

      if (e.key === "Shift") {
        if (timer) return;

        timer = window.setTimeout(() => {
          const currentUser = auth.currentUser;

          if (!currentUser) return;

          const mode = getCurrentMode(currentUser.uid);

          if (mode === "OPERATOR") {
            if (!isEndShiftConfirmOpen) {
              setIsEndShiftConfirmOpen(true);
            }
          }

          if (mode === "OWNER") {
            setShowOwnerMode(true);

            setIsOperatorGateOpen(true);
          }
        }, 1500);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "Shift") {
        if (timer) {
          clearTimeout(timer);
          timer = 0;
        }

        isHolding = false;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const now = new Date();

  const formatTransactionDate = (timestamp: number) => {
    const date = new Date(timestamp);

    return date.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const formatTransactionTime = (timestamp: number) => {
    const date = new Date(timestamp);

    return date.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatInvoiceNumber = (id: string | number) => {
    const timestamp = Number(id);

    const date = new Date(timestamp);

    const year = date.getFullYear();

    const month = String(date.getMonth() + 1).padStart(2, "0");

    const day = String(date.getDate()).padStart(2, "0");

    const sequence = String(id).slice(-6);

    return `INV-${year}${month}${day}-${sequence}`;
  };

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");

    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const cardClass = darkMode ? "bg-slate-900 border border-slate-800" : "bg-white border border-slate-200";

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
    yesterdaySales > 0 ? ((todaySales - yesterdaySales) / yesterdaySales) * 100 : todaySales > 0 ? 100 : 0;

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
      ? ((todayTransactions - yesterdayTransactions) / yesterdayTransactions) * 100
      : todayTransactions > 0
        ? 100
        : 0;

  const monthSales = transactions
    .filter((t) => {
      const trxDate = new Date(t.date);
      const now = new Date();

      return trxDate.getMonth() === now.getMonth() && trxDate.getFullYear() === now.getFullYear();
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
      return trxDate.getMonth() === now.getMonth() && trxDate.getFullYear() === now.getFullYear();
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
    yesterdayProfit > 0 ? ((totalProfit - yesterdayProfit) / yesterdayProfit) * 100 : totalProfit > 0 ? 100 : 0;

  const averageTransaction =
    totalTransactions > 0 ? filteredTransactions.reduce((acc, t) => acc + t.total, 0) / totalTransactions : 0;

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
      resetSessionMemory();

      setShowOwnerMode(false);
      setIsOperatorGateOpen(true);
      setIsEndShiftConfirmOpen(false);

      setUser(u);

      if (u) {
        setIsLoggedIn(true);

        const userRef = doc(db, "users", u.uid);

        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {
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
            }
          );
        }

        const latestSnap = await getDoc(userRef);

        if (latestSnap.exists()) {
          const data = latestSnap.data();

          setStoreName(data.storeName || "");
          setSetupStoreName(data.storeName || "");
          setStoreLogo(data.storeLogo || "");
          setRole(data.role || "owner");

          setShowOwnerMode(data.role === "owner");
        }

        const unsubscribeStaff = subscribeStaff(u.uid, (staffs) => {
          setStaffList(staffs);

          setStaffLoading(false);
        });

        setLoadingStore(false);
      } else {
        setIsLoggedIn(false);

        setProducts([]);
        setCategories([]);
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

      const platform = await window.electron.system.platform();

      const printers = await PrinterService.getPrinters();
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
            }) as Product
        );

        setProducts(items);
      },
      (error) => handleFirestoreError(error)
    );

    getDocs(collection(db, "users", user.uid, "categories"))
      .then((snapshot) => {
        const userCategories = snapshot.docs
          .map((doc) => {
            const data = doc.data();
            return String(data.name ?? "").trim();
          })
          .filter(Boolean);

        const mergedCategories = [
          ...userCategories,
          ...DEFAULT_CATEGORIES.filter(
            (category) => !userCategories.some((userCategory) => userCategory.toLowerCase() === category.toLowerCase())
          ),
        ];

        setCategories(mergedCategories);
      })
      .catch(handleFirestoreError);

    getDocs(collection(db, "users", user.uid, "units"))
      .then((snapshot) => {
        const userUnits = snapshot.docs
          .map((doc) => {
            const data = doc.data();
            return String(data.name ?? "").trim();
          })
          .filter(Boolean);

        const mergedUnits = [
          ...userUnits,
          ...DEFAULT_UNITS.filter(
            (unit) => !userUnits.some((userUnit) => userUnit.toLowerCase() === unit.toLowerCase())
          ),
        ];

        setUnits(mergedUnits);
      })
      .catch(handleFirestoreError);

    const unsubTransactions = onSnapshot(
      query(collection(db, "users", user.uid, "transactions"), orderBy("date", "desc")),
      (snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setTransactions(items);
      },
      (error) => handleFirestoreError(error)
    );

    const unsubMovements = onSnapshot(
      query(collection(db, "users", user.uid, "movements"), orderBy("createdAt", "desc")),
      (snapshot) => {
        setStockMovements(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      },
      (error) => handleFirestoreError(error)
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
  const [isEditingTotal, setIsEditingTotal] = useState(false);

  const [manualTotal, setManualTotal] = useState<number | null>(null);

  const [manualTotalInput, setManualTotalInput] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("Tunai");
  const [lastTransaction, setLastTransaction] = useState<any>(null);
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null);

  const [isTransactionDetailOpen, setIsTransactionDetailOpen] = useState(false);

  const [isReturnModalOpen, setIsReturnModalOpen] = useState(false);

  const [returnItems, setReturnItems] = useState<any[]>([]);
  const [returnReason, setReturnReason] = useState("");
  const [isReturning, setIsReturning] = useState(false);

  const returnTotalRefund = returnItems.reduce((acc, item) => acc + item.price * item.returnQty, 0);

  // States for Stock Management
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const [showInvoiceCalendar, setShowInvoiceCalendar] = useState(false);

  const [draftInvoiceDate, setDraftInvoiceDate] = useState("");

  const [showMonthMenu, setShowMonthMenu] = useState(false);

  const [showYearMenu, setShowYearMenu] = useState(false);
  const [invoiceCalendarPosition, setInvoiceCalendarPosition] = useState({
    top: 0,
    left: 0,
  });
  const selectedProduct = products.find((p) => p.id === selectedProductId) ?? null;

  const selectedMovements = useMemo(() => {
    if (!selectedProduct) return [];

    return stockMovements.filter((m) => m.productId === selectedProduct.id);
  }, [stockMovements, selectedProduct]);

  const [isImagePanelOpen, setIsImagePanelOpen] = useState(false);
  const [productImagePreview, setProductImagePreview] = useState("");

  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const [categories, setCategories] = useState<string[]>(DEFAULT_CATEGORIES);

  const [categoryKeyword, setCategoryKeyword] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  /**
   * Master Unit
   * Default bawaan aplikasi + custom milik client.
   */
  const [units, setUnits] = useState<string[]>(DEFAULT_UNITS);

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
    unit: "PCS",
    imageUrl: "",

    invoiceDate: "",
    invoiceNumber: "",
    invoiceNote: "",
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

      const provider = new GoogleAuthProvider();

      provider.setCustomParameters({
        prompt: "select_account",
      });

      await signInWithPopup(auth, provider);
      showToast("Berhasil login dengan Google!");
    } catch (error) {
      console.error(error);
      showToast("Gagal login Google");
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
      const snapshot = await getDocs(collection(db, "users", user.uid, "transactions"));

      await Promise.all(
        snapshot.docs.map((docItem) => deleteDoc(doc(db, "users", user.uid, "transactions", docItem.id)))
      );

      showToast("Semua riwayat transaksi berhasil dihapus");
    } catch (error) {
      console.error(error);

      showToast("Gagal menghapus riwayat transaksi");
    }
  };

  const showToast = (message: string) => {
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

    try {
      await setDoc(
        doc(db, "users", user.uid),
        {
          storeName: setupStoreName,
          storeLogo: storeLogo,
        },
        {
          merge: true,
        }
      );

      setStoreName(setupStoreName);

      showToast("Profil toko berhasil disimpan!");
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    showToast("Silakan masuk menggunakan akun Google.");
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
            `Stok "${truncateText(product.name, 28)}" hanya tersedia ${product.stock} ${(product.unit ?? "PCS").toUpperCase()}.`
          );
          return prev;
        }

        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
          discountPercent: 0,
          discountEnabled: false,
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
      })
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
            `Stok "${truncateText(product.name, 28)}" hanya tersedia ${product.stock} ${(product.unit ?? "PCS").toUpperCase()}.`
          );
        }

        return {
          ...item,
          quantity: newQty,
        };
      })
    );
  };

  const getDiscountedUnitPrice = (item: CartItem) => {
    if (!item.discountEnabled) {
      return item.price;
    }

    return Math.round(item.price * (1 - item.discountPercent / 100));
  };

  const getCartItemTotal = (item: CartItem) => {
    return getDiscountedUnitPrice(item) * item.quantity;
  };

  const getCartSubtotal = () => {
    return cart.reduce((total, item) => total + getCartItemTotal(item), 0);
  };

  const totalTagihan = manualTotal ?? getCartSubtotal();

  const getCartDiscountTotal = () => {
    return cart.reduce((total, item) => {
      const original = item.price * item.quantity;

      const final = getCartItemTotal(item);

      return total + (original - final);
    }, 0);
  };

  const originalSubtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const discountTotal = getCartDiscountTotal();

  const overrideAmount = manualTotal === null ? 0 : Math.max(0, getCartSubtotal() - totalTagihan);

  const updateCartDiscount = (id: string, percent: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;

        return {
          ...item,
          discountPercent: Math.max(0, Math.min(100, percent)),
        };
      })
    );
  };

  const toggleCartDiscount = (id: string) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;

        // Jika sedang ON lalu dimatikan
        if (item.discountEnabled) {
          return {
            ...item,
            discountEnabled: false,
            discountPercent: 0,
          };
        }

        // Jika sedang OFF lalu dihidupkan
        return {
          ...item,
          discountEnabled: true,
        };
      })
    );
  };

  const [isProcessing, setIsProcessing] = useState(false);
  const [productPage, setProductPage] = useState<"main" | "additional">("main");

  const handleCheckout = async () => {
    const subtotal = totalTagihan;

    if (paidAmount < subtotal) {
      showToast("Uang pelanggan kurang!");
      return;
    }

    setIsProcessing(true);
    const transactionId = Date.now().toString();
    const actor = getCurrentActor();

    const newTransaction = {
      id: transactionId,

      items: cart.map((it) => ({
        id: it.id,
        name: it.name,

        // harga asli (tetap disimpan)
        price: it.price,

        // diskon item
        discountPercent: it.discountPercent,

        // harga setelah diskon
        finalPrice: getDiscountedUnitPrice(it),

        quantity: it.quantity,

        // total item setelah diskon
        total: getCartItemTotal(it),
      })),

      total: subtotal,
      subtotalOriginal: getCartSubtotal(),

      isManualOverride: manualTotal !== null,

      overrideAmount: manualTotal === null ? 0 : getCartSubtotal() - totalTagihan,

      // Return accounting
      returnedAmount: 0,

      // Nilai bersih transaksi setelah return
      netTotal: subtotal,

      // Status transaksi
      status: "COMPLETED",

      paidAmount: paidAmount,
      changeAmount: paidAmount - subtotal,

      paymentMethod: paymentMethod,

      outletId: "OutletPusat",

      date: Date.now(),

      createdBy: {
        actorId: actor.actorId,
        actorName: actor.actorName,
        actorType: actor.actorType,
        actorRole: actor.actorRole,
      },
      manualOverrideBy:
        manualTotal !== null
          ? {
              actorId: actor.actorId,
              actorName: actor.actorName,
              actorType: actor.actorType,
              actorRole: actor.actorRole,
            }
          : null,
    };

    try {
      // Save Transaction to Firestore
      await setDoc(doc(db, "users", user.uid, "transactions", transactionId), newTransaction);

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

            try {
              await createStockMovement({
                userId: user.uid,

                productId: product.id,

                productName: product.name,

                type: "SALE",

                qty: item.quantity,

                previousStock: product.stock,
                currentStock: updatedStock,

                note: `Penjualan #${transactionId}`,

                createdBy: getCurrentActor(),
              });
            } catch (err) {
              console.error("SALE MOVEMENT ERROR", err);
            }
          }
        })
      );

      setLastTransaction(newTransaction);
      setCart([]);

      setManualTotal(null);
      setManualTotalInput("");
      setIsEditingTotal(false);

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

  const buildProductChanges = (before: Product, after: Product) => {
    const changes: Record<
      string,
      {
        before: any;
        after: any;
      }
    > = {};

    const fields = ["barcode", "name", "supplier", "price", "modal", "category"] as const;

    fields.forEach((field) => {
      if (before[field] !== after[field]) {
        changes[field] = {
          before: before[field],
          after: after[field],
        };
      }
    });

    return changes;
  };

  const handleSaveProduct = async () => {
    if (!newProduct.name) {
      showToast("Nama barang harus diisi!");
      return;
    }
    if (!newProduct.barcode) {
      showToast("Barcode harus diisi! Jika tidak ada barcode, silakan buat kode unik.");
      return;
    }

    try {
      const id = editingProduct ? editingProduct.id : Date.now().toString();

      const now = new Date();

      const productToSave = {
        ...newProduct,

        id,

        initialStock: editingProduct
          ? (newProduct.initialStock ?? editingProduct.initialStock ?? editingProduct.stock)
          : newProduct.stock,

        createdAt: editingProduct ? (editingProduct.createdAt ?? now) : now,

        updatedAt: now,

        createdBy: editingProduct ? (editingProduct.createdBy ?? getCurrentActor()) : getCurrentActor(),

        updatedBy: {
          uid: user.uid,
          email: user.email,
          role,
        },
      };

      await setDoc(doc(db, "users", user.uid, "products", id), productToSave);

      /**
       * Simpan kategori milik client.
       * Tidak mengubah product lama.
       * Tidak menghapus apa pun.
       */
      const categoryName = newProduct.category.trim();

      if (categoryName) {
        const categoryRef = doc(db, "users", user.uid, "categories", categoryName);

        const categorySnapshot = await getDoc(categoryRef);

        if (!categorySnapshot.exists()) {
          await setDoc(categoryRef, {
            name: categoryName,
            createdAt: new Date(),
          });
        }
      }

      /**
       * Simpan unit milik client.
       * Hanya membuat document baru jika belum ada.
       * Tidak mengubah data produk lama.
       */
      const unitName = newProduct.unit?.trim();

      if (unitName) {
        const unitRef = doc(db, "users", user.uid, "units", unitName);

        const unitSnapshot = await getDoc(unitRef);

        if (!unitSnapshot.exists()) {
          await setDoc(unitRef, {
            name: unitName,
            createdAt: new Date(),
          });
        }
      }

      if (!editingProduct) {
        await createStockMovement({
          userId: user.uid,

          productId: id,

          productName: productToSave.name,

          unit: productToSave.unit,

          type: "CREATE",

          qty: productToSave.stock,

          previousStock: 0,

          currentStock: productToSave.stock,

          supplier: productToSave.supplier,

          note: "Input barang baru",

          createdBy: getCurrentActor(),
        });
      } else {
        const changes = buildProductChanges(editingProduct, productToSave);

        if (Object.keys(changes).length > 0) {
          await createStockMovement({
            userId: user.uid,

            productId: id,

            productName: productToSave.name,

            unit: productToSave.unit,

            type: "EDIT",

            qty: 0,

            previousStock: editingProduct.stock,

            currentStock: productToSave.stock,

            note: "Edit informasi barang",

            changes,

            createdBy: getCurrentActor(),
          });
        }
      }

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

        category: "",
        unit: "PCS",

        invoiceDate: "",
        invoiceNumber: "",
        invoiceNote: "",
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
          2
        )
      );

      showToast("Gagal menyimpan barang ke Cloud.");
    }
  };

  const handleDeleteProduct = async (id: string) => {
    const product = products.find((p) => p.id === id);

    setProductToDelete(product);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteProduct = async () => {
    if (!productToDelete) return;

    try {
      await deleteDoc(doc(db, "users", user.uid, "products", productToDelete.id));

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
          <h2 className="text-2xl font-bold text-slate-800 mb-3">Hapus Produk?</h2>

          <p className="text-slate-500 mb-6">
            Produk yang dihapus akan hilang dari daftar stok dan tidak dapat dipulihkan kembali.
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

  if (!isLoggedIn) {
    return (
      <div className="h-screen w-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-indigo-600 rounded-2xl mx-auto flex items-center justify-center text-white mb-4">
              <ShoppingCart size={32} />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">IndoTech Minimarket</h1>
            <p className="text-slate-500 text-sm">Sistem Kasir Pintar & Terintegrasi</p>
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
              {entry.name === "Penjualan" ? `Rp ${entry.value.toLocaleString("id-ID")}` : entry.value}
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

  const handleUpdateInvoiceDate = async (invoiceDate: string) => {
    if (!selectedProduct || !user) return;

    try {
      const updatedProduct = {
        ...selectedProduct,
        invoiceDate,
      };

      await setDoc(doc(db, "users", user.uid, "products", selectedProduct.id), updatedProduct);

      showToast("Tanggal berdasarkan faktur berhasil diperbarui.");
    } catch (error) {
      console.error(error);
      showToast("Gagal memperbarui tanggal faktur.");
    }
  };

  const handleInvoiceCalendarSave = async (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const value = `${year}-${month}-${day}`;

    setDraftInvoiceDate(value);

    await handleUpdateInvoiceDate(value);

    setShowInvoiceCalendar(false);
  };

  const handleConfirmRestock = async () => {
    if (!selectedProduct || !user) return;

    const qty = Number(restockQty);

    if (!qty || qty <= 0) {
      showToast("Jumlah tidak valid.");
      return;
    }

    try {
      const updatedProduct = {
        ...selectedProduct,
        stock: Number(selectedProduct.stock) + qty,
      };

      await setDoc(doc(db, "users", user.uid, "products", selectedProduct.id), updatedProduct);

      await createStockMovement({
        userId: user.uid,
        productId: selectedProduct.id,
        productName: selectedProduct.name,

        unit: selectedProduct.unit,

        type: "RESTOCK",

        qty: qty,

        previousStock: selectedProduct.stock,
        currentStock: updatedProduct.stock,

        supplier: restockSupplier,
        note: restockNote,

        createdBy: getCurrentActor(),
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

  const openReturnModal = (transaction: any) => {
    setSelectedTransaction(transaction);

    setReturnItems(
      transaction.items.map((item: any) => ({
        ...item,
        returnQty: 0,
      }))
    );

    setReturnReason("");

    setIsReturnModalOpen(true);
  };

  const handleConfirmReturn = async () => {
    if (!selectedTransaction || !user) return;

    if (!returnItems.length) {
      showToast("Pilih barang yang ingin diretur.");
      return;
    }

    try {
      setIsReturning(true);

      for (const item of returnItems) {
        const productSnap = await getDoc(doc(db, "users", user.uid, "products", item.id));

        if (!productSnap.exists()) {
          continue;
        }

        const productData = productSnap.data();

        const previousStock = Number(productData.stock || 0);

        const updatedStock = previousStock + item.returnQty;

        await setDoc(doc(db, "users", user.uid, "products", item.id), {
          ...productData,
          stock: updatedStock,
        });

        await createStockMovement({
          userId: user.uid,

          productId: item.id,

          productName: item.name,

          type: "RETURN",

          qty: item.returnQty,

          previousStock,

          currentStock: updatedStock,

          note: returnReason,

          createdBy: getCurrentActor(),
        });
      }

      const totalRefund = returnItems.reduce((acc, item) => acc + item.price * item.returnQty, 0);

      await createReturn({
        userId: user.uid,

        transactionId: selectedTransaction.id,

        items: returnItems,

        totalRefund,

        reason: returnReason,

        createdBy: getCurrentActor(),
      });

      // UPDATE TRANSACTION ACCOUNTING

      const previousReturnedAmount = Number(selectedTransaction.returnedAmount || 0);

      const newReturnedAmount = previousReturnedAmount + totalRefund;

      const newNetTotal = selectedTransaction.total - newReturnedAmount;

      const newStatus = newNetTotal <= 0 ? "RETURNED" : "PARTIAL_RETURN";

      await setDoc(doc(db, "users", user.uid, "transactions", selectedTransaction.id), {
        ...selectedTransaction,

        returnedAmount: newReturnedAmount,

        netTotal: newNetTotal,

        status: newStatus,
      });

      showToast("Return berhasil.");

      setIsReturnModalOpen(false);

      setReturnItems([]);

      setReturnReason("");
    } catch (error) {
      console.error(error);

      showToast("Return gagal.");
    } finally {
      setIsReturning(false);
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
      await setDoc(doc(db, "users", user.uid, "products", selectedProduct.id), updatedProduct);

      setProducts((prev) => prev.map((item) => (item.id === updatedProduct.id ? updatedProduct : item)));

      await createStockMovement({
        userId: user.uid,
        productId: selectedProduct.id,
        productName: selectedProduct.name,

        unit: selectedProduct.unit,

        type: "REDUCE",

        qty,

        previousStock: selectedProduct.stock,
        currentStock: updatedProduct.stock,

        supplier: reduceReason,
        note: reduceNote,

        createdBy: getCurrentActor(),
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
      await setDoc(doc(db, "users", user.uid, "products", selectedProduct.id), updatedProduct);

      setProducts((prev) => prev.map((item) => (item.id === updatedProduct.id ? updatedProduct : item)));

      await createStockMovement({
        userId: user.uid,
        productId: selectedProduct.id,
        productName: selectedProduct.name,

        unit: selectedProduct.unit,

        type: "ADJUSTMENT",

        qty: Math.abs(difference),

        previousStock,
        currentStock,

        reason: adjustmentReason,
        note: adjustmentNote,

        createdBy: getCurrentActor(),
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

  const supplierSuggestions: string[] = [
    ...new Set<string>(
      products.map((p) => p.supplier).filter((supplier): supplier is string => !!supplier && supplier.trim() !== "")
    ),
  ];

  const receiptData = lastTransaction
    ? formatReceipt(
        lastTransaction,
        {
          name: storeName,
        },
        {
          id: lastTransaction.createdBy?.actorId ?? "",
          name: lastTransaction.createdBy?.actorName ?? "OWNER",
        }
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
          darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
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
          <div className={`w-2 h-2 rounded-full ${user ? "bg-green-500 animate-pulse" : "bg-slate-300"}`}></div>

          <span
            className={`text-[8px] font-bold mt-1 uppercase leading-none ${
              darkMode ? "text-slate-500" : "text-slate-400"
            }`}
          >
            {user ? "Cloud" : "Offline"}
          </span>

          <div className="text-[10px] text-red-500 mt-1">
            {getCurrentMode(user?.uid ?? "") === "OPERATOR" ? getCurrentStaff(user?.uid ?? "")?.name : "OWNER"}
          </div>
          <div className="w-10 h-px bg-slate-200 my-3"></div>
        </div>
        <nav className="flex flex-col items-center space-y-6 flex-1 mt-6">
          {canAccess("checkout") && (
            <button
              onClick={() => setView("pos")}
              className={`p-3 rounded-xl transition-all ${view === "pos" ? "text-indigo-600 bg-indigo-50" : "text-slate-400 hover:text-indigo-600 hover:bg-slate-50"}`}
              title="Kasir"
            >
              <LayoutDashboard size={24} />
            </button>
          )}

          {canAccess("inventory") && (
            <button
              onClick={() => setView("stock")}
              className={`p-3 rounded-xl transition-all ${
                view === "stock"
                  ? "text-indigo-600 bg-indigo-50"
                  : "text-slate-400 hover:text-indigo-600 hover:bg-slate-50"
              }`}
              title="Stok Barang"
            >
              <Package size={24} />
            </button>
          )}

          {canAccess("salesHistory") && (
            <button
              onClick={() => setView("history")}
              className={`p-3 rounded-xl transition-all ${
                view === "history"
                  ? "text-indigo-600 bg-indigo-50"
                  : "text-slate-400 hover:text-indigo-600 hover:bg-slate-50"
              }`}
              title="Riwayat"
            >
              <History size={24} />
            </button>
          )}

          {canAccess("dashboard") && (
            <button
              onClick={() => {
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

          {getCurrentMode(user?.uid ?? "") === "OWNER" && (
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
          )}
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
                  <p className="text-xs font-medium text-indigo-600">Powered by IndoTech</p>
                  <p className="text-slate-500 text-sm">Scan barcode atau ketik nama barang.</p>
                </div>
                <div className="relative w-full md:w-80">
                  <Barcode className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
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
                    (p) => p.name.toLowerCase().includes(manualSearch.toLowerCase()) || p.barcode.includes(manualSearch)
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
                          {product.stock} {(product.unit ?? "PCS").toUpperCase()}
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
                darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
              }`}
            >
              <div className={`p-6 border-b ${darkMode ? `border-slate-800` : "border-slate-200"}`}>
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
                    <div key={item.id} className="overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
                      <div className="flex items-center space-x-3 p-3">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm truncate uppercase">{item.name}</h4>
                          <p className="text-xs text-slate-400">Rp {item.price.toLocaleString("id-ID")}</p>
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

                                const qty = Math.max(1, Math.min(Number(value), item.stock));

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
                          <button
                            onClick={() => toggleCartDiscount(item.id)}
                            className={`w-6 h-6 rounded-md border flex items-center justify-center text-[10px] font-black transition-all ${
                              item.discountEnabled
                                ? "bg-indigo-600 border-indigo-600 text-white"
                                : "bg-white border-slate-200 text-slate-400 hover:text-indigo-600 hover:border-indigo-300"
                            }`}
                          >
                            %
                          </button>
                        </div>
                        <button
                          onClick={() => setCart((c) => c.filter((x) => x.id !== item.id))}
                          className="text-slate-300 hover:text-red-500"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      {item.discountEnabled && (
                        <div className="border-t border-slate-200 bg-slate-100 px-3 py-2">
                          <div className="flex items-center justify-between text-[11px] text-slate-500">
                            <span className="font-bold">DISC</span>

                            <div className="flex items-center gap-2">
                              <span className="font-semibold">Rp {item.price.toLocaleString("id-ID")}</span>

                              <span>→</span>

                              <span className="font-bold text-indigo-600">
                                Rp {getDiscountedUnitPrice(item).toLocaleString("id-ID")}
                              </span>

                              <div className="flex items-center rounded-md border border-slate-300 bg-white px-2 py-0.5">
                                <input
                                  type="text"
                                  inputMode="numeric"
                                  value={item.discountPercent === 0 ? "" : item.discountPercent}
                                  onFocus={(e) => {
                                    if (item.discountPercent === 0) {
                                      e.target.select();
                                    }
                                  }}
                                  onChange={(e) => {
                                    const raw = e.target.value.replace(/\D/g, "");

                                    const percent = raw === "" ? 0 : Math.min(100, Number(raw));

                                    updateCartDiscount(item.id, percent);
                                  }}
                                  className="w-10 bg-transparent text-center text-[11px] font-bold outline-none"
                                />

                                <span className="ml-1 text-[11px] font-bold">%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
              <div className="shrink-0 p-6 bg-slate-900 text-white rounded-t-3xl">
                <div className="flex justify-between text-sm text-slate-400 mb-4 font-bold">
                  <span>TOTAL HARGA</span>
                  <span className="text-white text-2xl font-black">Rp {getCartSubtotal().toLocaleString("id-ID")}</span>
                </div>
                <button
                  disabled={cart.length === 0 || !canAccess("checkout")}
                  onClick={() => {
                    setManualTotal(null);
                    setManualTotalInput("");
                    setIsEditingTotal(false);

                    setIsCheckoutModalOpen(true);
                  }}
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
        {view === "stock" && canAccess("inventory") && (
          <div className="p-4 md:p-6 xl:p-8 overflow-y-auto flex-1 animate-in fade-in duration-300">
            <header className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
              <div>
                <h1 className={`text-2xl font-bold ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}>
                  Gudang & Stok Barang
                </h1>

                <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                  Kelola katalog produk minimarket Anda.
                </p>
              </div>

              {canAccess("editProduct") && (
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
                      category: "",
                      unit: "PCS",

                      invoiceDate: "",
                      invoiceNumber: "",
                      invoiceNote: "",
                    });

                    setIsAddingProduct(true);
                    setIsImagePanelOpen(false);
                  }}
                  className="w-full md:w-auto flex items-center justify-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all"
                >
                  <Plus size={20} />
                  <span>Tambah Barang Baru</span>
                </button>
              )}
            </header>

            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-3xl p-5 border border-slate-200">
                <p className="text-xs font-bold text-slate-400 uppercase">Total Produk</p>

                <h2 className="text-3xl font-black text-slate-900 mt-2">{products.length}</h2>
              </div>

              <div className="bg-white rounded-3xl p-5 border border-slate-200">
                <p className="text-xs font-bold text-slate-400 uppercase">Total Stok</p>

                <h2 className="text-3xl font-black text-indigo-600 mt-2">
                  {products.reduce((a, b) => a + b.stock, 0)}
                </h2>
              </div>

              <div className="bg-white rounded-3xl p-5 border border-slate-200">
                <p className="text-xs font-bold text-slate-400 uppercase">Stok Rendah</p>

                <h2 className="text-3xl font-black text-red-500 mt-2">
                  {products.filter((p) => p.stock <= 10).length}
                </h2>
              </div>

              <div className="bg-white rounded-3xl p-5 border border-slate-200">
                <p className="text-xs font-bold text-slate-400 uppercase">Total Modal</p>

                <h2 className="text-xl font-black text-green-600 mt-2">
                  Rp {products.reduce((a, b) => a + b.modal * b.stock, 0).toLocaleString("id-ID")}
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

                  {[...new Set(products.map((p) => p.category))].sort().map((category) => (
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
                    darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-sm"
                  }`}
                >
                  <div className="overflow-x-auto overflow-y-visible xl:overflow-x-visible">
                    <table className="w-full xl:min-w-0 min-w-[1100px]">
                      <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                          <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">Barcode</th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">Nama Barang</th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">Supplier</th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">Kategori</th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase text-right">Modal</th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase text-right">
                            Harga Jual
                          </th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase text-center">Stok</th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase text-center">Aksi</th>
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

                            const matchCategory = stockCategory === "Semua" || p.category === stockCategory;

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
                                transition: "background-color .18s ease, transform .18s ease",
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
                                  <p className="font-bold text-slate-900 uppercase leading-5 line-clamp-2">{p.name}</p>

                                  <p className="text-[11px] uppercase tracking-wide text-slate-400">{p.category}</p>
                                </div>
                              </td>
                              <td className="px-6 py-4 max-w-[220px]">
                                <p title={p.supplier} className="truncate text-xs uppercase text-slate-500">
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
                                  {p.stock} {(p.unit ?? "PCS").toUpperCase()}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-center">
                                <div className="flex justify-center space-x-2">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();

                                      setSelectedProductId(selectedProductId === p.id ? null : p.id);
                                    }}
                                    className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"
                                    title="Detail Barang"
                                  >
                                    <Eye size={18} />
                                  </button>

                                  {canAccess("editProduct") && (
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
                                  )}

                                  {canAccess("deleteProduct") && (
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleDeleteProduct(p.id);
                                      }}
                                      className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                                    >
                                      <Trash2 size={18} />
                                    </button>
                                  )}
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
                <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setSelectedProductId(null)} />

                {showInvoiceCalendar && (
                  <InvoiceCalendar
                    value={draftInvoiceDate ? new Date(draftInvoiceDate) : undefined}
                    onCancel={() => {
                      setDraftInvoiceDate(selectedProduct?.invoiceDate ?? "");
                      setShowInvoiceCalendar(false);
                    }}
                    onSave={handleInvoiceCalendarSave}
                  />
                )}

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
                    onInvoiceDateChange={() => {
                      if (!selectedProduct) return;

                      setDraftInvoiceDate(selectedProduct.invoiceDate ?? "");

                      setShowInvoiceCalendar(true);
                    }}
                    movements={selectedMovements}
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
                            <Edit2 size={32} strokeWidth={2.2} className="text-white" />
                          ) : (
                            <Plus size={32} strokeWidth={2.2} className="text-white" />
                          )}
                        </div>

                        <div className="min-w-0">
                          <h2 className="text-[34px] font-extrabold leading-tight tracking-tight text-white">
                            {editingProduct ? "Edit Barang" : "Input Barang Baru"}
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
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Kode Barcode</label>
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
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Kategori</label>

                        <CategoryCombobox
                          value={newProduct.category}
                          categories={categories}
                          onChange={(value) =>
                            setNewProduct({
                              ...newProduct,
                              category: value,
                            })
                          }
                          onAddCategory={(value) =>
                            setNewProduct({
                              ...newProduct,
                              category: value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Nama Barang</label>
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
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Supplier</label>

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
                          value={newProduct.modal ? formatRupiah(newProduct.modal.toString()) : ""}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
                              modal: Number(e.target.value.replace(/\D/g, "")),
                            })
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Harga Jual (Rp)</label>
                        <input
                          type="text"
                          disabled={!canAccess("editPrice")}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 font-bold disabled:opacity-60 disabled:cursor-not-allowed"
                          value={newProduct.price ? formatRupiah(newProduct.price.toString()) : ""}
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
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Stok Awal</label>

                      <div className="flex gap-2">
                        <input
                          type="text"
                          className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                          value={newProduct.initialStock}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
                              initialStock: parseInt(e.target.value) || 0,
                              stock: parseInt(e.target.value) || 0,
                            })
                          }
                        />

                        <div className="w-36">
                          <UnitCombobox
                            value={newProduct.unit ?? "PCS"}
                            units={units}
                            onChange={(value) =>
                              setNewProduct({
                                ...newProduct,
                                unit: value,
                              })
                            }
                            onUseUnit={(value) =>
                              setNewProduct({
                                ...newProduct,
                                unit: value,
                              })
                            }
                          />
                        </div>
                      </div>
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
                  <ProductImagePanel imagePreview={productImagePreview} onSelect={handleSelectProductImage} />

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
          currentUnit={selectedProduct?.unit}
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
          currentUnit={selectedProduct?.unit}
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
          currentUnit={selectedProduct?.unit}
          productName={selectedProduct?.name ?? ""}
          suppliers={supplierSuggestions}
          onSave={handleConfirmAdjustment}
        />

        {/* VIEW: HISTORY TRANSAKSI */}
        {view === "history" && canAccess("salesHistory") && (
          <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-6 overflow-y-auto flex-1 animate-in slide-in-from-bottom duration-500">
            <header className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Riwayat Penjualan</h1>

                <p className="text-slate-500 text-sm">Semua transaksi yang sudah selesai.</p>
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
                  key={t.id}
                  className={`group rounded-3xl border p-6 transition-all hover:shadow-xl flex items-center justify-between gap-8 ${
                    darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
                  }`}
                >
                  {/* LEFT SIDE */}

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center shrink-0">
                        <FileText size={24} className="text-indigo-600" />
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-black text-slate-900">{formatInvoiceNumber(t.id)}</h3>

                          <span className="px-2 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold">
                            {t.items?.length || 0} Item
                          </span>
                        </div>

                        <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
                          <span>📅 {formatTransactionDate(t.date)}</span>

                          <span>🕒 {formatTransactionTime(t.date)} WIB</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5">
                      <p className="font-bold text-slate-900 truncate">
                        {t.items?.[0]?.name || "Produk"}

                        {t.items?.length > 1 ? ` +${t.items.length - 1} item lainnya` : ""}
                      </p>

                      <p className="text-sm text-slate-500 mt-1">
                        Qty: {t.items?.reduce((sum: number, item: any) => sum + item.quantity, 0)}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 mt-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          t.paymentMethod === "QRIS" ? "bg-green-100 text-green-600" : "bg-indigo-100 text-indigo-600"
                        }`}
                      >
                        {t.paymentMethod || "Tunai"}
                      </span>

                      {t.returnedAmount > 0 && (
                        <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-bold">
                          RETURN Rp {t.returnedAmount.toLocaleString("id-ID")}
                        </span>
                      )}

                      <span className="text-xs text-slate-500 font-bold">👤 {t.createdBy?.actorName ?? "-"}</span>
                    </div>
                  </div>

                  {/* RIGHT SIDE */}

                  <div className="min-w-[280px] border-l border-slate-200/70 pl-8 flex flex-col items-end gap-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        t.paidAmount >= t.total ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600"
                      }`}
                    >
                      {t.paidAmount >= t.total ? "LUNAS" : "BELUM LUNAS"}
                    </span>

                    <p className="text-3xl font-black text-indigo-600">
                      Rp {(t.netTotal ?? t.total)?.toLocaleString("id-ID")}
                    </p>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => {
                          setSelectedTransaction(t);
                          setIsTransactionDetailOpen(true);
                        }}
                        className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-sm font-bold"
                      >
                        Detail
                      </button>

                      {canAccess("return") && (
                        <button
                          onClick={() => {
                            openReturnModal(t);
                          }}
                          className="px-4 py-2 rounded-xl bg-orange-50 text-orange-600 hover:bg-orange-100 text-sm font-bold"
                        >
                          ↩ Retur
                        </button>
                      )}

                      <button
                        onClick={() => {
                          setLastTransaction(t);
                          setIsReceiptModalOpen(true);
                        }}
                        className="px-4 py-2 rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-100 text-sm font-bold"
                      >
                        Print
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {transactions.length === 0 && (
                <div className="py-20 text-center text-slate-400">Belum ada transaksi hari ini.</div>
              )}
            </div>
          </div>
        )}

        {view === "dashboard" && canAccess("dashboard") && (
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
                <h1 className={`text-4xl font-black ${darkMode ? "text-white" : "text-indigo-600"}`}>
                  Dashboard Penjualan
                </h1>

                <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                  Pantau performa seluruh outlet secara realtime.
                </p>
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-8">
              <div
                className={`rounded-3xl border p-4 transition-all duration-300 hover:shadow-lg ${
                  darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
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
                          <span className="text-green-500 font-bold text-sm">▲ {salesGrowth.toFixed(1)}%</span>
                          <span className="text-slate-400 text-sm">dari kemarin</span>
                        </>
                      ) : salesGrowth < 0 ? (
                        <>
                          <span className="text-red-500 font-bold text-sm">▼ {Math.abs(salesGrowth).toFixed(1)}%</span>
                          <span className="text-slate-400 text-sm">dari kemarin</span>
                        </>
                      ) : (
                        <>
                          <span className="text-slate-400 font-bold text-sm">0%</span>
                          <span className="text-slate-400 text-sm">dari kemarin</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`rounded-3xl border p-4 border transition-all duration-300 ${
                  darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
                }`}
              >
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center shadow-lg flex-shrink-0">
                    <BarChart3 size={18} className="text-white" />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-bold uppercase tracking-wide text-slate-500">Total Transaksi</p>

                    <h2 className="text-[22px] leading-none font-black text-indigo-600 mt-1">{totalTransactions}</h2>

                    <div className="flex items-center gap-2 mt-3">
                      {transactionGrowth > 0 ? (
                        <>
                          <span className="text-green-500 font-bold text-sm">▲ {transactionGrowth.toFixed(1)}%</span>

                          <span className="text-slate-400 text-sm">dari kemarin</span>
                        </>
                      ) : transactionGrowth < 0 ? (
                        <>
                          <span className="text-red-500 font-bold text-sm">
                            ▼ {Math.abs(transactionGrowth).toFixed(1)}%
                          </span>

                          <span className="text-slate-400 text-sm">dari kemarin</span>
                        </>
                      ) : (
                        <>
                          <span className="text-slate-400 font-bold text-sm">0%</span>

                          <span className="text-slate-400 text-sm">dari kemarin</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Total Keuntungan */}
              <div
                className={`rounded-3xl border p-4 transition-all duration-300 ${
                  darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
                }`}
              >
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center shadow-lg flex-shrink-0">
                    <TrendingUp size={18} className="text-white" />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-bold uppercase tracking-wide text-slate-500">Total Keuntungan</p>

                    <h2 className="text-[22px] leading-none font-black text-green-600 mt-1 whitespace-nowrap">
                      Rp {totalProfit.toLocaleString("id-ID")}
                    </h2>

                    <div className="flex items-center gap-2 mt-3">
                      {profitGrowth > 0 ? (
                        <>
                          <span className="text-green-500 font-bold text-sm">▲ {profitGrowth.toFixed(1)}%</span>

                          <span className="text-slate-400 text-sm">dari kemarin</span>
                        </>
                      ) : profitGrowth < 0 ? (
                        <>
                          <span className="text-red-500 font-bold text-sm">▼ {Math.abs(profitGrowth).toFixed(1)}%</span>

                          <span className="text-slate-400 text-sm">dari kemarin</span>
                        </>
                      ) : (
                        <>
                          <span className="text-slate-400 font-bold text-sm">0%</span>

                          <span className="text-slate-400 text-sm">dari kemarin</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`rounded-3xl border p-4 transition-all duration-300 ${
                  darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
                }`}
              >
                <p className="text-sm font-bold uppercase tracking-wide text-slate-500">Jumlah Produk</p>

                <h2 className="text-[36px] font-black text-indigo-600 mt-2">{products.length}</h2>
              </div>

              <div
                className={`rounded-3xl border p-4 transition-all duration-300 ${
                  darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
                }`}
              >
                <p className="text-sm font-bold uppercase tracking-wide text-slate-500">Rata-rata Transaksi</p>

                <h2 className="text-[36px] font-black text-indigo-600 mt-2">
                  Rp {averageTransaction.toLocaleString("id-ID")}
                </h2>
              </div>

              <div
                className={`rounded-3xl border p-4 transition-all duration-300 ${
                  darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
                }`}
              >
                <p className="text-sm font-bold uppercase tracking-wide text-slate-500">Outlet Aktif</p>

                <h2 className="text-[36px] font-black text-green-600 mt-2">1</h2>
              </div>
            </div>

            <div className="mt-10 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
              <h2 className="text-xl font-bold text-indigo-600 mb-4">Grafik Penjualan 7 Hari Terakhir</h2>

              <div className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesChartData}>
                    <CartesianGrid strokeDasharray="2 6" stroke="#f1f5f9" />

                    <XAxis dataKey="day" />

                    <YAxis tickFormatter={(value) => `Rp${(value / 1000000).toFixed(0)}jt`} />

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
                <h2 className="text-xl font-bold text-indigo-600 mb-4">🏆 Top Produk Terlaris</h2>

                <div className="space-y-4">
                  {topProducts.slice(0, 3).map((product, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-slate-100 pb-3">
                      <div>
                        <p className="font-semibold text-slate-800" title={product.name}>
                          #{index + 1} {product.name.length > 25 ? product.name.substring(0, 25) + "..." : product.name}
                        </p>
                      </div>

                      <span className="font-bold text-indigo-600">{product.sold}x</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
                <h2 className="text-xl font-bold text-red-600 mb-4">⚠ Stok Menipis</h2>

                <div className="space-y-4">
                  {lowStockProducts.length === 0 ? (
                    <p className="text-slate-500">Semua stok aman 👍</p>
                  ) : (
                    lowStockProducts.slice(0, 3).map((product) => (
                      <div
                        key={product.id}
                        className="flex justify-between items-center border-b border-slate-100 pb-3"
                      >
                        <span className="font-semibold text-slate-800" title={product.name}>
                          {product.name.length > 25 ? product.name.substring(0, 25) + "..." : product.name}
                        </span>

                        <span className="font-bold text-red-500">{product.stock}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {view === "settings" && getCurrentMode(user?.uid ?? "") === "OWNER" && (
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
              showToast={showToast}
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
        ${isToastVisible ? "translate-y-0 scale-100 opacity-100" : "-translate-y-8 scale-95 opacity-0"}
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
        <div className="fixed inset-0 bg-slate-900/25 flex items-center justify-center p-4 z-50">
          <div className="bg-white w-full max-w-md rounded-3xl px-8 pt-7 pb-6 animate-in zoom-in-95 duration-200">
            <header className="flex flex-col md:flex-row justify-between md:items-center gap-3 mb-5">
              <h2 className="text-xl font-bold flex items-center">Konfirmasi Pembayaran</h2>
              <button
                onClick={() => {
                  setManualTotal(null);
                  setManualTotalInput("");
                  setIsEditingTotal(false);

                  setIsCheckoutModalOpen(false);
                }}
                className="text-slate-400 hover:text-red-500"
              >
                <X size={24} />
              </button>
            </header>

            <div className="space-y-4">
              <div className="px-4 pt-2.5 pb-3 bg-slate-50 rounded-2xl space-y-1">
                <div className="flex justify-between items-center text-sm text-slate-500 mb-1">
                  <span>Subtotal</span>
                  <span>Rp {originalSubtotal.toLocaleString("id-ID")}</span>
                </div>

                {discountTotal > 0 && (
                  <div className="flex justify-between items-center text-sm text-red-500 font-semibold mt-1">
                    <span>Diskon</span>
                    <span>-Rp {discountTotal.toLocaleString("id-ID")}</span>
                  </div>
                )}

                {overrideAmount > 0 && (
                  <div className="flex justify-between items-center text-sm font-semibold text-amber-600 mt-1">
                    <span>Penyesuaian</span>
                    <span>-Rp {overrideAmount.toLocaleString("id-ID")}</span>
                  </div>
                )}

                <div className="border-t border-slate-200 pt-3 pb-2 mt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold uppercase tracking-wide text-slate-500">TOTAL</span>

                    {!isEditingTotal && (
                      <button
                        type="button"
                        onClick={() => {
                          setIsEditingTotal(true);
                          setManualTotalInput(totalTagihan.toString());
                        }}
                        className="transition-colors"
                      >
                        <PenLine
                          size={16}
                          className={
                            manualTotal === null
                              ? "text-slate-400 transition-colors hover:text-indigo-500"
                              : "text-amber-500"
                          }
                        />
                      </button>
                    )}
                  </div>

                  <div className="mt-1">
                    {isEditingTotal ? (
                      <div className="relative w-full">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 font-bold text-slate-400">Rp</span>

                        <input
                          autoFocus
                          type="text"
                          inputMode="numeric"
                          value={manualTotalInput ? Number(manualTotalInput).toLocaleString("id-ID") : ""}
                          onChange={(e) => {
                            const raw = e.target.value.replace(/\D/g, "");
                            setManualTotalInput(raw);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              const value = Number(manualTotalInput || "0");
                              const subtotal = getCartSubtotal();

                              if (value === subtotal) {
                                setManualTotal(null);
                              } else {
                                setManualTotal(value);
                              }

                              setIsEditingTotal(false);
                            }

                            if (e.key === "Escape") {
                              setManualTotalInput(manualTotal !== null ? String(manualTotal) : "");
                              setIsEditingTotal(false);
                            }
                          }}
                          onBlur={() => {
                            const value = Number(manualTotalInput || "0");
                            const subtotal = getCartSubtotal();

                            if (value === subtotal) {
                              setManualTotal(null);
                            } else {
                              setManualTotal(value);
                            }

                            setIsEditingTotal(false);
                          }}
                          className="w-full bg-transparent border-none shadow-none py-0 pl-10 text-[46px] leading-[0.95] font-black tabular-nums outline-none focus:ring-0"
                        />
                      </div>
                    ) : (
                      <span
                        className={`block text-[40px] leading-[0.95] font-black ${
                          manualTotal !== null ? "text-amber-600" : "text-indigo-600"
                        }`}
                      >
                        Rp {totalTagihan.toLocaleString("id-ID")}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Metode Pembayaran</label>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setPaymentMethod("Tunai")}
                    className={`py-3 rounded-xl font-bold transition-all ${
                      paymentMethod === "Tunai" ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    💵 Tunai
                  </button>

                  <button
                    onClick={() => setPaymentMethod("QRIS")}
                    className={`py-3 rounded-xl font-bold transition-all ${
                      paymentMethod === "QRIS" ? "bg-green-600 text-white" : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    📱 QRIS
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">
                  {paymentMethod === "QRIS" ? "Nominal QRIS" : "Uang Pelanggan (Tunai)"}
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">Rp</span>
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
                    const totalBelanja = totalTagihan;

                    setPaidAmount(totalBelanja);
                  }}
                  className="py-3 bg-green-600 text-white hover:bg-green-700 rounded-xl font-bold text-sm transition-all"
                >
                  UANG PAS
                </button>

                <button
                  onClick={() => {
                    const totalBelanja = totalTagihan;

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
                    Rp {Math.max(0, paidAmount - totalTagihan).toLocaleString("id-ID")}
                  </span>
                </div>
              )}

              <button
                onClick={handleCheckout}
                disabled={isProcessing || paidAmount < totalTagihan}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-100"
              >
                <span>{isProcessing ? "MEMPROSES..." : "PROSES TRANSAKSI"}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Receipt Modal */}
      {isReceiptModalOpen && lastTransaction && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/30" onClick={() => setIsReceiptModalOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-[390px] bg-white shadow-2xl flex flex-col">
            <div className="border-b px-6 py-5">
              <h2 className="text-xl font-black text-indigo-600">Pembayaran Berhasil</h2>

              <p className="text-sm text-slate-500 mt-1">Silakan periksa struk sebelum mencetak.</p>
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
        <div className="fixed inset-0 z-[9999] bg-black/30 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-xl w-full max-w-[560px] overflow-hidden">
            {/* HEADER */}
            <div className="px-5 py-4 border-b border-slate-200 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-black text-indigo-600">Detail Transaksi</h2>

                <p className="text-sm text-slate-500 mt-1">{formatInvoiceNumber(selectedTransaction.id)}</p>
              </div>

              <button
                onClick={() => setIsTransactionDetailOpen(false)}
                className="text-slate-400 hover:text-red-500 text-xl"
              >
                ✕
              </button>
            </div>

            {/* BODY */}
            <div className="p-5 space-y-4">
              {/* INFO TRANSAKSI */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-slate-400">Waktu</p>

                  <p className="font-bold">{formatTransactionDate(selectedTransaction.date)}</p>
                </div>

                <div>
                  <p className="text-slate-400">Kasir</p>

                  <p className="font-bold">{selectedTransaction.createdBy?.actorName || "OWNER"}</p>
                </div>

                <div>
                  <p className="text-slate-400">Pembayaran</p>

                  <p className="font-bold">{selectedTransaction.paymentMethod || "Tunai"}</p>
                </div>

                <div>
                  <p className="text-slate-400">Jumlah Item</p>

                  <p className="font-bold">{selectedTransaction.items?.length || 0} item</p>
                </div>
              </div>

              {/* LIST ITEM */}
              <div>
                <p className="font-black text-slate-800 mb-3">Daftar Barang</p>

                <div className="space-y-3 max-h-[220px] overflow-y-auto pr-2">
                  {selectedTransaction.items?.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="flex justify-between gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200"
                    >
                      <div className="min-w-0">
                        <p className="font-bold text-slate-900 break-words leading-snug">{item.name}</p>

                        <p className="text-sm text-slate-500">
                          {item.quantity} x Rp {(item.finalPrice ?? item.price)?.toLocaleString("id-ID")}
                        </p>
                      </div>

                      <p className="font-black text-indigo-600 whitespace-nowrap ml-4">
                        Rp {(item.total ?? (item.finalPrice ?? item.price) * item.quantity).toLocaleString("id-ID")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SUMMARY */}
              <div className="border-t border-slate-200 pt-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-500">Dibayar</span>

                  <span className="font-bold">Rp {selectedTransaction.paidAmount?.toLocaleString("id-ID")}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">Kembalian</span>

                  <span className="font-bold">Rp {selectedTransaction.changeAmount?.toLocaleString("id-ID")}</span>
                </div>

                <div className="flex justify-between text-lg">
                  <span className="font-black">Total</span>

                  <span className="font-black text-indigo-600">
                    Rp {(selectedTransaction.netTotal ?? selectedTransaction.total)?.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="px-6 py-4 border-t border-slate-200 flex gap-3">
              {canAccess("return") && (
                <button
                  onClick={() => {
                    openReturnModal(selectedTransaction);
                  }}
                  className="flex-1 py-3 rounded-xl bg-orange-50 text-orange-600 font-bold hover:bg-orange-100"
                >
                  ↩ Retur
                </button>
              )}

              <button
                onClick={() => setIsTransactionDetailOpen(false)}
                className="flex-1 py-3 rounded-xl bg-slate-100 font-bold hover:bg-slate-200"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {isReturnModalOpen && selectedTransaction && (
        <div className="fixed inset-0 z-[10000] bg-black/30 flex items-center justify-center p-4">
          <div
            className="
      bg-white
      w-full
      max-w-[520px]
      rounded-3xl
      shadow-xl
      overflow-hidden
    "
          >
            {/* HEADER */}
            <div
              className="
        px-5
        py-4
        border-b
        border-slate-200
        flex
        justify-between
        items-center
      "
            >
              <div>
                <h2 className="text-lg font-black text-orange-600">Retur Barang</h2>

                <p className="text-sm text-slate-500 mt-1">{formatInvoiceNumber(selectedTransaction.id)}</p>
              </div>

              <button
                onClick={() => setIsReturnModalOpen(false)}
                className="
            text-slate-400
            hover:text-red-500
            text-xl
          "
              >
                ✕
              </button>
            </div>

            {/* BODY */}
            <div className="p-5 space-y-4">
              {/* REASON */}

              <div>
                <label
                  className="
            text-sm
            font-bold
            text-slate-700
          "
                >
                  Alasan Retur
                </label>

                <input
                  value={returnReason}
                  onChange={(e) => setReturnReason(e.target.value)}
                  placeholder="Contoh: Barang rusak..."
                  className="
              mt-2
              w-full
              px-4
              py-3
              rounded-xl
              border
              border-slate-200
              outline-none
              focus:border-orange-400
            "
                />
              </div>

              {/* ITEM LIST */}

              <div>
                <div
                  className="
            flex
            justify-between
            items-center
            mb-3
          "
                >
                  <p
                    className="
              font-black
              text-slate-800
            "
                  >
                    Daftar Barang
                  </p>

                  <span
                    className="
              text-xs
              font-bold
              text-slate-500
            "
                  >
                    {returnItems.length} item
                  </span>
                </div>

                <div
                  className="
            space-y-3
            max-h-[260px]
            overflow-y-auto
            pr-2
          "
                >
                  {returnItems.map((item, index) => (
                    <div
                      key={index}
                      className="
                  p-3
                  rounded-2xl
                  bg-slate-50
                  border
                  border-slate-200
                "
                    >
                      <div
                        className="
                  flex
                  justify-between
                  gap-3
                "
                      >
                        <div className="min-w-0">
                          <p
                            className="
                      font-bold
                      text-slate-900
                      truncate
                      max-w-[260px]
                    "
                          >
                            {item.name}
                          </p>

                          <p
                            className="
                      text-xs
                      text-slate-500
                      mt-1
                    "
                          >
                            Dibeli {item.quantity} pcs
                          </p>
                        </div>

                        <p
                          className="
                    font-black
                    text-orange-600
                    whitespace-nowrap
                  "
                        >
                          Rp {(item.price * item.returnQty).toLocaleString("id-ID")}
                        </p>
                      </div>

                      <div
                        className="
                  flex
                  items-center
                  justify-between
                  mt-3
                "
                      >
                        <span
                          className="
                    text-sm
                    text-slate-500
                  "
                        >
                          Qty Retur
                        </span>

                        <input
                          type="number"
                          value={item.returnQty}
                          onChange={(e) => {
                            const qty = Math.min(Number(e.target.value), item.quantity);

                            setReturnItems((prev) =>
                              prev.map((x, i) =>
                                i === index
                                  ? {
                                      ...x,
                                      returnQty: qty,
                                    }
                                  : x
                              )
                            );
                          }}
                          className="
                      w-20
                      px-3
                      py-2
                      rounded-xl
                      border
                      text-center
                      font-bold
                    "
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* TOTAL */}

              <div
                className="
          border-t
          border-slate-200
          pt-4
          flex
          justify-between
          items-center
        "
              >
                <span className="font-bold text-slate-500">Total Refund</span>

                <span
                  className="
            text-xl
            font-black
            text-orange-600
          "
                >
                  Rp {returnTotalRefund.toLocaleString("id-ID")}
                </span>
              </div>
            </div>

            {/* FOOTER */}

            <div
              className="
        px-5
        py-4
        border-t
        border-slate-200
        flex
        gap-3
      "
            >
              <button
                onClick={() => {
                  setIsReturnModalOpen(false);
                  setReturnItems([]);
                  setReturnReason("");
                }}
                className="
            flex-1
            py-3
            rounded-xl
            bg-slate-100
            font-bold
            hover:bg-slate-200
          "
              >
                Batal
              </button>

              <button
                disabled={isReturning}
                onClick={handleConfirmReturn}
                className="
            flex-1
            py-3
            rounded-xl
            bg-orange-600
            text-white
            font-bold
            hover:bg-orange-700
            disabled:opacity-50
          "
              >
                {isReturning ? "Memproses..." : "Proses Retur"}
              </button>
            </div>
          </div>
        </div>
      )}

      <OperatorGate open={isOperatorGateOpen}>
        <OperatorCard
          storeName={storeName}
          logoUrl={storeLogo}
          staff={staffList}
          loading={staffLoading}
          showOwnerMode={showOwnerMode}
          onStartShift={async (selectedStaff, pin) => {
            const valid = await verifyStaffPin(user.uid, selectedStaff.id, pin);

            if (!valid) {
              showToast("PIN operator salah.");
              return;
            }

            setOperatorSession(user.uid, selectedStaff);
            setIsOperatorGateOpen(false);
          }}
          onOwnerLogin={async () => {
            const exists = await hasOwnerPin(user.uid);

            if (exists) {
              setOwnerPinMode("VERIFY");
            } else {
              setOwnerPinMode("SETUP");
            }

            setIsOwnerPinOpen(true);
          }}
        />
      </OperatorGate>

      <OwnerPinModal
        open={isOwnerPinOpen}
        mode={ownerPinMode}
        onClose={() => setIsOwnerPinOpen(false)}
        onSubmit={async (pin) => {
          if (ownerPinMode === "SETUP") {
            await setOwnerPin(user.uid, pin);

            setOwnerSession(user.uid);
          } else {
            const valid = await verifyOwnerPin(user.uid, pin);

            if (!valid) {
              showToast("PIN Owner salah");
              return;
            }

            setOwnerSession(user.uid);
          }

          setIsOwnerPinOpen(false);
          setIsOperatorGateOpen(false);
        }}
      />

      {isEndShiftConfirmOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-slate-900/10 backdrop-blur-[1px]">
          <div className="w-full max-w-sm rounded-[28px] border border-slate-100 bg-white p-7 shadow-2xl">
            <h2 className="text-xl font-black text-slate-900">Akhiri Shift?</h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">Anda akan mengakhiri sesi operator saat ini.</p>

            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => setIsEndShiftConfirmOpen(false)}
                className="h-12 flex-1 rounded-xl border border-slate-200 font-bold text-slate-600 hover:bg-slate-50"
              >
                Batal
              </button>

              <button
                type="button"
                onClick={handleEndShift}
                className="h-12 flex-1 rounded-xl bg-violet-600 font-bold text-white hover:bg-violet-700"
              >
                Akhiri Shift
              </button>
            </div>
          </div>
        </div>
      )}

      <DeleteConfirmationModal />
    </div>
  );
}
