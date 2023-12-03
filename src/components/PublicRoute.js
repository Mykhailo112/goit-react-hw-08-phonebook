import { useAuth } from 'hooks/hooks';
import { Navigate } from 'react-router';

export default function PublicRoute({
  component: Component,
  redirectTo = '/',
}) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
}
