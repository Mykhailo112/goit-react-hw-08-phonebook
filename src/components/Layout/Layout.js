import { Outlet } from 'react-router';
import { Suspense } from 'react';
import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/hooks';

export const Layout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Suspense fallback={null}>
        <header>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
        <Outlet />
      </Suspense>
    </>
  );
};
