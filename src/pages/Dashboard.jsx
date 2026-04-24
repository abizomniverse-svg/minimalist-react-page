import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from './Landing/Footer';

const DASHBOARD_DATA = {
  user: {
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    avatar: "https://i.pravatar.cc/150?u=alex",
    memberSince: "January 2026",
    totalSpent: "$1,247.89",
    totalOrders: 23
  },
  stats: [
    {
      title: "Active Orders",
      value: "7",
      change: "+2 this week",
      icon: "📦",
      color: "#FF00C8"
    },
    {
      title: "Completed Orders",
      value: "16",
      change: "+3 this month",
      icon: "✅",
      color: "#00F5D4"
    },
    {
      title: "Total Spent",
      value: "$1,247",
      change: "+12% growth",
      icon: "💰",
      color: "#A6FF00"
    },
    {
      title: "Avg. Rating",
      value: "4.9/5",
      change: "⭐⭐⭐⭐⭐",
      icon: "⭐",
      color: "#FF6B35"
    }
  ],
  recentOrders: [
    {
      id: "#TK-1234",
      service: "TikTok Likes",
      platform: "TikTok",
      amount: 1000,
      status: "Completed",
      date: "2026-04-24",
      cost: "$89.99",
      progress: 100
    },
    {
      id: "#IG-5678",
      service: "Instagram Followers",
      platform: "Instagram",
      amount: 500,
      status: "Processing",
      date: "2026-04-24",
      cost: "$15.99",
      progress: 65
    },
    {
      id: "#YT-9012",
      service: "YouTube Subscribers",
      platform: "YouTube",
      amount: 100,
      status: "In Progress",
      date: "2026-04-23",
      cost: "$13.90",
      progress: 30
    },
    {
      id: "#FB-3456",
      service: "Facebook Page Likes",
      platform: "Facebook",
      amount: 1000,
      status: "Pending",
      date: "2026-04-23",
      cost: "$27.99",
      progress: 0
    }
  ],
  platforms: [
    { name: "TikTok", orders: 12, spent: "$847.23", color: "#FF00C8" },
    { name: "Instagram", orders: 8, spent: "$356.78", color: "#00F5D4" },
    { name: "YouTube", orders: 2, spent: "$27.80", color: "#A6FF00" },
    { name: "Facebook", orders: 1, spent: "$16.08", color: "#FF6B35" }
  ]
};

const Dashboard = () => {
  const { user, stats, recentOrders, platforms } = DASHBOARD_DATA;
  const [activeTab, setActiveTab] = useState('overview');

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
    <div className="min-h-screen bg-[#F8F9FC]">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-6 mb-6">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-20 h-20 rounded-2xl border-4 border-white shadow-lg"
              />
              <div>
                <h1 className="text-3xl font-black text-[#020A1B]">Welcome back, {user.name.split(' ')[0]}!</h1>
                <p className="text-[#75819A] font-medium">Member since {user.memberSince}</p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{stat.icon}</span>
                    <span className="text-sm font-bold text-[#75819A]">{stat.change}</span>
                  </div>
                  <div className="text-2xl font-black text-[#020A1B]">{stat.value}</div>
                  <div className="text-sm font-semibold text-[#75819A]">{stat.title}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tabs */}
          <div className="flex gap-1 mb-8 bg-white rounded-2xl p-2 shadow-sm border border-gray-100">
            {['overview', 'orders', 'analytics', 'settings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 px-6 rounded-xl font-bold text-sm uppercase tracking-wider transition-all ${
                  activeTab === tab
                    ? 'bg-[#FF00C8] text-white shadow-lg'
                    : 'text-[#75819A] hover:bg-gray-50'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                {/* Recent Orders */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold text-[#020A1B] mb-6">Recent Orders</h2>
                    <div className="space-y-4">
                      {recentOrders.map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold"
                                 style={{ background: getStatusColor(order.status) }}>
                              {order.platform.charAt(0)}
                            </div>
                            <div>
                              <div className="font-bold text-[#020A1B]">{order.service}</div>
                              <div className="text-sm text-[#75819A]">{order.id} • {order.date}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-[#020A1B]">{order.cost}</div>
                            <div className="text-sm text-[#75819A]">{order.amount} units</div>
                            <div className="w-20 bg-gray-200 rounded-full h-2 mt-2">
                              <div
                                className="h-2 rounded-full transition-all duration-500"
                                style={{
                                  width: `${order.progress}%`,
                                  background: getStatusColor(order.status)
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Platform Stats */}
                <div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold text-[#020A1B] mb-6">Platform Usage</h2>
                    <div className="space-y-4">
                      {platforms.map((platform) => (
                        <div key={platform.name} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-8 h-8 rounded-lg"
                              style={{ backgroundColor: platform.color }}
                            ></div>
                            <span className="font-bold text-[#020A1B]">{platform.name}</span>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-[#020A1B]">{platform.orders} orders</div>
                            <div className="text-sm text-[#75819A]">{platform.spent}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'orders' && (
              <motion.div
                key="orders"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <h2 className="text-xl font-bold text-[#020A1B] mb-6">Order History</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 font-bold text-[#020A1B]">Order ID</th>
                        <th className="text-left py-3 font-bold text-[#020A1B]">Service</th>
                        <th className="text-left py-3 font-bold text-[#020A1B]">Amount</th>
                        <th className="text-left py-3 font-bold text-[#020A1B]">Status</th>
                        <th className="text-left py-3 font-bold text-[#020A1B]">Date</th>
                        <th className="text-left py-3 font-bold text-[#020A1B]">Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.concat(recentOrders).map((order, index) => (
                        <tr key={`${order.id}-${index}`} className="border-b border-gray-100">
                          <td className="py-4 font-bold text-[#020A1B]">{order.id}</td>
                          <td className="py-4 text-[#75819A]">{order.service}</td>
                          <td className="py-4 text-[#75819A]">{order.amount}</td>
                          <td className="py-4">
                            <span
                              className="px-3 py-1 rounded-full text-xs font-bold"
                              style={{
                                backgroundColor: `${getStatusColor(order.status)}20`,
                                color: getStatusColor(order.status)
                              }}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td className="py-4 text-[#75819A]">{order.date}</td>
                          <td className="py-4 font-bold text-[#020A1B]">{order.cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {activeTab === 'analytics' && (
              <motion.div
                key="analytics"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-[#020A1B] mb-4">Growth Analytics</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-[#75819A]">TikTok Followers</span>
                        <span className="font-bold text-[#020A1B]">+2,340 (23%)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#75819A]">Instagram Likes</span>
                        <span className="font-bold text-[#020A1B]">+1,850 (18%)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#75819A]">YouTube Views</span>
                        <span className="font-bold text-[#020A1B]">+45,200 (31%)</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-[#020A1B] mb-4">Engagement Metrics</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-[#75819A]">Avg. Engagement Rate</span>
                        <span className="font-bold text-[#00F5D4]">8.7%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#75819A]">Reach Growth</span>
                        <span className="font-bold text-[#A6FF00]">+156%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#75819A]">Conversion Rate</span>
                        <span className="font-bold text-[#FF00C8]">4.2%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'settings' && (
              <motion.div
                key="settings"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <h2 className="text-xl font-bold text-[#020A1B] mb-6">Account Settings</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-[#020A1B] mb-2">Full Name</label>
                      <input
                        type="text"
                        defaultValue={user.name}
                        className="w-full p-3 border border-gray-200 rounded-lg focus:border-[#FF00C8] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#020A1B] mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue={user.email}
                        className="w-full p-3 border border-gray-200 rounded-lg focus:border-[#FF00C8] outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#020A1B] mb-2">Notification Preferences</label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" defaultChecked className="mr-3" />
                        <span className="text-[#75819A]">Order updates</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" defaultChecked className="mr-3" />
                        <span className="text-[#75819A]">Promotional emails</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-3" />
                        <span className="text-[#75819A]">Marketing newsletters</span>
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button className="px-6 py-3 bg-[#FF00C8] text-white font-bold rounded-lg hover:bg-[#D600A7] transition-colors">
                      Save Changes
                    </button>
                    <button className="px-6 py-3 bg-gray-100 text-[#020A1B] font-bold rounded-lg hover:bg-gray-200 transition-colors">
                      Cancel
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;