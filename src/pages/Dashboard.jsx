import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { getSession, clearSession } from '../utils/auth';
import { loadState, saveState } from '../utils/dashboardStore';

const PLATFORMS = [
  { id: 'tiktok', name: 'TikTok', icon: '🎵', color: '#FF00C8' },
  { id: 'instagram', name: 'Instagram', icon: '📸', color: '#E1306C' },
  { id: 'youtube', name: 'YouTube', icon: '▶️', color: '#FF0000' },
];

const SERVICES = {
  tiktok: [
    { id: 'followers', name: 'Followers', price: 0.0056, icon: '👥' },
    { id: 'likes', name: 'Likes', price: 0.00008, icon: '❤️' },
    { id: 'views', name: 'Views', price: 0.00002, icon: '👁️' },
    { id: 'comments', name: 'Comments', price: 0.0012, icon: '💬' },
    { id: 'shares', name: 'Shares', price: 0.0025, icon: '🔄' },
    { id: 'saves', name: 'Saves', price: 0.0018, icon: '🔖' },
  ],
  instagram: [
    { id: 'followers', name: 'Followers', price: 0.0032, icon: '👥' },
    { id: 'likes', name: 'Likes', price: 0.00015, icon: '❤️' },
    { id: 'views', name: 'Views', price: 0.00005, icon: '👁️' },
    { id: 'comments', name: 'Comments', price: 0.0021, icon: '💬' },
    { id: 'saves', name: 'Saves', price: 0.0018, icon: '🔖' },
    { id: 'storyviews', name: 'Story Views', price: 0.000035, icon: '📱' },
  ],
  youtube: [
    { id: 'subscribers', name: 'Subscribers', price: 0.0139, icon: '🔔' },
    { id: 'views', name: 'Views', price: 0.00003, icon: '👁️' },
    { id: 'likes', name: 'Likes', price: 0.00025, icon: '👍' },
    { id: 'comments', name: 'Comments', price: 0.0035, icon: '💬' },
    { id: 'shares', name: 'Shares', price: 0.0042, icon: '🔄' },
  ],
};

const SIDEBAR = [
  { id: 'overview', icon: '📊', label: 'Overview' },
  { id: 'neworder', icon: '➕', label: 'New Order' },
  { id: 'orders', icon: '📦', label: 'Order History' },
  { id: 'analytics', icon: '📈', label: 'Analytics' },
  { id: 'wallet', icon: '💳', label: 'Wallet' },
  { id: 'settings', icon: '⚙️', label: 'Settings' },
];

const formatMoney = (n) => `$${Number(n || 0).toFixed(2)}`;

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentUser, setCurrentUser] = useState({
    name: 'Demo User',
    email: 'demo@tikytop.com',
    avatar: 'https://i.pravatar.cc/150?u=demo',
  });

  const [activeTab, setActiveTab] = useState('overview');
  const [state, setState] = useState(() => loadState());
  const { orders, wallet } = state;

  const [orderForm, setOrderForm] = useState({
    platform: 'tiktok',
    service: 'followers',
    url: '',
    quantity: 1000,
  });
  const [orderError, setOrderError] = useState('');
  const [orderSuccess, setOrderSuccess] = useState('');

  const [fundsAmount, setFundsAmount] = useState(20);
  const [fundsMessage, setFundsMessage] = useState('');

  // Persist state on every change
  useEffect(() => {
    saveState(state);
  }, [state]);

  // Hydrate user from session
  useEffect(() => {
    const sessionData = getSession();
    if (sessionData?.user) {
      const u = sessionData.user;
      setCurrentUser({
        name: u.username || u.name || 'Demo User',
        email: u.email || 'demo@tikytop.com',
        avatar: `https://i.pravatar.cc/150?u=${u.username || u.email || 'demo'}`,
      });
    }
  }, []);

  // Pick up incoming order from landing page CTA
  useEffect(() => {
    const pending = location.state?.order || location.state;
    if (pending && (pending.profileUrl || pending.url || pending.selectedPlatform)) {
      const platform = pending.selectedPlatform || pending.platform || 'tiktok';
      const service = pending.selectedService || pending.service || (SERVICES[platform]?.[0]?.id ?? 'followers');
      setOrderForm({
        platform,
        service,
        url: pending.profileUrl || pending.url || '',
        quantity: pending.quantity || 1000,
      });
      setActiveTab('neworder');
      navigate('.', { replace: true, state: null });
    }
  }, [location.state, navigate]);

  // Simulate gradual delivery for processing orders
  useEffect(() => {
    const interval = setInterval(() => {
      setState(prev => {
        let changed = false;
        const next = prev.orders.map(o => {
          if (o.status === 'pending' && Date.now() - o.startTime > 15000) {
            changed = true;
            return { ...o, status: 'processing' };
          }
          if (o.status === 'processing' && o.delivered < o.amount) {
            const inc = Math.max(1, Math.floor(o.amount * (0.05 + Math.random() * 0.1)));
            const delivered = Math.min(o.amount, o.delivered + inc);
            changed = true;
            return { ...o, delivered, status: delivered >= o.amount ? 'completed' : 'processing' };
          }
          return o;
        });
        return changed ? { ...prev, orders: next } : prev;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    clearSession();
    navigate('/login');
  };

  const activeService = useMemo(
    () => SERVICES[orderForm.platform]?.find(s => s.id === orderForm.service) || SERVICES[orderForm.platform][0],
    [orderForm.platform, orderForm.service]
  );

  const orderCost = useMemo(
    () => (activeService ? activeService.price * orderForm.quantity : 0),
    [activeService, orderForm.quantity]
  );

  const stats = useMemo(() => {
    const total = orders.length;
    const active = orders.filter(o => o.status !== 'completed').length;
    const completed = orders.filter(o => o.status === 'completed').length;
    const spent = orders.reduce((sum, o) => sum + Number(o.cost || 0), 0);
    return { total, active, completed, spent };
  }, [orders]);

  // ---- Actions ----
  const handleCreateOrder = useCallback(() => {
    setOrderError('');
    setOrderSuccess('');
    if (!orderForm.url.trim()) {
      setOrderError('Please enter your profile or post URL.');
      return;
    }
    if (orderForm.quantity < 10) {
      setOrderError('Minimum quantity is 10.');
      return;
    }
    if (orderCost > wallet.balance) {
      setOrderError(`Insufficient balance. Add at least ${formatMoney(orderCost - wallet.balance)} to your wallet.`);
      return;
    }
    const platform = PLATFORMS.find(p => p.id === orderForm.platform);
    const service = activeService;
    const newOrder = {
      id: `#${platform.id.slice(0, 2).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`,
      service: `${platform.name} ${service.name}`,
      platform: orderForm.platform,
      serviceId: service.id,
      amount: orderForm.quantity,
      delivered: 0,
      status: 'pending',
      startTime: Date.now(),
      cost: Number(orderCost.toFixed(2)),
      url: orderForm.url.trim(),
    };
    setState(prev => ({
      ...prev,
      orders: [newOrder, ...prev.orders],
      wallet: {
        balance: Number((prev.wallet.balance - orderCost).toFixed(2)),
        transactions: [
          { id: `t${Date.now()}`, type: 'order', amount: -Number(orderCost.toFixed(2)), label: `Order ${newOrder.id} – ${newOrder.service}`, timestamp: Date.now() },
          ...prev.wallet.transactions,
        ],
      },
    }));
    setOrderSuccess(`Order ${newOrder.id} placed successfully!`);
    setOrderForm(f => ({ ...f, url: '' }));
    setTimeout(() => setActiveTab('orders'), 900);
  }, [orderForm, activeService, orderCost, wallet.balance]);

  const handleCancelOrder = (id) => {
    setState(prev => {
      const target = prev.orders.find(o => o.id === id);
      if (!target || target.status === 'completed' || target.status === 'cancelled') return prev;
      const refund = target.delivered === 0 ? Number(target.cost) : 0;
      return {
        ...prev,
        orders: prev.orders.map(o => o.id === id ? { ...o, status: 'cancelled' } : o),
        wallet: refund > 0 ? {
          balance: Number((prev.wallet.balance + refund).toFixed(2)),
          transactions: [
            { id: `t${Date.now()}`, type: 'refund', amount: refund, label: `Refund for ${id}`, timestamp: Date.now() },
            ...prev.wallet.transactions,
          ],
        } : prev.wallet,
      };
    });
  };

  const handleAddFunds = (amount) => {
    const amt = Number(amount);
    if (!amt || amt <= 0) {
      setFundsMessage('Enter a valid amount.');
      return;
    }
    setState(prev => ({
      ...prev,
      wallet: {
        balance: Number((prev.wallet.balance + amt).toFixed(2)),
        transactions: [
          { id: `t${Date.now()}`, type: 'deposit', amount: amt, label: `Wallet top-up`, timestamp: Date.now() },
          ...prev.wallet.transactions,
        ],
      },
    }));
    setFundsMessage(`Added ${formatMoney(amt)} to your wallet.`);
    setTimeout(() => setFundsMessage(''), 2500);
  };

  const getStatusColor = (status) => ({
    completed: '#00C896',
    processing: '#A6FF00',
    pending: '#FF9F1C',
    cancelled: '#94A3B8',
  }[status] || '#75819A');

  // ---- Renderers ----
  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Orders', value: stats.total, icon: '📦', color: '#FF00C8' },
          { label: 'Active', value: stats.active, icon: '⚡', color: '#A6FF00' },
          { label: 'Completed', value: stats.completed, icon: '✅', color: '#00C896' },
          { label: 'Total Spent', value: formatMoney(stats.spent), icon: '💰', color: '#FF6B35' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">{stat.icon}</span>
              <span className="w-2 h-2 rounded-full" style={{ background: stat.color }} />
            </div>
            <div className="text-2xl font-black text-[#020A1B]">{stat.value}</div>
            <div className="text-xs font-semibold text-[#75819A]">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 lg:col-span-2">
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#020A1B]">Active Orders</h2>
            <button onClick={() => setActiveTab('orders')} className="text-sm text-[#FF00C8] font-bold">View All →</button>
          </div>
          <div className="divide-y divide-gray-50">
            {orders.filter(o => o.status !== 'completed' && o.status !== 'cancelled').slice(0, 5).map((order) => (
              <div key={order.id} className="p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0"
                       style={{ background: getStatusColor(order.status) }}>
                    {order.platform.charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-[#020A1B] truncate">{order.service}</div>
                    <div className="text-xs text-[#75819A]">{order.id}</div>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-xs font-bold text-[#020A1B]">{order.delivered.toLocaleString()} / {order.amount.toLocaleString()}</div>
                  <div className="w-28 bg-gray-200 rounded-full h-1.5 mt-1 overflow-hidden">
                    <div className="h-full transition-all duration-500" style={{ width: `${(order.delivered / order.amount) * 100}%`, background: getStatusColor(order.status) }} />
                  </div>
                </div>
              </div>
            ))}
            {orders.filter(o => o.status !== 'completed' && o.status !== 'cancelled').length === 0 && (
              <div className="p-8 text-center text-[#75819A] text-sm">
                No active orders. <button onClick={() => setActiveTab('neworder')} className="text-[#FF00C8] font-bold">Place one</button>
              </div>
            )}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#020A1B] to-[#1a1a3e] rounded-2xl p-6 text-white shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs uppercase tracking-widest font-bold text-white/60">Wallet Balance</span>
            <span className="text-2xl">💳</span>
          </div>
          <div className="text-4xl font-black mb-2">{formatMoney(wallet.balance)}</div>
          <p className="text-xs text-white/50 mb-5">Available for new orders</p>
          <div className="flex gap-2">
            <button onClick={() => setActiveTab('wallet')} className="flex-1 py-2.5 rounded-xl bg-white text-[#020A1B] font-bold text-sm hover:bg-white/90">
              Add Funds
            </button>
            <button onClick={() => setActiveTab('neworder')} className="flex-1 py-2.5 rounded-xl bg-[#FF00C8] text-white font-bold text-sm hover:bg-[#D600A7]">
              New Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNewOrder = () => {
    const services = SERVICES[orderForm.platform] || [];
    const insufficient = orderCost > wallet.balance;
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:col-span-2">
          <h2 className="text-xl font-bold text-[#020A1B] mb-6">Create New Order</h2>

          {orderError && <div className="mb-4 p-3 rounded-xl bg-red-50 text-red-600 text-sm font-medium">{orderError}</div>}
          {orderSuccess && <div className="mb-4 p-3 rounded-xl bg-emerald-50 text-emerald-700 text-sm font-medium">{orderSuccess}</div>}

          <div className="mb-6">
            <label className="block text-sm font-bold text-[#020A1B] mb-3">1. Platform</label>
            <div className="grid grid-cols-3 gap-3">
              {PLATFORMS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setOrderForm(f => ({ ...f, platform: p.id, service: SERVICES[p.id][0].id }))}
                  className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                    orderForm.platform === p.id ? 'border-[#FF00C8] bg-[#FF00C8]/5' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="text-2xl">{p.icon}</span>
                  <span className="text-sm font-bold">{p.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold text-[#020A1B] mb-3">2. Service</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {services.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setOrderForm(f => ({ ...f, service: s.id }))}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    orderForm.service === s.id ? 'border-[#FF00C8] bg-[#FF00C8]/5' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span>{s.icon}</span>
                    <span className="font-bold text-[#020A1B] text-sm">{s.name}</span>
                  </div>
                  <div className="text-xs text-[#75819A]">${(s.price * 1000).toFixed(2)}/1k</div>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold text-[#020A1B] mb-3">3. Profile / Post URL</label>
            <input
              type="url"
              value={orderForm.url}
              onChange={(e) => setOrderForm(f => ({ ...f, url: e.target.value }))}
              placeholder={`https://${orderForm.platform}.com/@username`}
              className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-[#FF00C8] outline-none"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold text-[#020A1B] mb-3">4. Quantity</label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setOrderForm(f => ({ ...f, quantity: Math.max(10, f.quantity - 100) }))}
                className="w-12 h-12 rounded-xl bg-gray-100 font-bold hover:bg-gray-200"
              >−</button>
              <input
                type="number"
                value={orderForm.quantity}
                onChange={(e) => setOrderForm(f => ({ ...f, quantity: Math.max(10, parseInt(e.target.value) || 10) }))}
                className="flex-1 p-3 rounded-xl border-2 border-gray-200 text-center font-bold"
              />
              <button
                onClick={() => setOrderForm(f => ({ ...f, quantity: f.quantity + 100 }))}
                className="w-12 h-12 rounded-xl bg-gray-100 font-bold hover:bg-gray-200"
              >+</button>
            </div>
            <div className="grid grid-cols-4 gap-2 mt-2">
              {[100, 500, 1000, 5000].map((q) => (
                <button
                  key={q}
                  onClick={() => setOrderForm(f => ({ ...f, quantity: q }))}
                  className={`py-2 rounded-lg text-sm font-medium ${
                    orderForm.quantity === q ? 'bg-[#FF00C8] text-white' : 'bg-gray-100 text-[#75819A] hover:bg-gray-200'
                  }`}
                >{q.toLocaleString()}</button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-6">
            <h3 className="text-sm font-black uppercase tracking-widest text-[#75819A] mb-4">Summary</h3>
            <div className="space-y-3 mb-5">
              <div className="flex justify-between text-sm"><span className="text-[#75819A]">Platform</span><span className="font-bold capitalize">{orderForm.platform}</span></div>
              <div className="flex justify-between text-sm"><span className="text-[#75819A]">Service</span><span className="font-bold">{activeService?.name}</span></div>
              <div className="flex justify-between text-sm"><span className="text-[#75819A]">Quantity</span><span className="font-bold">{orderForm.quantity.toLocaleString()}</span></div>
              <div className="flex justify-between text-sm"><span className="text-[#75819A]">Rate</span><span className="font-bold">${(activeService?.price * 1000).toFixed(2)}/1k</span></div>
            </div>
            <div className="bg-gradient-to-r from-[#FF00C8]/10 to-[#00F5D4]/10 rounded-xl p-4 mb-3 flex justify-between items-center">
              <span className="font-medium text-[#75819A]">Total</span>
              <span className="text-2xl font-black text-[#020A1B]">{formatMoney(orderCost)}</span>
            </div>
            <div className="text-xs text-[#75819A] mb-4 flex justify-between">
              <span>Wallet Balance</span>
              <span className={`font-bold ${insufficient ? 'text-red-500' : 'text-emerald-600'}`}>{formatMoney(wallet.balance)}</span>
            </div>
            <button
              onClick={handleCreateOrder}
              disabled={!orderForm.url || insufficient}
              className={`w-full py-4 rounded-xl font-black text-lg transition-all ${
                orderForm.url && !insufficient
                  ? 'bg-gradient-to-r from-[#FF00C8] to-[#D600A7] text-white hover:shadow-xl'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {insufficient ? 'Insufficient Balance' : `Place Order — ${formatMoney(orderCost)}`}
            </button>
            {insufficient && (
              <button onClick={() => setActiveTab('wallet')} className="w-full mt-2 py-2 text-sm font-bold text-[#FF00C8] hover:underline">
                + Add Funds to Wallet
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderOrders = () => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        <h2 className="text-lg font-bold text-[#020A1B]">Order History</h2>
        <span className="text-sm text-[#75819A]">{orders.length} total</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              {['Order ID', 'Service', 'Quantity', 'Delivered', 'Status', 'Cost', 'Date', ''].map(h => (
                <th key={h} className="text-left p-4 font-bold text-[#020A1B]">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50/50">
                <td className="p-4 font-bold text-[#020A1B]">{order.id}</td>
                <td className="p-4 text-[#020A1B]">{order.service}</td>
                <td className="p-4 text-[#75819A]">{order.amount.toLocaleString()}</td>
                <td className="p-4 text-[#75819A]">{order.delivered.toLocaleString()}</td>
                <td className="p-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold capitalize" style={{ backgroundColor: `${getStatusColor(order.status)}20`, color: getStatusColor(order.status) }}>
                    {order.status}
                  </span>
                </td>
                <td className="p-4 font-bold text-[#020A1B]">{formatMoney(order.cost)}</td>
                <td className="p-4 text-[#75819A] whitespace-nowrap">{new Date(order.startTime).toLocaleDateString()}</td>
                <td className="p-4">
                  {(order.status === 'pending' || order.status === 'processing') && (
                    <button onClick={() => handleCancelOrder(order.id)} className="text-xs font-bold text-red-500 hover:text-red-700">
                      Cancel
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr><td colSpan={8} className="p-10 text-center text-[#75819A]">No orders yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderAnalytics = () => {
    const byPlatform = PLATFORMS.map(p => {
      const list = orders.filter(o => o.platform === p.id);
      const delivered = list.reduce((s, o) => s + o.delivered, 0);
      const spent = list.reduce((s, o) => s + Number(o.cost || 0), 0);
      return { ...p, count: list.length, delivered, spent };
    });
    const totalDelivered = byPlatform.reduce((s, p) => s + p.delivered, 0);
    const totalSpent = stats.spent;

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-[#020A1B] mb-4">Growth Overview</h3>
          <div className="space-y-3">
            <div className="flex justify-between p-3 bg-gray-50 rounded-xl">
              <span className="text-[#75819A]">Total Engagement Delivered</span>
              <span className="font-bold text-[#020A1B]">{totalDelivered.toLocaleString()}</span>
            </div>
            <div className="flex justify-between p-3 bg-gray-50 rounded-xl">
              <span className="text-[#75819A]">Total Investment</span>
              <span className="font-bold text-[#020A1B]">{formatMoney(totalSpent)}</span>
            </div>
            <div className="flex justify-between p-3 bg-gray-50 rounded-xl">
              <span className="text-[#75819A]">Avg. Cost / 1k</span>
              <span className="font-bold text-[#020A1B]">
                {totalDelivered > 0 ? formatMoney((totalSpent / totalDelivered) * 1000) : '$0.00'}
              </span>
            </div>
            <div className="flex justify-between p-3 bg-gray-50 rounded-xl">
              <span className="text-[#75819A]">Completion Rate</span>
              <span className="font-bold text-[#020A1B]">
                {stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0}%
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-[#020A1B] mb-4">Platform Breakdown</h3>
          <div className="space-y-4">
            {byPlatform.map((p) => {
              const pct = stats.total > 0 ? (p.count / stats.total) * 100 : 0;
              return (
                <div key={p.id}>
                  <div className="flex items-center justify-between mb-1 text-sm">
                    <div className="flex items-center gap-2"><span>{p.icon}</span><span className="font-medium">{p.name}</span></div>
                    <span className="font-bold">{p.count} order{p.count !== 1 ? 's' : ''} · {formatMoney(p.spent)}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: p.color }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderWallet = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-gradient-to-br from-[#020A1B] to-[#1a1a3e] rounded-2xl p-6 text-white">
          <span className="text-xs uppercase tracking-widest font-bold text-white/60">Current Balance</span>
          <div className="text-4xl font-black my-3">{formatMoney(wallet.balance)}</div>
          <p className="text-xs text-white/50">Use this balance to place orders instantly.</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-[#020A1B] mb-4">Add Funds</h3>
          {fundsMessage && <div className="mb-3 p-3 rounded-xl bg-emerald-50 text-emerald-700 text-sm font-medium">{fundsMessage}</div>}
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[10, 25, 50, 100, 250, 500].map(v => (
              <button key={v} onClick={() => setFundsAmount(v)}
                className={`py-2 rounded-lg text-sm font-bold ${fundsAmount === v ? 'bg-[#FF00C8] text-white' : 'bg-gray-100 text-[#75819A] hover:bg-gray-200'}`}>
                ${v}
              </button>
            ))}
          </div>
          <input
            type="number"
            value={fundsAmount}
            onChange={(e) => setFundsAmount(parseFloat(e.target.value) || 0)}
            className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-[#FF00C8] outline-none mb-3 font-bold"
          />
          <button
            onClick={() => handleAddFunds(fundsAmount)}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF00C8] to-[#D600A7] text-white font-bold hover:shadow-lg"
          >
            Add {formatMoney(fundsAmount)}
          </button>
        </div>
      </div>

      <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100">
          <h3 className="text-lg font-bold text-[#020A1B]">Transactions</h3>
        </div>
        <div className="divide-y divide-gray-50 max-h-[500px] overflow-y-auto">
          {wallet.transactions.map(tx => (
            <div key={tx.id} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${tx.amount >= 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'}`}>
                  {tx.amount >= 0 ? '↓' : '↑'}
                </div>
                <div>
                  <div className="font-bold text-[#020A1B] text-sm">{tx.label}</div>
                  <div className="text-xs text-[#75819A]">{new Date(tx.timestamp).toLocaleString()}</div>
                </div>
              </div>
              <div className={`font-black ${tx.amount >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                {tx.amount >= 0 ? '+' : ''}{formatMoney(tx.amount)}
              </div>
            </div>
          ))}
          {wallet.transactions.length === 0 && (
            <div className="p-8 text-center text-[#75819A]">No transactions yet.</div>
          )}
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 max-w-2xl">
      <h2 className="text-lg font-bold text-[#020A1B] mb-6">Account Settings</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-[#020A1B] mb-2">Full Name</label>
          <input type="text" defaultValue={currentUser.name} className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#FF00C8] outline-none" />
        </div>
        <div>
          <label className="block text-sm font-bold text-[#020A1B] mb-2">Email</label>
          <input type="email" defaultValue={currentUser.email} className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#FF00C8] outline-none" />
        </div>
        <div className="flex gap-3 pt-2">
          <button className="px-6 py-3 bg-[#FF00C8] text-white font-bold rounded-lg hover:bg-[#D600A7]">Save Changes</button>
          <button onClick={handleLogout} className="px-6 py-3 bg-gray-100 text-[#020A1B] font-bold rounded-lg hover:bg-gray-200">Logout</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <aside className="hidden lg:flex w-64 flex-col fixed inset-y-0 bg-white border-r border-gray-100 z-30">
        <div className="flex items-center gap-3 px-6 py-6 border-b border-gray-100">
          <div className="w-10 h-10 bg-gradient-to-r from-[#FF00C8] to-[#00F5D4] rounded-xl flex items-center justify-center">
            <span className="text-white font-black text-lg">T</span>
          </div>
          <span className="text-xl font-black text-[#020A1B]">TikyTop</span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1">
          {SIDEBAR.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left font-medium transition-all ${
                activeTab === item.id
                  ? 'bg-gradient-to-r from-[#FF00C8]/10 to-[#00F5D4]/10 text-[#FF00C8]'
                  : 'text-[#75819A] hover:bg-gray-50 hover:text-[#020A1B]'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <div className="px-4 py-3 mb-2 rounded-xl bg-gray-50">
            <div className="text-[10px] uppercase tracking-widest font-bold text-[#75819A]">Balance</div>
            <div className="text-lg font-black text-[#020A1B]">{formatMoney(wallet.balance)}</div>
          </div>
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left font-medium text-[#75819A] hover:bg-red-50 hover:text-red-500 transition-colors">
            <span>🚪</span><span>Logout</span>
          </button>
        </div>
      </aside>

      <div className="flex-1 lg:ml-64 min-w-0">
        <header className="lg:hidden bg-white border-b border-gray-100 p-4 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[#FF00C8] to-[#00F5D4] rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-lg">T</span>
            </div>
            <span className="text-xl font-black text-[#020A1B]">TikyTop</span>
          </div>
          <span className="text-sm font-bold text-[#020A1B]">{formatMoney(wallet.balance)}</span>
        </header>

        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-2 flex justify-around z-30">
          {SIDEBAR.slice(0, 5).map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center p-2 rounded-lg flex-1 ${
                activeTab === item.id ? 'text-[#FF00C8]' : 'text-[#75819A]'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-[10px] font-bold mt-0.5">{item.label}</span>
            </button>
          ))}
        </div>

        <main className="p-4 lg:p-8 pb-24 lg:pb-8">
          <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
            <div className="flex items-center gap-4 min-w-0">
              <img src={currentUser.avatar} alt={currentUser.name} className="w-12 h-12 rounded-xl border-2 border-white shadow flex-shrink-0" />
              <div className="min-w-0">
                <h1 className="text-xl font-black text-[#020A1B] truncate">Welcome, {currentUser.name}!</h1>
                <p className="text-sm text-[#75819A] truncate">{currentUser.email}</p>
              </div>
            </div>
            <button
              onClick={() => setActiveTab('neworder')}
              className="px-4 py-2 bg-gradient-to-r from-[#FF00C8] to-[#D600A7] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-pink-500/25 transition-all flex items-center gap-2"
            >
              <span>➕</span><span>New Order</span>
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'overview' && renderOverview()}
              {activeTab === 'neworder' && renderNewOrder()}
              {activeTab === 'orders' && renderOrders()}
              {activeTab === 'analytics' && renderAnalytics()}
              {activeTab === 'wallet' && renderWallet()}
              {activeTab === 'settings' && renderSettings()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
