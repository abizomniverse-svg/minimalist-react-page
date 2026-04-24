import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';

/**
 * Client-side guard for authenticated routes.
 * Redirects unauthenticated users to /login while preserving the intended path.
 *
 * NOTE: This is a UX-level guard for the demo only. Any real protected data
 * MUST be enforced server-side (e.g. via Supabase Auth + RLS).
 */
export default function AuthGuard({ children }) {
  const location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return children;
}
