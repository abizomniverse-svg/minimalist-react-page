import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ANALYTICS_DATA = {
  title: "Performance Analytics",
  subtitle: "Track your growth and measure the impact of your social media investments",
  metrics: [
    {
      title: "Total Orders",
      value: "1,247",
      change: "+12.5%",
      icon: "📦",
      color: "#FF00C8"
    },
    {
      title: "Active Campaigns",
      value: "89",
      change: "+8.3%",
      icon: "🚀",
      color: "#00F5D4"
    },
    {
      title: "Revenue Growth",
      value: "$24.7K",
      change: "+18.2%",
      icon: "💰",
      color: "#A6FF00"
    },
    {
      title: "Customer Satisfaction",
      value: "4.9/5",
      change: "+0.1",
      icon: "⭐",
      color: "#FF6B35"
    }
  ],
  platforms: [
    {
      name: "TikTok",
      orders: 423,
      growth: "+23.4%",
      revenue: "$8,942",
      color: "#FF00C8",
      gradient: "linear-gradient(45deg, #00F5D4, #FF00C8)"
    },
    {
      name: "Instagram",
      orders: 389,
      growth: "+15.7%",
      revenue: "$7,621",
      color: "#00F5D4",
      gradient: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)"
    },
    {
      name: "YouTube",
      orders: 297,
      growth: "+31.2%",
      revenue: "$6,183",
      color: "#A6FF00",
      gradient: "linear-gradient(45deg, #FF0000, #A6FF00)"
    },
    {
      name: "Facebook",
      orders: 138,
      growth: "+9.5%",
      revenue: "$1,954",
      color: "#FF6B35",
      gradient: "linear-gradient(45deg, #4267B2, #FF6B35)"
    }
  ],
  recentOrders: [
    {
      id: "#TK-1234",
      service: "TikTok Likes",
      amount: 1000,
      status: "Completed",
      date: "2026-04-24",
      revenue: "$89.99"
    },
    {
      id: "#IG-5678",
      service: "Instagram Followers",
      amount: 500,
      status: "Processing",
      date: "2026-04-24",
      revenue: "$15.99"
    },
    {
      id: "#YT-9012",
      service: "YouTube Subscribers",
      amount: 100,
      status: "Completed",
      date: "2026-04-23",
      revenue: "$13.90"
    },
    {
      id: "#FB-3456",
      service: "Facebook Page Likes",
      amount: 1000,
      status: "Completed",
      date: "2026-04-23",
      revenue: "$27.99"
    }
  ]
};

const AnalyticsSection = () => {
  const { title, subtitle, metrics, platforms, recentOrders } = ANALYTICS_DATA;

  return (
    <section className="py-24 md:py-32 px-5 relative overflow-hidden"
             style={{
               background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,0,200,0.1) 50%, rgba(2,10,27,0.02) 100%)'
             }}>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-[#FF00C8]/8 to-[#00F5D4]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-[#00F5D4]/6 to-[#A6FF00]/6 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-[#020A1B] mb-6 tracking-tight">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-[#75819A] max-w-3xl mx-auto font-medium">
            {subtitle}
          </p>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-lg rounded-[2rem] p-6 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{metric.icon}</span>
                <span className={`text-sm font-bold px-2 py-1 rounded-full ${
                  metric.change.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {metric.change}
                </span>
              </div>
              <div className="text-3xl font-black text-[#020A1B] mb-2">{metric.value}</div>
              <div className="text-[#75819A] font-semibold">{metric.title}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Platform Performance */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-lg rounded-[2rem] p-8 border border-white/50 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-[#020A1B] mb-6">Platform Performance</h3>
              <div className="space-y-4">
                {platforms.map((platform, index) => (
                  <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-white/50 to-white/30 rounded-xl border border-white/30"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold"
                           style={{ background: platform.gradient }}>
                        {platform.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-[#020A1B]">{platform.name}</div>
                        <div className="text-sm text-[#75819A]">{platform.orders} orders</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-[#020A1B]">{platform.revenue}</div>
                      <div className={`text-sm font-semibold ${platform.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {platform.growth}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Recent Orders */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/80 backdrop-blur-lg rounded-[2rem] p-8 border border-white/50 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-[#020A1B] mb-6">Recent Orders</h3>
              <div className="space-y-4">
                {recentOrders.map((order, index) => (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="p-4 bg-gradient-to-r from-white/30 to-white/20 rounded-xl border border-white/20"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-[#020A1B] text-sm">{order.id}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        order.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="text-sm text-[#75819A] mb-1">{order.service} × {order.amount}</div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#75819A]">{order.date}</span>
                      <span className="font-bold text-[#FF00C8]">{order.revenue}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Link
                to="/orders"
                className="w-full mt-6 py-3 bg-gradient-to-r from-[#FF00C8] to-[#D600A7] text-white font-bold text-center rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                View All Orders
              </Link>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-[#FF00C8]/10 to-[#00F5D4]/10 backdrop-blur-lg rounded-[2rem] p-12 max-w-4xl mx-auto border border-white/50 shadow-2xl">
            <h3 className="text-3xl font-black text-[#020A1B] mb-4">
              Ready to Scale Your Growth?
            </h3>
            <p className="text-lg text-[#75819A] mb-8 font-medium">
              Join thousands of creators who've transformed their social media presence with our premium analytics and optimization tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="px-8 py-4 bg-gradient-to-r from-[#FF00C8] to-[#D600A7] text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                Access Dashboard
              </Link>
              <button className="px-8 py-4 bg-white/90 backdrop-blur-sm text-[#020A1B] font-bold text-lg rounded-xl border-2 border-[#FF00C8]/30 hover:border-[#00F5D4] shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                Download Report
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnalyticsSection;