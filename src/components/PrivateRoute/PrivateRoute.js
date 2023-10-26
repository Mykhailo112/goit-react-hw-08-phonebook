import { Navigate } from 'react-router';
import { useIsLoggedIn } from 'hooks/hooks';

export const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const isLoggedIn = useIsLoggedIn();

  return isLoggedIn ? children : <Navigate to={redirectTo} replace={true} />;
};
