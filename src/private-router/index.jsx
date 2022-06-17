import { Navigate } from 'react-router-dom'
import { Home } from '../components/home';

import { useAuth } from '../hooks/auth'

export const ProtectedRoute = ({ redirectPath = '/', children }) => {
  const { user } = useAuth()
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Home />;
};