import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/layout/Navbar';
import Footer from '../Landing/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      
      <section className="min-h-[calc(100vh-64px)] bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#020A1B] mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-[#75819A]">
              Last updated: April 23, 2026
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-[#020A1B]">
                Introduction
              </h2>
              <p className="text-[#64748B] leading-relaxed">
                Thank you for using TikyTop (#1 Trusted Site to Turn Your TikTok Profile into a Powerful Platform). 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                visit our website, use our services, or otherwise interact with us.
              </p>
            </motion.div>

            {/* Information We Collect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-[#020A1B]">
                Information We Collect
              </h2>
              <p className="text-[#64748B] leading-relaxed">
                We may collect various types of information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#64748B] leading-relaxed">
                <li>Personal Information: name, email address, phone number, and social media profile URLs</li>
                <li>Usage Data: information about how you access and use our website and services</li>
                <li>Cookies and Tracking Technologies: data collected through cookies, web beacons, and similar technologies</li>
                <li>Payment Information: collected securely through our payment processors for transaction processing</li>
              </ul>
            </motion.div>

            {/* How We Use Your Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-[#020A1B]">
                How We Use Your Information
              </h2>
              <p className="text-[#64748B] leading-relaxed">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#64748B] leading-relaxed">
                <li>To provide, maintain, and improve our services</li>
                <li>To process transactions and send order confirmations</li>
                <li>To communicate with you about your account, services, and promotional offers</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To monitor and analyze usage trends to improve our website and services</li>
                <li>To prevent fraudulent activities and ensure the security of our platform</li>
                <li>To comply with legal obligations and enforce our terms of service</li>
              </ul>
            </motion.div>

            {/* Sharing Your Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-[#020A1B]">
                Sharing Your Information
              </h2>
              <p className="text-[#64748B] leading-relaxed">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#64748B] leading-relaxed">
                <li>With service providers who help us operate our website and deliver our services</li>
                <li>With payment processors to facilitate secure transactions</li>
                <li>When required by law or to protect our legal rights</li>
                <li>In connection with a business transaction such as a merger or acquisition</li>
                <li>With your consent or at your direction for any other purpose</li>
              </ul>
            </motion.div>

            {/* Data Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-[#020A1B]">
                Data Security
              </h2>
              <p className="text-[#64748B] leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information 
                from accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access. 
                However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </motion.div>

            {/* Your Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-[#020A1B]">
                Your Rights
              </h2>
              <p className="text-[#64748B] leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information, 
                including the right to access, correct, delete, or restrict the use of your information. 
                To exercise these rights, please contact us at support@tikytop.com.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-[#020A1B]">
                Contact Us
              </h2>
              <p className="text-[#64748B] leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-[#020A1B] font-medium">
                support@tikytop.com
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;