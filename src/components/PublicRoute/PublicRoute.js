import { Navigate } from 'react-router';
import { useIsLoggedIn } from 'hooks/hooks';

export const PublicRoute = ({
  children,
  redirectTo = '/',
  restricted = false,
}) => {
  const isLoggedIn = useIsLoggedIn();
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? (
    <Navigate to={redirectTo} replace={true} />
  ) : (
    children
  );
};
