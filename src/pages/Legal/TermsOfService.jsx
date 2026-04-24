import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/layout/Navbar';
import Footer from '../Landing/Footer';

const TermsOfService = () => {
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
              Terms of Service
            </h1>
            <p className="text-lg text-[#75819A]">
              Last updated: April 23, 2026
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-[#020A1B]">
                Acceptance of Terms
              </h2>
              <p className="text-[#64748B] leading-relaxed">
                By accessing or using our website and services, you agree to be bound by these Terms of Service 
                ("Terms") and our Privacy Policy. If you do not agree to these Terms, please do not use our services.
              </p>
            </motion.div>

            {/* Description of Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-[#020A1B]">
                Description of Services
              </h2>
              <p className="text-[#64748B] leading-relaxed">
                TikyTop (#1 Trusted Site to Turn Your TikTok Profile into a Powerful Platform) provides social media 
                growth services including followers, likes, views, comments, and other engagement metrics for platforms 
                such as TikTok, Instagram, and YouTube.
              </p>
            </motion.div>

            {/* User Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-[#020A1B]">
                User Responsibilities
              </h2>
              <p className="text-[#64748B] leading-relaxed">
                As a condition of using our services, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#64748B] leading-relaxed">
                <li>Provide accurate, current, and complete information when registering or using our services</li>
                <li>Not use our services for any illegal or unauthorized purpose</li>
                <li>Not violate any laws in your jurisdiction (including but not limited to copyright laws)</li>
                <li>Not interfere with or disrupt our services or servers</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </motion.div>

            {/* Account Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-[#020A1B]">
                Account Security
              </h2>
              <p className="text-[#64748B] leading-relaxed">
                You are responsible for maintaining the confidentiality of your account and password, if applicable, 
                and for restricting access to your computer. You agree to accept responsibility for all activities 
                that occur under your account.
              </p>
            </motion.div>

            {/* Prohibited Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-[#020A1B]">
                Prohibited Activities
              </h2>
              <p className="text-[#64748B] leading-relaxed">
                You agree not to engage in any of the following prohibited activities:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#64748B] leading-relaxed">
                <li>Using our services to violate any platform's terms of service</li>
                <li>Engaging in fraudulent or deceptive practices</li>
                <li>Posting content that is illegal, harmful, threatening, abusive, harassing, tortious, defamatory, 
                    vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially/ethnically offensive</li>
                <li>Attempting to gain unauthorized access to our systems or those of our partners</li>
                <li>Interfering with or disrupting our services or networks</li>
              </ul>
            </motion.div>

            {/* Intellectual Property */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-[#020A1B]">
                Intellectual Property
              </h2>
              <p className="text-[#64748B] leading-relaxed">
                All content on our website, including text, graphics, logos, images, and software, is the property of 
                TikyTop or its content suppliers and is protected by international copyright laws.
              </p>
            </motion.div>

            {/* Disclaimer of Warranties */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-[#020A1B]">
                Disclaimer of Warranties
              </h2>
              <p className="text-[#64748B] leading-relaxed">
                Our services are provided "as is" and "as available" without warranties of any kind, either express or 
                implied, including but not limited to warranties of title or implied warranties of merchantability or 
                fitness for a particular purpose.
              </p>
            </motion.div>

            {/* Limitation of Liability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-[#020A1B]">
                Limitation of Liability
              </h2>
              <p className="text-[#64748B] leading-relaxed">
                To the maximum extent permitted by law, TikyTop shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred 
                directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
              </p>
            </motion.div>

            {/* Governing Law */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-[#020A1B]">
                Governing Law
              </h2>
              <p className="text-[#64748B] leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of [Your Country/State], 
                without regard to its conflict of law provisions.
              </p>
            </motion.div>

            {/* Changes to Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-[#020A1B]">
                Changes to Terms
              </h2>
              <p className="text-[#64748B] leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will provide at least 30 days' notice before any new terms take effect.
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
                If you have any questions about these Terms of Service, please contact us at:
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

export default TermsOfService;