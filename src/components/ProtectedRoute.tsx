import { Navigate, Outlet } from 'react-router-dom';
import Layout from '../common/Layout';

export default function ProtectedRoute() {
  const isAuthenticated = !!sessionStorage.getItem('token');

  return isAuthenticated ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/login" replace />
  );
}
