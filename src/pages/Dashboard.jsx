import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { getSession, clearSession } from '../utils/auth';

const PLATFORMS = [
  { id: 'tiktok', name: 'TikTok', icon: '🎵', color: '#FF00C8', bg: 'from-pink-500 to-purple-600' },
  { id: 'instagram', name: 'Instagram', icon: '📸', color: '#00F5D4', bg: 'from-cyan-400 to-blue-500' },
  { id: 'youtube', name: 'YouTube', icon: '▶️', color: '#A6FF00', bg: 'from-lime-400 to-green-500' },
  { id: 'facebook', name: 'Facebook', icon: '📘', color: '#FF6B35', bg: 'from-orange-500 to-red-500' }
];

const SERVICES = {
  tiktok: [
    { id: 'followers', name: 'Followers', price: 5.60, icon: '👥', desc: 'Get more followers' },
    { id: 'likes', name: 'Likes', price: 0.08, icon: '❤️', desc: 'Boost your likes' },
    { id: 'views', name: 'Views', price: 0.02, icon: '👁️', desc: 'Increase views' },
    { id: 'comments', name: 'Comments', price: 1.20, icon: '💬', desc: 'Get comments' },
    { id: 'shares', name: 'Shares', price: 2.50, icon: '🔄', desc: 'Share content' },
    { id: 'saves', name: 'Saves', price: 1.80, icon: '🔖', desc: 'Save content' }
  ],
  instagram: [
    { id: 'followers', name: 'Followers', price: 3.20, icon: '👥', desc: 'Grow followers' },
    { id: 'likes', name: 'Likes', price: 0.15, icon: '❤️', desc: 'Boost likes' },
    { id: 'views', name: 'Views', price: 0.05, icon: '👁️', desc: 'More views' },
    { id: 'comments', name: 'Comments', price: 2.10, icon: '💬', desc: 'Get comments' },
    { id: 'saves', name: 'Saves', price: 1.80, icon: '🔖', desc: 'Save content' },
    { id: 'storyviews', name: 'Story Views', price: 0.035, icon: '📱', desc: 'Story views' }
  ],
  youtube: [
    { id: 'subscribers', name: 'Subscribers', price: 13.90, icon: '🔔', desc: 'Get subscribers' },
    { id: 'views', name: 'Views', price: 0.03, icon: '👁️', desc: 'Increase views' },
    { id: 'likes', name: 'Likes', price: 0.25, icon: '👍', desc: 'Boost likes' },
    { id: 'comments', name: 'Comments', price: 3.50, icon: '💬', desc: 'Get comments' },
    { id: 'shares', name: 'Shares', price: 4.20, icon: '🔄', desc: 'Share content' }
  ],
  facebook: [
    { id: 'pagelikes', name: 'Page Likes', price: 2.80, icon: '👍', desc: 'Page likes' },
    { id: 'followers', name: 'Followers', price: 4.50, icon: '👥', desc: 'Get followers' },
    { id: 'postlikes', name: 'Post Likes', price: 0.015, icon: '❤️', desc: 'Post likes' },
    { id: 'views', name: 'Views', price: 0.08, icon: '👁️', desc: 'More views' },
    { id: 'shares', name: 'Shares', price: 3.20, icon: '🔄', desc: 'Share content' }
  ]
};

const INITIAL_ORDERS = [
  { id: '#TK-7821', service: 'TikTok Followers', platform: 'tiktok', amount: 1000, delivered: 847, status: 'completed', startTime: Date.now() - 86400000, cost: '$5.60' },
  { id: '#IG-3421', service: 'Instagram Likes', platform: 'instagram', amount: 500, delivered: 500, status: 'completed', startTime: Date.now() - 172800000, cost: '$2.99' },
  { id: '#YT-1203', service: 'YouTube Subscribers', platform: 'youtube', amount: 100, delivered: 45, status: 'processing', startTime: Date.now() - 3600000, cost: '$13.90' },
  { id: '#TK-9954', service: 'TikTok Likes', platform: 'tiktok', amount: 2000, delivered: 0, status: 'pending', startTime: Date.now(), cost: '$0.16' },
  { id: '#FB-7782', service: 'Facebook Page Likes', platform: 'facebook', amount: 500, delivered: 500, status: 'completed', startTime: Date.now() - 259200000, cost: '$4.50' }
];

const SIDEBAR = [
  { id: 'overview', icon: '📊', label: 'Overview' },
  { id: 'neworder', icon: '➕', label: 'New Order' },
  { id: 'orders', icon: '📦', label: 'Order History' },
  { id: 'analytics', icon: '📈', label: 'Analytics' },
  { id: 'wallet', icon: '💳', label: 'Wallet' },
  { id: 'settings', icon: '⚙️', label: 'Settings' }
];

function Dashboard() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({ name: 'Guest', email: 'guest@tikytop.com', avatar: 'https://i.pravatar.cc/150?u=guest' });
  const [activeTab, setActiveTab] = useState('overview');
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  
  const [orderForm, setOrderForm] = useState({
    platform: 'tiktok',
    service: 'followers',
    url: '',
    quantity: 100
  });

  useEffect(() => {
    const sessionData = getSession();
    if (sessionData) {
      setCurrentUser({
        name: sessionData.username || 'Demo User',
        email: sessionData.email || 'demo@tikytop.com',
        avatar: `https://i.pravatar.cc/150?u=${sessionData.username || 'demo'}`
      });
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrders(prev => prev.map(order => {
        if (order.status === 'processing' && order.delivered < order.amount) {
          const increment = Math.floor(Math.random() * 50) + 10;
          const newDelivered = Math.min(order.delivered + increment, order.amount);
          return {
            ...order,
            delivered: newDelivered,
            status: newDelivered >= order.amount ? 'completed' : 'processing'
          };
        }
        return order;
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    clearSession();
    navigate('/login');
  };

  const calculatePrice = () => {
    const service = SERVICES[orderForm.platform]?.find(s => s.id === orderForm.service);
    return service ? (service.price * orderForm.quantity).toFixed(2) : '0.00';
  };

  const handleCreateOrder = () => {
    if (!orderForm.url) return;
    
    const platform = PLATFORMS.find(p => p.id === orderForm.platform);
    const service = SERVICES[orderForm.platform].find(s => s.id === orderForm.service);
    
    const newOrder = {
      id: `#${platform.id.toUpperCase()}-${Math.floor(Math.random() * 9000) + 1000}`,
      service: `${platform.name} ${service.name}`,
      platform: orderForm.platform,
      amount: orderForm.quantity,
      delivered: 0,
      status: 'pending',
      startTime: Date.now(),
      cost: `$${calculatePrice()}`
    };
    
    setOrders([newOrder, ...orders]);
    setShowOrderModal(false);
    setOrderForm({ platform: 'tiktok', service: 'followers', url: '', quantity: 100 });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#00F5D4';
      case 'processing': return '#A6FF00';
      case 'pending': return '#FF6B35';
      default: return '#75819A';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'processing': return 'Processing';
      case 'pending': return 'Pending';
      default: return status;
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Orders', value: '47', icon: '📦', color: '#FF00C8', change: '+12%' },
          { label: 'Active', value: '3', icon: '⚡', color: '#A6FF00', change: '+2' },
          { label: 'Completed', value: '44', icon: '✅', color: '#00F5D4', change: '+8' },
          { label: 'Total Spent', value: '$847', icon: '💰', color: '#FF6B35', change: '+15%' }
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">{stat.icon}</span>
              <span className="text-xs font-bold" style={{ color: stat.color }}>{stat.change}</span>
            </div>
            <div className="text-2xl font-black text-[#020A1B]">{stat.value}</div>
            <div className="text-xs font-semibold text-[#75819A]">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Active Orders */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-lg font-bold text-[#020A1B]">Active Orders</h2>
          <button onClick={() => setActiveTab('orders')} className="text-sm text-[#FF00C8] font-bold">View All</button>
        </div>
        <div className="divide-y divide-gray-50">
          {orders.filter(o => o.status !== 'completed').slice(0, 4).map((order) => (
            <div key={order.id} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                     style={{ background: getStatusColor(order.status) }}>
                  {order.platform.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="font-bold text-[#020A1B]">{order.service}</div>
                  <div className="text-sm text-[#75819A]">{order.id}</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className="text-sm font-bold text-[#020A1B]">{order.delivered.toLocaleString()} / {order.amount.toLocaleString()}</div>
                  <div className="w-24 bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className="h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${(order.delivered / order.amount) * 100}%`,
                        background: getStatusColor(order.status)
                      }}
                    ></div>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase" style={{ backgroundColor: `${getStatusColor(order.status)}20`, color: getStatusColor(order.status) }}>
                  {getStatusLabel(order.status)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderNewOrder = () => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-bold text-[#020A1B] mb-6">Create New Order</h2>
      
      {/* Platform */}
      <div className="mb-6">
        <label className="block text-sm font-bold text-[#020A1B] mb-3">1. Choose Platform</label>
        <div className="grid grid-cols-4 gap-3">
          {PLATFORMS.map((platform) => (
            <button
              key={platform.id}
              onClick={() => setOrderForm(prev => ({ ...prev, platform: platform.id, service: SERVICES[platform.id][0].id }))}
              className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                orderForm.platform === platform.id
                  ? 'border-[#FF00C8] bg-[#FF00C8]/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <span className="text-2xl">{platform.icon}</span>
              <span className="text-sm font-bold">{platform.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Service */}
      <div className="mb-6">
        <label className="block text-sm font-bold text-[#020A1B] mb-3">2. Choose Service</label>
        <div className="grid grid-cols-3 gap-3">
          {SERVICES[orderForm.platform].map((service) => (
            <button
              key={service.id}
              onClick={() => setOrderForm(prev => ({ ...prev, service: service.id }))}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                orderForm.service === service.id
                  ? 'border-[#FF00C8] bg-[#FF00C8]/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span>{service.icon}</span>
                <span className="font-bold text-[#020A1B]">{service.name}</span>
              </div>
              <div className="text-xs text-[#75819A]">${service.price}/unit</div>
            </button>
          ))}
        </div>
      </div>

      {/* URL */}
      <div className="mb-6">
        <label className="block text-sm font-bold text-[#020A1B] mb-3">3. Enter Profile URL</label>
        <input
          type="url"
          value={orderForm.url}
          onChange={(e) => setOrderForm(prev => ({ ...prev, url: e.target.value }))}
          placeholder={`https://${orderForm.platform}.com/@username`}
          className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-[#FF00C8] outline-none"
        />
      </div>

      {/* Quantity */}
      <div className="mb-6">
        <label className="block text-sm font-bold text-[#020A1B] mb-3">4. Quantity</label>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOrderForm(prev => ({ ...prev, quantity: Math.max(10, prev.quantity - 10) }))}
            className="w-12 h-12 rounded-xl bg-gray-100 font-bold hover:bg-gray-200"
          >-</button>
          <input
            type="number"
            value={orderForm.quantity}
            onChange={(e) => setOrderForm(prev => ({ ...prev, quantity: parseInt(e.target.value) || 10 }))}
            className="flex-1 p-3 rounded-xl border-2 border-gray-200 text-center font-bold"
          />
          <button
            onClick={() => setOrderForm(prev => ({ ...prev, quantity: prev.quantity + 10 }))}
            className="w-12 h-12 rounded-xl bg-gray-100 font-bold hover:bg-gray-200"
          >+</button>
        </div>
        <div className="flex gap-2 mt-2">
          {[100, 500, 1000, 5000].map((q) => (
            <button
              key={q}
              onClick={() => setOrderForm(prev => ({ ...prev, quantity: q }))}
              className={`flex-1 py-2 rounded-lg text-sm font-medium ${
                orderForm.quantity === q
                  ? 'bg-[#FF00C8] text-white'
                  : 'bg-gray-100 text-[#75819A] hover:bg-gray-200'
              }`}
            >
              {q.toLocaleString()}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="bg-gradient-to-r from-[#FF00C8]/10 to-[#00F5D4]/10 rounded-xl p-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="font-medium text-[#75819A]">Total</span>
          <span className="text-2xl font-black text-[#020A1B]">${calculatePrice()}</span>
        </div>
      </div>

      {/* Submit */}
      <button
        onClick={handleCreateOrder}
        disabled={!orderForm.url}
        className={`w-full py-4 rounded-xl font-black text-lg transition-all ${
          orderForm.url
            ? 'bg-gradient-to-r from-[#FF00C8] to-[#D600A7] text-white hover:shadow-xl'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        Place Order - ${calculatePrice()}
      </button>
    </div>
  );

  const renderOrders = () => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-lg font-bold text-[#020A1B]">Order History</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left p-4 font-bold text-[#020A1B]">Order ID</th>
              <th className="text-left p-4 font-bold text-[#020A1B]">Service</th>
              <th className="text-left p-4 font-bold text-[#020A1B]">Amount</th>
              <th className="text-left p-4 font-bold text-[#020A1B]">Delivered</th>
              <th className="text-left p-4 font-bold text-[#020A1B]">Status</th>
              <th className="text-left p-4 font-bold text-[#020A1B]">Cost</th>
              <th className="text-left p-4 font-bold text-[#020A1B]">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-100">
                <td className="p-4 font-bold text-[#020A1B]">{order.id}</td>
                <td className="p-4 text-[#75819A]">{order.service}</td>
                <td className="p-4 text-[#75819A]">{order.amount.toLocaleString()}</td>
                <td className="p-4 text-[#75819A]">{order.delivered.toLocaleString()}</td>
                <td className="p-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ 
                    backgroundColor: `${getStatusColor(order.status)}20`, 
                    color: getStatusColor(order.status) 
                  }}>
                    {getStatusLabel(order.status)}
                  </span>
                </td>
                <td className="p-4 font-bold text-[#020A1B]">{order.cost}</td>
                <td className="p-4 text-[#75819A]">{new Date(order.startTime).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-[#020A1B] mb-4">Growth Overview</h3>
        <div className="space-y-4">
          {[
            { label: 'Total Followers', value: '+47,850', change: '+23%', color: '#FF00C8' },
            { label: 'Total Likes', value: '+156,420', change: '+18%', color: '#00F5D4' },
            { label: 'Total Views', value: '+2.4M', change: '+31%', color: '#A6FF00' }
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <span className="text-[#75819A]">{item.label}</span>
              <div className="flex items-center gap-3">
                <span className="font-bold text-[#020A1B]">{item.value}</span>
                <span className="text-xs font-bold" style={{ color: item.color }}>{item.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-[#020A1B] mb-4">Platform Breakdown</h3>
        <div className="space-y-4">
          {PLATFORMS.map((platform) => {
            const userOrders = orders.filter(o => o.platform === platform.id).length;
            const total = orders.length;
            const percentage = total > 0 ? (userOrders / total) * 100 : 0;
            return (
              <div key={platform.id}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span>{platform.icon}</span>
                    <span className="font-medium">{platform.name}</span>
                  </div>
                  <span className="font-bold">{Math.round(percentage)}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${percentage}%`, background: platform.color }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-lg font-bold text-[#020A1B] mb-6">Account Settings</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-[#020A1B] mb-2">Full Name</label>
          <input type="text" defaultValue={currentUser.name} className="w-full p-3 border border-gray-200 rounded-lg focus:border-[#FF00C8] outline-none" />
        </div>
        <div>
          <label className="block text-sm font-bold text-[#020A1B] mb-2">Email</label>
          <input type="email" defaultValue={currentUser.email} className="w-full p-3 border border-gray-200 rounded-lg focus:border-[#FF00C8] outline-none" />
        </div>
        <div>
          <label className="block text-sm font-bold text-[#020A1B] mb-2">Password</label>
          <input type="password" defaultValue="********" className="w-full p-3 border border-gray-200 rounded-lg focus:border-[#FF00C8] outline-none" />
        </div>
        <div className="flex gap-4 pt-4">
          <button className="px-6 py-3 bg-[#FF00C8] text-white font-bold rounded-lg hover:bg-[#D600A7]">Save Changes</button>
          <button onClick={handleLogout} className="px-6 py-3 bg-gray-100 text-[#020A1B] font-bold rounded-lg hover:bg-gray-200">Logout</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Sidebar */}
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
              onClick={() => { setActiveTab(item.id); setShowOrderModal(false); }}
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
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left font-medium text-[#75819A] hover:bg-red-50 hover:text-red-500 transition-colors">
            <span>🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <div className="flex-1 lg:ml-64">
        {/* Mobile Header */}
        <header className="lg:hidden bg-white border-b border-gray-100 p-4 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[#FF00C8] to-[#00F5D4] rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-lg">T</span>
            </div>
            <span className="text-xl font-black text-[#020A1B]">TikyTop</span>
          </div>
          <button onClick={handleLogout} className="text-sm text-[#75819A]">Logout</button>
        </header>

        {/* Mobile Nav */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-2 flex justify-around z-30">
          {SIDEBAR.slice(0, 5).map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center p-2 rounded-lg ${
                activeTab === item.id ? 'text-[#FF00C8]' : 'text-[#75819A]'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-xs">{item.label}</span>
            </button>
          ))}
        </div>

        <main className="p-4 lg:p-8 pb-24 lg:pb-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <img src={currentUser.avatar} alt={currentUser.name} className="w-12 h-12 rounded-xl border-2 border-white shadow" />
              <div>
                <h1 className="text-xl font-black text-[#020A1B]">Welcome, {currentUser.name}!</h1>
                <p className="text-sm text-[#75819A]">{currentUser.email}</p>
              </div>
            </div>
            <button
              onClick={() => setActiveTab('neworder')}
              className="px-4 py-2 bg-gradient-to-r from-[#FF00C8] to-[#D600A7] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-pink-500/25 transition-all flex items-center gap-2"
            >
              <span>➕</span>
              <span>New Order</span>
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {activeTab === 'overview' && renderOverview()}
              {activeTab === 'neworder' && renderNewOrder()}
              {activeTab === 'orders' && renderOrders()}
              {activeTab === 'analytics' && renderAnalytics()}
              {activeTab === 'wallet' && (
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h2 className="text-lg font-bold text-[#020A1B] mb-4">Wallet</h2>
                  <div className="text-center py-8">
                    <div className="text-4xl font-black text-[#020A1B] mb-2">$0.00</div>
                    <p className="text-[#75819A] mb-4">Current Balance</p>
                    <button className="px-6 py-3 bg-[#FF00C8] text-white font-bold rounded-xl">Add Funds</button>
                  </div>
                </div>
              )}
              {activeTab === 'settings' && renderSettings()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;