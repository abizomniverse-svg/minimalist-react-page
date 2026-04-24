import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import { getSession, clearSession } from '../utils/auth';

const DASHBOARD_DATA = {
  user: {
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    avatar: "https://i.pravatar.cc/150?u=alex",
    memberSince: "January 2026"
  },
  stats: [
    { title: "Active Orders", value: "7", change: "+2 this week", icon: "📦", color: "#FF00C8" },
    { title: "Completed", value: "16", change: "+3 this month", icon: "✅", color: "#00F5D4" },
    { title: "Total Spent", value: "$1,247", change: "+12% growth", icon: "💰", color: "#A6FF00" },
    { title: "Rating", value: "4.9/5", change: "Top 5%", icon: "⭐", color: "#FF6B35" }
  ],
  quickActions: [
    { id: 'tiktok-followers', label: 'TikTok Followers', icon: '🎵', color: '#FF00C8', price: '$5.60' },
    { id: 'instagram-likes', label: 'IG Likes', icon: '📸', color: '#00F5D4', price: '$2.99' },
    { id: 'youtube-subscribers', label: 'YT Subs', icon: '▶️', color: '#A6FF00', price: '$13.90' },
    { id: 'facebook-likes', label: 'FB Likes', icon: '📘', color: '#FF6B35', price: '$2.80' }
  ],
  recentOrders: [
    { id: "#TK-1234", service: "TikTok Likes", platform: "TikTok", amount: 1000, status: "Completed", date: "2026-04-24", cost: "$89.99", progress: 100 },
    { id: "#IG-5678", service: "Instagram Followers", platform: "Instagram", amount: 500, status: "Processing", date: "2026-04-24", cost: "$15.99", progress: 65 },
    { id: "#YT-9012", service: "YouTube Subscribers", platform: "YouTube", amount: 100, status: "In Progress", date: "2026-04-23", cost: "$13.90", progress: 30 },
    { id: "#FB-3456", service: "Facebook Page Likes", platform: "Facebook", amount: 1000, status: "Pending", date: "2026-04-23", cost: "$27.99", progress: 0 }
  ],
  platforms: [
    { name: "TikTok", orders: 12, spent: "$847", followers: "+12.4K", color: "#FF00C8" },
    { name: "Instagram", orders: 8, spent: "$357", followers: "+8.2K", color: "#00F5D4" },
    { name: "YouTube", orders: 2, spent: "$28", followers: "+1.1K", color: "#A6FF00" },
    { name: "Facebook", orders: 1, spent: "$16", followers: "+2.3K", color: "#FF6B35" }
  ],
  notifications: [
    { id: 1, type: 'success', message: 'Order #TK-1234 completed! +1,000 likes.', time: '2 min ago' },
    { id: 2, type: 'info', message: '+234 new followers in the last hour.', time: '1 hour ago' },
    { id: 3, type: 'promo', message: 'Flash sale: 25% bonus on all packages!', time: '3 hours ago' }
  ]
};

const Dashboard = () => {
  const { user: defaultUser, stats, recentOrders, platforms, quickActions, notifications } = DASHBOARD_DATA;
  const [activeTab, setActiveTab] = useState('overview');
  const [currentUser, setCurrentUser] = useState(defaultUser);
  const navigate = useNavigate();

  useEffect(() => {
    const sessionData = getSession();
    if (sessionData) {
      setCurrentUser({
        ...defaultUser,
        name: sessionData.username || 'Demo User',
        email: sessionData.email || 'demo@tikytop.com'
      });
    }
  }, []);

  const handleLogout = () => {
    clearSession();
    navigate('/login');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return '#00F5D4';
      case 'Processing': return '#A6FF00';
      case 'In Progress': return '#FF6B35';
      case 'Pending': return '#FF00C8';
      default: return '#75819A';
    }
  };

  return (
    <div className="min-h-screen flex bg-[#F8F9FC]">
      <aside className="hidden lg:flex w-64 flex-col fixed inset-y-0 bg-white border-r border-gray-100 z-30">
        <div className="flex items-center gap-3 px-6 py-6 border-b border-gray-100">
          <div className="w-10 h-10 bg-gradient-to-r from-[#FF00C8] to-[#00F5D4] rounded-xl flex items-center justify-center">
            <span className="text-white font-black text-lg">T</span>
          </div>
          <span className="text-[#020A1B] font-extrabold text-lg">TikyTop</span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1">
          {[
            { id: 'overview', icon: '📊', label: 'Overview' },
            { id: 'orders', icon: '📦', label: 'Orders' },
            { id: 'analytics', icon: '📈', label: 'Analytics' },
            { id: 'wallet', icon: '💳', label: 'Wallet' },
            { id: 'settings', icon: '⚙️', label: 'Settings' }
          ].map((item) => (
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
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left font-medium text-[#75819A] hover:bg-red-50 hover:text-red-500 transition-colors">
            <span>🚪</span>
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      <div className="flex-1 lg:ml-64">
        <Navbar />

        <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-6">
                <img src={currentUser.avatar} alt={currentUser.name} className="w-16 h-16 rounded-2xl border-4 border-white shadow-lg" />
                <div>
                  <h1 className="text-2xl font-black text-[#020A1B]">Welcome back, {currentUser.name.split(' ')[0]}!</h1>
                  <p className="text-[#75819A] text-sm">{currentUser.email}</p>
                </div>
              </div>
              <Link to="/" className="px-4 py-2 bg-[#FF00C8] text-white font-bold rounded-xl hover:bg-[#D600A7] transition-colors">
                + New Order
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div key={stat.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl">{stat.icon}</span>
                    <span className="text-xs font-bold text-[#75819A]">{stat.change}</span>
                  </div>
                  <div className="text-xl font-black text-[#020A1B]">{stat.value}</div>
                  <div className="text-xs font-semibold text-[#75819A]">{stat.title}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div key="overview" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {quickActions.map((action) => (
                    <Link key={action.id} to={`/order/${action.id}`} className="flex flex-col items-center p-4 rounded-xl border border-gray-100 bg-white hover:border-[#FF00C8]/30 hover:shadow-md transition-all group">
                      <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">{action.icon}</span>
                      <span className="text-sm font-bold text-[#020A1B]">{action.label}</span>
                      <span className="text-xs text-[#FF00C8] font-bold mt-1">{action.price}</span>
                    </Link>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h2 className="text-lg font-bold text-[#020A1B] mb-4">Recent Orders</h2>
                    <div className="space-y-3">
                      {recentOrders.map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold" style={{ background: getStatusColor(order.status) }}>
                              {order.platform.charAt(0)}
                            </div>
                            <div>
                              <div className="font-bold text-[#020A1B] text-sm">{order.service}</div>
                              <div className="text-xs text-[#75819A]">{order.id} • {order.date}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-[#020A1B]">{order.cost}</div>
                            <div className="w-16 bg-gray-200 rounded-full h-1.5 mt-1">
                              <div className="h-1.5 rounded-full" style={{ width: `${order.progress}%`, background: getStatusColor(order.status) }}></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                      <h2 className="text-lg font-bold text-[#020A1B] mb-4">Notifications</h2>
                      <div className="space-y-2">
                        {notifications.map((n) => (
                          <div key={n.id} className="flex items-start gap-2 p-3 bg-gray-50 rounded-xl">
                            <span className="text-sm">{n.type === 'success' ? '✅' : n.type === 'promo' ? '🎁' : 'ℹ️'}</span>
                            <p className="text-xs text-[#020A1B] flex-1">{n.message}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                      <h2 className="text-lg font-bold text-[#020A1B] mb-4">Platform Growth</h2>
                      <div className="space-y-3">
                        {platforms.map((p) => (
                          <div key={p.name} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-lg" style={{ backgroundColor: p.color }}></div>
                              <span className="font-bold text-[#020A1B] text-sm">{p.name}</span>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-[#020A1B] text-sm">{p.followers}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'orders' && (
              <motion.div key="orders" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-[#020A1B] mb-4">Order History</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 font-bold text-[#020A1B]">Order</th>
                        <th className="text-left py-2 font-bold text-[#020A1B]">Service</th>
                        <th className="text-left py-2 font-bold text-[#020A1B]">Amount</th>
                        <th className="text-left py-2 font-bold text-[#020A1B]">Status</th>
                        <th className="text-left py-2 font-bold text-[#020A1B]">Date</th>
                        <th className="text-left py-2 font-bold text-[#020A1B]">Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.concat(recentOrders).map((o, i) => (
                        <tr key={`${o.id}-${i}`} className="border-b border-gray-100">
                          <td className="py-3 font-bold text-[#020A1B]">{o.id}</td>
                          <td className="py-3 text-[#75819A]">{o.service}</td>
                          <td className="py-3 text-[#75819A]">{o.amount}</td>
                          <td className="py-3"><span className="px-2 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: `${getStatusColor(o.status)}20`, color: getStatusColor(o.status) }}>{o.status}</span></td>
                          <td className="py-3 text-[#75819A]">{o.date}</td>
                          <td className="py-3 font-bold text-[#020A1B]">{o.cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {activeTab === 'analytics' && (
              <motion.div key="analytics" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-[#020A1B] mb-4">Growth Analytics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between"><span className="text-[#75819A]">TikTok Followers</span><span className="font-bold text-[#020A1B]">+2,340 (23%)</span></div>
                    <div className="flex justify-between"><span className="text-[#75819A]">Instagram Likes</span><span className="font-bold text-[#020A1B]">+1,850 (18%)</span></div>
                    <div className="flex justify-between"><span className="text-[#75819A]">YouTube Views</span><span className="font-bold text-[#020A1B]">+45,200 (31%)</span></div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-[#020A1B] mb-4">Engagement</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between"><span className="text-[#75819A]">Engagement Rate</span><span className="font-bold text-[#00F5D4]">8.7%</span></div>
                    <div className="flex justify-between"><span className="text-[#75819A]">Reach Growth</span><span className="font-bold text-[#A6FF00]">+156%</span></div>
                    <div className="flex justify-between"><span className="text-[#75819A]">Conversion</span><span className="font-bold text-[#FF00C8]">4.2%</span></div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'settings' && (
              <motion.div key="settings" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-[#020A1B] mb-4">Account Settings</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div><label className="block text-sm font-bold text-[#020A1B] mb-2">Full Name</label><input type="text" defaultValue={currentUser.name} className="w-full p-3 border border-gray-200 rounded-lg focus:border-[#FF00C8] outline-none" /></div>
                    <div><label className="block text-sm font-bold text-[#020A1B] mb-2">Email</label><input type="email" defaultValue={currentUser.email} className="w-full p-3 border border-gray-200 rounded-lg focus:border-[#FF00C8] outline-none" /></div>
                  </div>
                  <div className="flex gap-4">
                    <button className="px-6 py-3 bg-[#FF00C8] text-white font-bold rounded-lg hover:bg-[#D600A7] transition-colors">Save Changes</button>
                    <button onClick={handleLogout} className="px-6 py-3 bg-gray-100 text-[#020A1B] font-bold rounded-lg hover:bg-gray-200 transition-colors">Log Out</button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;