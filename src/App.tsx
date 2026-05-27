import React, { useState, useEffect } from 'react';
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
  PieChart as ChartIcon,
  Settings,
  LogIn
} from 'lucide-react';
import { db, auth, googleProvider } from './lib/firebase';

import {
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';

import {
  collection,
  onSnapshot,
  setDoc,
  getDoc,
  doc,
  deleteDoc,
  query,
  orderBy
} from 'firebase/firestore';

const handleFirestoreError = (error: any) => {
  console.error(error);
};

const OperationType = {
  LIST: 'LIST',
  DELETE: 'DELETE'
};

interface Product {
  id: string;
  barcode: string;
  name: string;
  supplier: string;
  price: number;
  modal: number;
  stock: number;
  category: string;
}

interface CartItem extends Product {
  quantity: number;
}

const DEFAULT_PRODUCTS: Product[] = [
  { id: '1', barcode: '899123456701', name: 'Le Minerale 600ml', supplier: 'PT Tirta Investama', price: 3500, modal: 2200, stock: 50, category: 'Minuman' },
  { id: '2', barcode: '899123456702', name: 'Indomie Goreng Spesial', supplier: 'PT Indofood', price: 3100, modal: 2500, stock: 100, category: 'Makanan' },
  { id: '3', barcode: '899123456703', name: 'Sari Roti Tawar', supplier: 'PT Nippon Indosari', price: 15000, modal: 12500, stock: 12, category: 'Makanan' },
];

export default function App() {
  const [user, setUser] = useState<any>(null);

  const [storeName, setStoreName] = useState('');
  const [role, setRole] = useState('owner');
  const [loadingStore, setLoadingStore] = useState(true);

  const [setupStoreName, setSetupStoreName] = useState('');

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const [view, setView] = useState<'pos' | 'stock' | 'history' | 'reports'>('pos');
  
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [transactions, setTransactions] = useState<any[]>([]);

  // Firebase Sync
useEffect(() => {
  const unsubAuth = onAuthStateChanged(auth, async (u) => {
    setUser(u);

    if (u) {
      setIsLoggedIn(true);

     console.log('USER LOGIN:', u.uid);

const userRef = doc(db, 'users', u.uid);

const userSnap = await getDoc(userRef);

if (!userSnap.exists()) {

  console.log('MEMBUAT USER BARU');

  await setDoc(
    userRef,
    {
      email: u.email || '',
      displayName: u.displayName || '',
      storeName: '',
      role: 'owner'
    },
    {
      merge: true
    }
  );
}

const latestSnap = await getDoc(userRef);

if (latestSnap.exists()) {
  const data = latestSnap.data();

  setStoreName(data.storeName || '');
  setRole(data.role || 'owner');
}

setLoadingStore(false);

console.log('USER DOC BERHASIL DIBACA');

    } else {
      setIsLoggedIn(false);

      setProducts([]);
      setTransactions([]);

      setStoreName('');
      setRole('owner');

      setLoadingStore(false);
    }
  });

  return () => unsubAuth();
}, []);

useEffect(() => {
  if (!user) return;

  const unsubProducts = onSnapshot(
    collection(db, 'users', user.uid, 'products'),
    (snapshot) => {
      const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Product));

      setProducts(items);
    },
    (error) => handleFirestoreError(error)
  );

  const unsubTransactions = onSnapshot(
  query(
    collection(db, 'users', user.uid, 'transactions'),
    orderBy('date', 'desc')
  ),
  (snapshot) => {
    const items = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    setTransactions(items);
  },
  (error) => handleFirestoreError(error)
);

  return () => {
    unsubProducts();
    unsubTransactions();
  };
}, [user]);
  
  // Checkout & Receipt States
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [isReceiptModalOpen, setIsReceiptModalOpen] = useState(false);
  const [paidAmount, setPaidAmount] = useState<number>(0);
  const [lastTransaction, setLastTransaction] = useState<any>(null);

  // States for Stock Management
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [newProduct, setNewProduct] = useState<Product>({
    id: '', barcode: '', name: '', supplier: '', price: 0, modal: 0, stock: 0, category: 'Umum'
  });

  const [posSearch, setPosSearch] = useState('');

  // Auto-focus barcode input simulation
  useEffect(() => {
    if (view === 'pos' && posSearch.length >= 8) {
      const found = products.find(p => p.barcode === posSearch);
      if (found) {
        addToCart(found);
        setPosSearch('');
      }
    }
  }, [posSearch, view, products]);

  const [isLoggingIn, setIsLoggingIn] = useState(false);

const handleGoogleLogin = async () => {
  if (isLoggingIn) return;

  try {
    setIsLoggingIn(true);

    await signInWithPopup(auth, googleProvider);

  } catch (error: any) {
    console.error(error);

    if (
      error.code === 'auth/popup-closed-by-user' ||
      error.code === 'auth/cancelled-popup-request'
    ) {
      return;
    }

    alert('Gagal login Google');

  } finally {
    setIsLoggingIn(false);
  }
};

const handleLogout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
};

const handleSaveStore = async () => {
  if (!user) return;

  try {
    await setDoc(
      doc(db, 'users', user.uid),
      {
        storeName: setupStoreName
      },
      {
        merge: true
      }
    );

    setStoreName(setupStoreName);

  } catch (error) {
    console.error(error);
  }
};

const handleLogin = (e: React.FormEvent) => {
  e.preventDefault();

  if (
    loginData.username === 'admin' &&
    loginData.password === 'admin123'
  ) {
    setIsLoggedIn(true);
  } else {
    alert('Username: admin, Password: admin123');
  }
};

  const addToCart = (product: Product) => {
    if (product.stock <= 0) {
      alert('Stok habis!');
      return;
    }
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateCartQty = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const product = products.find(p => p.id === id);
        const newQty = Math.max(1, item.quantity + delta);
        if (product && newQty > product.stock) {
          alert('Maksimal stok tercapai');
          return item;
        }
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    if (paidAmount < subtotal) {
      alert('Uang pelanggan kurang!');
      return;
    }

    setIsProcessing(true);
    const transactionId = Date.now().toString();
    const newTransaction = {
      id: transactionId,
      items: cart.map(it => ({ id: it.id, name: it.name, price: it.price, quantity: it.quantity })),
      total: subtotal,
      paidAmount: paidAmount,
      changeAmount: paidAmount - subtotal,
      date: Date.now()
    };

    try {
      // Save Transaction to Firestore
      await setDoc(doc(db, 'users', user.uid, 'transactions', transactionId), newTransaction);

      // Update Stocks in Firestore
      await Promise.all(cart.map(async (item) => {
        const product = products.find(p => p.id === item.id);
        if (product) {
          await setDoc(doc(db, 'users', user.uid, 'products', product.id), {
            ...product,
            stock: product.stock - item.quantity
          });
        }
      }));

      setLastTransaction(newTransaction);
      setCart([]);
      setIsCheckoutModalOpen(false);
      setIsReceiptModalOpen(true);
      setPaidAmount(0);
    } catch (error: any) {
      console.error(error);
      alert('Gagal memproses transaksi ke Cloud! Pastikan Anda sudah "Login dengan Google" dan terhubung internet.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSaveProduct = async () => {
    if (!newProduct.name) {
      alert('Nama barang harus diisi!');
      return;
    }
    if (!newProduct.barcode) {
      alert('Barcode harus diisi! Jika tidak ada barcode, silakan buat kode unik.');
      return;
    }
    
    try {
      const id = editingProduct ? editingProduct.id : Date.now().toString();
      const productToSave = { ...newProduct, id };
      await setDoc(doc(db, 'users', user.uid, 'products', id), productToSave);
      
      setIsAddingProduct(false);
      setEditingProduct(null);
      setNewProduct({ 
        id: '', 
        barcode: '', 
        name: '', 
        supplier: '', 
        price: 0, 
        modal: 0, 
        stock: 0, 
        category: 'Umum' 
      });
      alert('Barang berhasil disimpan!');
    } catch (error: any) {
      console.error(error);
      alert('Gagal menyimpan ke Cloud! Pastikan Anda sudah "Login dengan Google" untuk hak akses database.');
    }
  };

  const handleDeleteProduct = async (id: string) => {
    if (confirm('Hapus produk ini?')) {
      try {
        await deleteDoc(doc(db, 'users', user.uid, 'products', id));
      } catch (error) {
        handleFirestoreError(error, OperationType.DELETE, 'products');
      }
    }
  };

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
              onClick={handleGoogleLogin}
              className="w-full py-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-2xl font-bold transition-all flex items-center justify-center space-x-2 shadow-sm"
            >
              <LogIn size={20} className="text-indigo-600" />
              <span>Masuk dengan Google</span>
            </button>
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
              <div className="relative flex justify-center text-[10px] uppercase font-bold text-slate-400 bg-white inline-block mx-auto px-4">Atau Gunakan Akun Demo</div>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Username</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="admin"
                value={loginData.username}
                onChange={e => setLoginData({...loginData, username: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="••••••••"
                value={loginData.password}
                onChange={e => setLoginData({...loginData, password: e.target.value})}
              />
            </div>
            <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold transition-all">
              Login Ke Sistem
            </button>
          </form>
          <p className="text-center text-xs text-slate-400 font-medium">Demo: admin / admin123</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-slate-50 text-slate-800 overflow-hidden font-sans text-sm">
      {/* Sidebar Navigation */}
      <aside className="w-20 bg-white border-r border-slate-200 flex flex-col items-center py-8 space-y-8 flex-shrink-0">
        <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
          <ShoppingCart size={24} />
        </div>
        <div className="flex flex-col items-center">
          <div className={`w-2 h-2 rounded-full ${user ? 'bg-green-500 animate-pulse' : 'bg-slate-300'}`}></div>
          <span className="text-[8px] font-bold text-slate-400 mt-1 uppercase leading-none">{user ? 'Cloud' : 'Offline'}</span>
        </div>
        <nav className="flex flex-col space-y-6 flex-1">
          <button 
            onClick={() => setView('pos')}
            className={`p-3 rounded-xl transition-all ${view === 'pos' ? 'text-indigo-600 bg-indigo-50' : 'text-slate-400 hover:text-indigo-600 hover:bg-slate-50'}`}
            title="Kasir"
          >
            <LayoutDashboard size={24} />
          </button>
          <button 
            onClick={() => setView('stock')}
            className={`p-3 rounded-xl transition-all ${view === 'stock' ? 'text-indigo-600 bg-indigo-50' : 'text-slate-400 hover:text-indigo-600 hover:bg-slate-50'}`}
            title="Stok Barang"
          >
            <Package size={24} />
          </button>
          <button 
            onClick={() => setView('history')}
            className={`p-3 rounded-xl transition-all ${view === 'history' ? 'text-indigo-600 bg-indigo-50' : 'text-slate-400 hover:text-indigo-600 hover:bg-slate-50'}`}
            title="Riwayat"
          >
            <History size={24} />
          </button>
          <button 
            onClick={() => setView('reports')}
            className={`p-3 rounded-xl transition-all ${view === 'reports' ? 'text-indigo-600 bg-indigo-50' : 'text-slate-400 hover:text-indigo-600 hover:bg-slate-50'}`}
            title="Laporan"
          >
            <ChartIcon size={24} />
          </button>
          
          <button
          onClick={() => setView('settings')}
          className={`p-3 rounded-xl transition-all ${
            view === 'settings'
              ? 'text-indigo-600 bg-indigo-50'
              : 'text-slate-400 hover:text-indigo-600 hover:bg-slate-50'
          }`}
          title="Pengaturan"
          >
            <Settings size={24} />
          </button>

        </nav>
        <button 
          onClick={handleLogout}
          className="p-3 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
        >
          <LogOut size={24} />
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden flex flex-col">
        
        {/* VIEW: POS / KASIR */}
        {view === 'pos' && (
          <div className="flex flex-1 overflow-hidden">
            <div className="flex-1 p-8 overflow-y-auto">
              <header className="flex justify-between items-center mb-8">
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">IndoTech POS</h1>
                  <p className="text-slate-500 text-sm">Scan barcode atau ketik nama barang.</p>
                </div>
                <div className="relative w-80">
                  <Barcode className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    autoFocus
                    type="text" 
                    placeholder="Scan Barcode / Cari Barang..." 
                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                    value={posSearch}
                    onChange={e => setPosSearch(e.target.value)}
                  />
                </div>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.filter(p => 
                  p.name.toLowerCase().includes(posSearch.toLowerCase()) || 
                  p.barcode.includes(posSearch)
                ).map(product => (
                  <div 
                    key={product.id}
                    onClick={() => addToCart(product)}
                    className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-indigo-500 hover:shadow-xl transition-all cursor-pointer active:scale-95 group"
                  >
                    <div className="flex justify-between items-start mb-2">
                       <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded-md font-bold text-slate-400">{product.barcode}</span>
                       <span className={`text-[10px] px-2 py-0.5 rounded-md font-bold ${product.stock < 10 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>Stock: {product.stock}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors uppercase">{product.name}</h3>
                    <p className="text-lg font-black text-slate-900 mt-2">Rp {product.price.toLocaleString('id-ID')}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Cart Summary */}
            <aside className="w-96 bg-white border-l border-slate-200 flex flex-col flex-shrink-0 animate-in slide-in-from-right duration-300">
              <div className="p-6 border-b border-slate-100">
                <h2 className="text-xl font-bold flex items-center">Keranjang <span className="ml-2 bg-indigo-100 text-indigo-600 text-xs px-2 py-1 rounded-full">{cart.length}</span></h2>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center opacity-30 text-center">
                    <ShoppingCart size={48} className="mb-2" />
                    <p className="text-sm">Siap melayani pembeli</p>
                  </div>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="flex items-center space-x-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm truncate uppercase">{item.name}</h4>
                        <p className="text-xs text-slate-400">Rp {item.price.toLocaleString('id-ID')}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                         <button onClick={() => updateCartQty(item.id, -1)} className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600"><Minus size={12}/></button>
                         <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                         <button onClick={() => updateCartQty(item.id, 1)} className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600"><Plus size={12}/></button>
                      </div>
                      <button onClick={() => setCart(c => c.filter(x => x.id !== item.id))} className="text-slate-300 hover:text-red-500"><Trash2 size={16}/></button>
                    </div>
                  ))
                )}
              </div>
              <div className="p-6 bg-slate-900 text-white rounded-t-3xl">
                 <div className="flex justify-between text-sm text-slate-400 mb-4 font-bold">
                    <span>TOTAL HARGA</span>
                    <span className="text-white text-2xl font-black">Rp {cart.reduce((a,b)=>a+(b.price*b.quantity),0).toLocaleString('id-ID')}</span>
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
        {view === 'stock' && (
          <div className="p-8 overflow-y-auto flex-1 animate-in fade-in duration-300">
            <header className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-2xl font-bold text-slate-900 text-indigo-600">Gudang & Stok Barang</h1>
                <p className="text-slate-500 text-sm">Kelola katalog produk minimarket Anda.</p>
              </div>
              <button 
                onClick={() => {
                  setEditingProduct(null);
                  setNewProduct({ id: '', barcode: '', name: '', supplier: '', price: 0, modal: 0, stock: 0, category: 'Umum' });
                  setIsAddingProduct(true);
                }}
                className="flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all"
              >
                <Plus size={20} />
                <span>Tambah Barang Baru</span>
              </button>
            </header>

            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">Barcode</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">Nama Barang</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">Supplier</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">Kategori</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase text-right">Modal</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase text-right">Harga Jual</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase text-center">Stok</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {products.map(p => (
                    <tr key={p.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 font-mono text-xs text-slate-500">{p.barcode}</td>
                      <td className="px-6 py-4 font-bold text-slate-900 uppercase">{p.name}</td>
                      <td className="px-6 py-4 text-xs text-slate-500 uppercase">{p.supplier || '-'}</td>
                      <td className="px-6 py-4"><span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full">{p.category}</span></td>
                      <td className="px-6 py-4 text-right font-bold text-slate-400">Rp {p.modal?.toLocaleString('id-ID')}</td>
                      <td className="px-6 py-4 text-right font-black text-indigo-600">Rp {p.price.toLocaleString('id-ID')}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${p.stock < 10 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                          {p.stock} pcs
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                         <div className="flex justify-center space-x-2">
                           <button 
                            onClick={() => {
                              setEditingProduct(p);
                              setNewProduct(p);
                              setIsAddingProduct(true);
                            }}
                            className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"><Edit2 size={18}/></button>
                           <button 
                            onClick={() => handleDeleteProduct(p.id)}
                            className="p-2 text-slate-400 hover:text-red-500 transition-colors"><Trash2 size={18}/></button>
                         </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Modal Tambah/Edit Produk */}
            {isAddingProduct && (
              <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                <div className="bg-white w-full max-w-lg rounded-3xl p-8 animate-in zoom-in-95 duration-200">
                  <header className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold flex items-center">
                      {editingProduct ? <Edit2 size={20} className="mr-2"/> : <Plus size={20} className="mr-2"/>}
                      {editingProduct ? 'Edit Barang' : 'Input Barang Baru'}
                    </h2>
                    <button onClick={() => setIsAddingProduct(false)} className="text-slate-400 hover:text-red-500"><X size={24}/></button>
                  </header>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Kode Barcode</label>
                      <div className="flex space-x-2">
                        <input 
                          type="text" 
                          className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="Scan atau Ketik..."
                          value={newProduct.barcode}
                          onChange={e => setNewProduct({...newProduct, barcode: e.target.value})}
                        />
                        <button 
                          type="button"
                          onClick={() => setNewProduct({...newProduct, barcode: 'IT' + Date.now().toString().slice(-10)})}
                          className="px-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all text-xs font-bold shadow-sm"
                        >
                          Generate
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Kategori</label>
                        <select 
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                          value={newProduct.category}
                          onChange={e => setNewProduct({...newProduct, category: e.target.value})}
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
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Nama Barang</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="Contoh: Aqua 600ml"
                          value={newProduct.name}
                          onChange={e => setNewProduct({...newProduct, name: e.target.value})}
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
                        onChange={e => setNewProduct({...newProduct, supplier: e.target.value})}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Harga Modal (Rp)</label>
                        <input 
                          type="number" 
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 text-slate-500"
                          value={newProduct.modal}
                          onChange={e => setNewProduct({...newProduct, modal: parseInt(e.target.value) || 0})}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Harga Jual (Rp)</label>
                        <input 
                          type="number" 
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 font-bold"
                          value={newProduct.price}
                          onChange={e => setNewProduct({...newProduct, price: parseInt(e.target.value) || 0})}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Jumlah Stok</label>
                      <input 
                        type="number" 
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                        value={newProduct.stock}
                        onChange={e => setNewProduct({...newProduct, stock: parseInt(e.target.value) || 0})}
                      />
                    </div>
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
          </div>
        )}

        {/* VIEW: HISTORY TRANSAKSI */}
        {view === 'history' && (
          <div className="p-8 overflow-y-auto flex-1 animate-in slide-in-from-bottom duration-500">
             <header className="mb-8">
               <h1 className="text-2xl font-bold text-slate-900">Riwayat Penjualan</h1>
               <p className="text-slate-500 text-sm">Semua transaksi yang sudah selesai.</p>
             </header>

             <div className="space-y-4">
               {transactions.map(t => (
                 <div key={t.id} className="bg-white p-6 rounded-3xl border border-slate-200 flex justify-between items-center group hover:border-indigo-500 transition-all shadow-sm">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-xs font-bold text-slate-400">{t.date}</span>
                        <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-bold">ID: {t.id.slice(-6)}</span>
                      </div>
                      <p className="text-sm font-bold text-slate-900 uppercase">
                        {t.items.map((it:any) => `${it.name} (x${it.quantity})`).join(', ')}
                      </p>
                      <div className="flex space-x-4 mt-2 text-[10px] font-bold uppercase text-slate-400">
                         <span>Tunai: Rp {t.paidAmount?.toLocaleString('id-ID')}</span>
                         <span>Kembali: Rp {t.changeAmount?.toLocaleString('id-ID')}</span>
                      </div>
                    </div>
                    <div className="text-right">
                       <p className="text-xl font-black text-indigo-600">Rp {t.total.toLocaleString('id-ID')}</p>
                       <span className="text-[10px] bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-bold">LUNAS</span>
                       <button 
                        onClick={() => { setLastTransaction(t); setIsReceiptModalOpen(true); }}
                        className="ml-4 p-2 text-slate-400 hover:text-indigo-600 transition-all opacity-0 group-hover:opacity-100"
                        title="Cetak Ulang Struk"
                       >
                         <Printer size={16}/>
                       </button>
                    </div>
                 </div>
               ))}
               {transactions.length === 0 && (
                 <div className="py-20 text-center text-slate-400">Belum ada transaksi hari ini.</div>
               )}
             </div>
          </div>
        )}

        {/* VIEW: REPORTS */}
        {view === 'reports' && (
          <div className="p-8 overflow-y-auto flex-1 animate-in fade-in duration-300">
            <header className="mb-8">
              <h1 className="text-2xl font-bold text-slate-900">Laporan Keuangan</h1>
              <p className="text-slate-500 text-sm">Analisis penjualan dan performa toko.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase mb-2">Total Pendapatan</p>
                <p className="text-2xl font-black text-indigo-600">Rp {transactions.reduce((acc, t) => acc + t.total, 0).toLocaleString('id-ID')}</p>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase mb-2">Total Keuntungan</p>
                <p className="text-2xl font-black text-green-600">
                  Rp {transactions.reduce((acc, t) => {
                    const profit = t.items.reduce((sum: number, it: any) => {
                      const product = products.find(p => p.id === it.id);
                      const modal = product?.modal || 0;
                      return sum + ((it.price - modal) * it.quantity);
                    }, 0);
                    return acc + profit;
                  }, 0).toLocaleString('id-ID')}
                </p>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase mb-2">Total Transaksi</p>
                <p className="text-2xl font-black text-slate-900">{transactions.length}</p>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase mb-2">Item Terjual</p>
                <p className="text-2xl font-black text-slate-900">
                  {transactions.reduce((acc, t) => acc + t.items.reduce((sum: number, it: any) => sum + it.quantity, 0), 0)}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-6">Barang Paling Laris</h3>
              <div className="space-y-4">
                 {(() => {
                   const itemCounts: { [key: string]: { name: string, count: number } } = {};
                   transactions.forEach(t => {
                     t.items.forEach((it: any) => {
                       if (itemCounts[it.id]) {
                         itemCounts[it.id].count += it.quantity;
                       } else {
                         itemCounts[it.id] = { name: it.name, count: it.quantity };
                       }
                     });
                   });
                   const sorted = Object.values(itemCounts).sort((a, b) => b.count - a.count).slice(0, 5);
                   
                   return sorted.length > 0 ? sorted.map((item, i) => (
                     <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                        <div className="flex items-center space-x-3">
                          <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center font-bold text-xs">{i + 1}</span>
                          <span className="font-bold text-slate-900 uppercase">{item.name}</span>
                        </div>
                        <span className="font-bold text-slate-500">{item.count} terjual</span>
                     </div>
                   )) : <p className="text-slate-400 italic">Belum ada data penjualan.</p>;
                 })()}
              </div>
            </div>
          </div>
        )}

        {view === 'settings' && (
  <div className="p-8 overflow-y-auto flex-1 animate-in fade-in duration-300">
    
    <header className="mb-8">
      <h1 className="text-2xl font-bold text-indigo-600">
        Pengaturan Toko
      </h1>
      <p className="text-slate-500 text-sm">
        Kelola profil dan identitas toko Anda.
      </p>
    </header>

    <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm max-w-3xl">
      
      <div className="mb-6">
        <label className="block text-sm font-bold text-slate-600 mb-2">
          Nama Toko
        </label>

        <input
          type="text"
          value={storeName}
          onChange={(e) => setStoreName(e.target.value)}
          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-bold text-slate-600 mb-2">
          Email Akun
        </label>

        <input
          type="text"
          value={user?.email || ''}
          disabled
          className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl"
        />
      </div>

      <div className="mb-8">
        <label className="block text-sm font-bold text-slate-600 mb-2">
          Role
        </label>

        <input
          type="text"
          value={role}
          disabled
          className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl"
        />
      </div>

      <button
        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all"
      >
        Simpan Perubahan
      </button>

    </div>
  </div>
)}

      </main>

      {/* Checkout Modal */}
      {isCheckoutModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white w-full max-w-md rounded-3xl p-8 animate-in zoom-in-95 duration-200">
            <header className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold flex items-center">Konfirmasi Pembayaran</h2>
              <button onClick={() => setIsCheckoutModalOpen(false)} className="text-slate-400 hover:text-red-500"><X size={24}/></button>
            </header>
            
            <div className="space-y-6">
              <div className="p-4 bg-slate-50 rounded-2xl">
                <p className="text-xs font-bold text-slate-400 uppercase mb-1">Total Tagihan</p>
                <p className="text-3xl font-black text-indigo-600">Rp {cart.reduce((a,b)=>a+(b.price*b.quantity),0).toLocaleString('id-ID')}</p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Uang Pelanggan (Tunai)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">Rp</span>
                  <input 
                    autoFocus
                    type="number" 
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-xl font-bold outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="0"
                    value={paidAmount || ''}
                    onChange={e => setPaidAmount(parseInt(e.target.value) || 0)}
                  />
                </div>
              </div>

              {paidAmount > 0 && (
                <div className="flex justify-between items-center p-4 rounded-2xl bg-green-50 border border-green-100">
                  <span className="font-bold text-green-700">Kembalian:</span>
                  <span className="text-xl font-black text-green-700">Rp {Math.max(0, paidAmount - cart.reduce((a,b)=>a+(b.price*b.quantity),0)).toLocaleString('id-ID')}</span>
                </div>
              )}

              <button 
                onClick={handleCheckout}
                disabled={isProcessing || paidAmount < cart.reduce((a,b)=>a+(b.price*b.quantity),0)}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-100"
              >
                <span>{isProcessing ? 'MEMPROSES...' : 'PROSES TRANSAKSI'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Receipt Modal */}
      {isReceiptModalOpen && lastTransaction && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white w-full max-w-sm rounded-lg p-8 animate-in zoom-in-95 duration-200 relative overflow-hidden">
            {/* Simulated Paper Texture */}
            <div className="absolute top-0 left-0 w-full h-1 bg-indigo-600"></div>
            
            <div className="text-center mb-6">
              <h2 className="text-2xl font-black text-indigo-600">IndoTech</h2>
              <p className="text-xs text-slate-400">Jl. Teknologi No. 45, Jakarta</p>
              <p className="text-[10px] text-slate-300">021-555-1234</p>
            </div>

            <div className="border-t border-dashed border-slate-200 py-4 space-y-2">
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>{lastTransaction.date}</span>
                <span>ID: {lastTransaction.id.slice(-6)}</span>
              </div>
            </div>

            <div className="border-t border-dashed border-slate-200 py-4 space-y-3">
              {lastTransaction.items.map((item: any) => (
                <div key={item.id} className="text-xs">
                  <div className="flex justify-between font-bold">
                    <span className="uppercase">{item.name}</span>
                    <span>{(item.price * item.quantity).toLocaleString('id-ID')}</span>
                  </div>
                  <div className="text-slate-400">{item.quantity} x {item.price.toLocaleString('id-ID')}</div>
                </div>
              ))}
            </div>

            <div className="border-t border-dashed border-slate-200 py-4 space-y-1">
              <div className="flex justify-between text-sm font-black">
                <span>TOTAL</span>
                <span>Rp {lastTransaction.total.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-500">
                <span>Tunai</span>
                <span>{lastTransaction.paidAmount.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-500">
                <span>Kembali</span>
                <span>{lastTransaction.changeAmount.toLocaleString('id-ID')}</span>
              </div>
            </div>

            <div className="text-center mt-6 pt-4 border-t border-dashed border-slate-200">
              <p className="text-[10px] font-bold text-slate-400 uppercase">Terima Kasih Atas Kunjungan Anda</p>
            </div>

            <div className="flex space-x-2 mt-8">
               <button 
                onClick={() => setIsReceiptModalOpen(false)}
                className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl font-bold transition-all"
               >
                 Tutup
               </button>
               <button 
                onClick={() => window.print()}
                className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold flex items-center justify-center space-x-2 transition-all shadow-lg shadow-indigo-100"
               >
                 <Printer size={16} />
                 <span>Cetak</span>
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


