import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../../components/layout/Navbar';
import Footer from '../Landing/Footer';
import OrderProgress from './components/OrderProgress';
import StepSelectPackage from './components/StepSelectPackage';
import StepFindAccount from './components/StepFindAccount';
import StepSelectPosts from './components/StepSelectPosts';
import StepCheckout from './components/StepCheckout';
import StepSuccess from './components/StepSuccess';
import { getServiceData } from './data/servicesData';

const TrustBadges = () => (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-4">
        {[
            { icon: '🔒', label: 'SSL Secured' },
            { icon: '⚡', label: 'Instant Delivery' },
            { icon: '🛡️', label: 'Money-Back Guarantee' },
            { icon: '🌟', label: '4.8 Trustscore' },
        ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-1.5 text-slate-500">
                <span className="text-sm">{badge.icon}</span>
                <span className="text-[11px] font-bold uppercase tracking-wider">{badge.label}</span>
            </div>
        ))}
    </div>
);

const OrderPage = () => {
    const { serviceType } = useParams();
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const serviceDetails = getServiceData(serviceType);

    const baseSteps = [
        { id: 'package', label: 'Package', icon: '📦' },
        { id: 'account', label: 'Account', icon: '👤' },
        ...(serviceDetails.requiresPosts ? [{ id: 'posts', label: 'Posts', icon: '📱' }] : []),
        { id: 'checkout', label: 'Checkout', icon: '💳' },
        { id: 'done', label: 'Done', icon: '🎉' }
    ];

    const [orderData, setOrderData] = useState({
        serviceType,
        serviceDetails,
        amount: 0,
        total: 0,
        profileId: '',
        selectedPosts: [],
        billing: null,
        paymentMethod: ''
    });

    useEffect(() => {
        const freshData = getServiceData(serviceType);
        setCurrentStepIndex(0);
        setOrderData({
            serviceType,
            serviceDetails: freshData,
            amount: 0,
            total: 0,
            profileId: '',
            selectedPosts: [],
            billing: null,
            paymentMethod: ''
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [serviceType]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentStepIndex]);

    const handleNext = (newData) => {
        setOrderData(prev => ({ ...prev, ...newData }));
        setCurrentStepIndex(prev => prev + 1);
    };

    const handleBack = () => {
        if (currentStepIndex > 0) setCurrentStepIndex(prev => prev - 1);
    };

    const currentStepId = baseSteps[currentStepIndex]?.id;
    const isDone = currentStepId === 'done';

    const renderStep = () => {
        switch (currentStepId) {
            case 'package':
                return <StepSelectPackage serviceData={serviceDetails} onNext={handleNext} initialData={orderData} />;
            case 'account':
                return <StepFindAccount onNext={handleNext} onBack={handleBack} initialData={orderData} />;
            case 'posts':
                return <StepSelectPosts onNext={handleNext} onBack={handleBack} initialData={orderData} />;
            case 'checkout':
                return <StepCheckout onNext={handleNext} onBack={handleBack} initialData={orderData} />;
            case 'done':
                return <StepSuccess orderData={orderData} />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-[#F8F9FC] flex flex-col">
            <Navbar />

            {/* Subtle gradient header strip */}
            <div
                className="w-full h-1"
                style={{ background: serviceDetails.gradient }}
            />

            <main className="flex-grow w-full pt-24 pb-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Trust badges strip */}
                    {!isDone && (
                        <div className="border-b border-slate-200/70 mb-6">
                            <TrustBadges />
                        </div>
                    )}

                    {/* Progress bar */}
                    {!isDone && (
                        <div className="mb-8">
                            <OrderProgress
                                steps={baseSteps}
                                currentIndex={currentStepIndex}
                                color={serviceDetails.color}
                                gradient={serviceDetails.gradient}
                            />
                        </div>
                    )}

                    {/* Step content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStepId}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                            {renderStep()}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default OrderPage;
