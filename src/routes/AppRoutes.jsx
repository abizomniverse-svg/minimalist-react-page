import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/Landing/LandingPage';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import OrderPage from '../pages/Order/OrderPage';
import Dashboard from '../pages/Dashboard';
import PrivacyPolicy from '../pages/Legal/PrivacyPolicy';
import TermsOfService from '../pages/Legal/TermsOfService';
import AuthGuard from '../components/AuthGuard';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/order/:serviceType"
          element={
            <AuthGuard>
              <OrderPage />
            </AuthGuard>
          }
        />
        <Route
          path="/order"
          element={
            <AuthGuard>
              <OrderPage />
            </AuthGuard>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AuthGuard>
              <Dashboard />
            </AuthGuard>
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
