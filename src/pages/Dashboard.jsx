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
  { id: '#TK-7821', service: 'TikTok Followers', platform: 'tiktok', amount: 1000, delivered: 847, status: 'processing', startTime: Date.now() - 3600000 },
  { id: '#IG-3421', service: 'Instagram Likes', platform: 'instagram', amount: 500, delivered: 500, status: 'completed', startTime: Date.now() - 7200000 },
  { id: '#YT-1203', service: 'YouTube Subscribers', platform: 'youtube', amount: 100, delivered: 45, status: 'processing', startTime: Date.now() - 1800000 }
];

const CHART_DATA = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: {
    followers: [120, 340, 280, 420, 380, 520, 610],
    likes: [850, 1200, 980, 1450, 1100, 1680, 1920],
    views: [5200, 8400, 7200, 9800, 8500, 12400, 15200]
  }
};

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
      status: 'processing',
      startTime: Date.now()
    };
    
    setOrders([newOrder, ...orders]);
    setShowOrderModal(false);
    setOrderForm({ platform: 'tiktok', service: 'followers', url: '', quantity: 100 });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#00F5D4';
      case 'processing': return '#A6FF00';
      case 'pending': return '#FF00C8';
      default: return '#75819A';
    }
  };

  const renderChart = () => {
    const data = CHART_DATA.datasets.followers;
    const max = Math.max(...data);
    
    return (
      <div className="flex items-end gap-2 h-32">
        {data.map((value, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-2">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${(value / max) * 100}%` }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="w-full bg-gradient-to-t from-[#FF00C8] to-[#00F5D4] rounded-t-lg"
            />
            <span className="text-xs text-[#75819A]">{CHART_DATA.labels[i]}</span>
          </div>
        ))}
      </div>
    );
  };

  const renderCircularProgress = (delivered, amount) => {
    const percentage = (delivered / amount) * 100;
    const circumference = 2 * Math.PI * 40;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
    
    return (
      <svg className="w-24 h-24 transform -rotate-90">
        <circle cx="48" cy="48" r="40" stroke="#e5e7eb" strokeWidth="8" fill="none" />
        <circle
          cx="48"
          cy="48"
          r="40"
          stroke={getStatusColor(percentage >= 100 ? 'completed' : 'processing')}
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-500"
        />
        <text x="48" y="48" textAnchor="middle" dy="0.35em" className="text-lg font-bold fill-[#020A1B]">
          {Math.round(percentage)}%
        </text>
      </svg>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Top Bar */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[#FF00C8] to-[#00F5D4] rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-lg">T</span>
            </div>
            <span className="text-xl font-black text-[#020A1B]">TikyTop</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowOrderModal(true)}
              className="px-4 py-2 bg-gradient-to-r from-[#FF00C8] to-[#D600A7] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-pink-500/25 transition-all flex items-center gap-2"
            >
              <span>➕</span>
              <span>New Order</span>
            </button>
            
            <div className="flex items-center gap-3">
              <img src={currentUser.avatar} alt={currentUser.name} className="w-9 h-9 rounded-xl border-2 border-white shadow" />
              <button onClick={handleLogout} className="text-sm text-[#75819A] hover:text-red-500 font-medium">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Order Panel */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-lg font-bold text-[#020A1B]">Quick Order</h2>
                <button onClick={() => setShowOrderModal(true)} className="text-sm text-[#FF00C8] font-bold">Create New</button>
              </div>
              <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                {PLATFORMS.map((platform) => (
                  <button
                    key={platform.id}
                    onClick={() => setOrderForm(prev => ({ ...prev, platform: platform.id }))}
                    className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                      orderForm.platform === platform.id
                        ? 'border-[#FF00C8] bg-[#FF00C8]/5'
                        : 'border-gray-100 hover:border-gray-200'
                    }`}
                  >
                    <span className="text-2xl">{platform.icon}</span>
                    <span className="text-sm font-bold text-[#020A1B]">{platform.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Orders */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="p-4 border-b border-gray-100">
                <h2 className="text-lg font-bold text-[#020A1B]">Live Order Tracking</h2>
              </div>
              <div className="divide-y divide-gray-50">
                {orders.map((order) => (
                  <div key={order.id} className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                           style={{ background: getStatusColor(order.status) }}>
                        {order.platform.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-bold text-[#020A1B]">{order.service}</div>
                        <div className="text-sm text-[#75819A]">{order.id} • {order.amount.toLocaleString()} units</div>
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
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Analytics Chart */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="p-4 border-b border-gray-100">
                <h2 className="text-lg font-bold text-[#020A1B]">Weekly Growth</h2>
              </div>
              <div className="p-4">
                {renderChart()}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Platform Stats */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-[#020A1B] mb-4">Platform Breakdown</h2>
              <div className="space-y-4">
                {PLATFORMS.map((platform) => (
                  <div key={platform.id}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span>{platform.icon}</span>
                        <span className="font-medium text-[#020A1B]">{platform.name}</span>
                      </div>
                      <span className="text-sm font-bold text-[#020A1B]">{Math.floor(Math.random() * 5000) + 1000}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${Math.random() * 60 + 20}%`, background: platform.color }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-[#020A1B] mb-4">Quick Actions</h2>
              <div className="space-y-2">
                {[
                  { icon: '📊', label: 'View Analytics' },
                  { icon: '📦', label: 'Order History' },
                  { icon: '💳', label: 'Add Funds' },
                  { icon: '🎁', label: 'Refer Friends' }
                ].map((action) => (
                  <button key={action.label} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors text-left">
                    <span>{action.icon}</span>
                    <span className="font-medium text-[#020A1B]">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Support */}
            <div className="bg-gradient-to-br from-[#FF00C8]/10 to-[#00F5D4]/10 rounded-2xl p-5">
              <h2 className="text-lg font-bold text-[#020A1B] mb-2">Need Help?</h2>
              <p className="text-sm text-[#75819A] mb-3">Our team is available 24/7 to assist you.</p>
              <button className="w-full py-2 bg-[#FF00C8] text-white font-bold rounded-xl hover:bg-[#D600A7] transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Order Modal */}
      <AnimatePresence>
        {showOrderModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowOrderModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-black text-[#020A1B]">Create New Order</h2>
                  <button onClick={() => setShowOrderModal(false)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">✕</button>
                </div>

                {/* Platform Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-bold text-[#020A1B] mb-3">1. Choose Platform</label>
                  <div className="grid grid-cols-4 gap-2">
                    {PLATFORMS.map((platform) => (
                      <button
                        key={platform.id}
                        onClick={() => setOrderForm(prev => ({ ...prev, platform: platform.id, service: SERVICES[platform.id][0].id }))}
                        className={`p-3 rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${
                          orderForm.platform === platform.id
                            ? 'border-[#FF00C8] bg-[#FF00C8]/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <span className="text-xl">{platform.icon}</span>
                        <span className="text-xs font-bold">{platform.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Service Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-bold text-[#020A1B] mb-3">2. Choose Service</label>
                  <div className="grid grid-cols-2 gap-2">
                    {SERVICES[orderForm.platform].map((service) => (
                      <button
                        key={service.id}
                        onClick={() => setOrderForm(prev => ({ ...prev, service: service.id }))}
                        className={`p-3 rounded-xl border-2 transition-all text-left ${
                          orderForm.service === service.id
                            ? 'border-[#FF00C8] bg-[#FF00C8]/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span>{service.icon}</span>
                          <span className="font-bold text-[#020A1B]">{service.name}</span>
                        </div>
                        <div className="text-xs text-[#75819A]">${service.price}/unit</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* URL Input */}
                <div className="mb-6">
                  <label className="block text-sm font-bold text-[#020A1B] mb-3">3. Enter Profile URL</label>
                  <input
                    type="url"
                    value={orderForm.url}
                    onChange={(e) => setOrderForm(prev => ({ ...prev, url: e.target.value }))}
                    placeholder="https://tiktok.com/@username"
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

                {/* Price Summary */}
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Dashboard;