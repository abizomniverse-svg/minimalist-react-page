import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LandingPage from '../pages/Landing/LandingPage';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import OrderPage from '../pages/Order/OrderPage';
import Dashboard from '../pages/Dashboard';
import PrivacyPolicy from '../pages/Legal/PrivacyPolicy';
import TermsOfService from '../pages/Legal/TermsOfService';
import AuthGuard from '../components/AuthGuard';
import { getSession } from '../utils/auth';

function AppRoutes() {
  const [isLoading, setIsLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const sessionData = getSession();
    setSession(sessionData);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F9FC]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#FF00C8] border-t-transparent rounded-full animate-spin"></div>
          <span className="text-[#75819A] font-medium">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        <Route path="/login" element={
          session ? <Navigate to="/dashboard" replace /> : <Login />
        } />
        
        <Route path="/register" element={
          session ? <Navigate to="/dashboard" replace /> : <Register />
        } />
        
        <Route path="/order/:serviceType" element={
          <AuthGuard>
            <OrderPage />
          </AuthGuard>
        } />
        
        <Route path="/order" element={
          <AuthGuard>
            <OrderPage />
          </AuthGuard>
        } />
        
        <Route path="/dashboard" element={
          <AuthGuard>
            <Dashboard />
          </AuthGuard>
        } />
        
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;