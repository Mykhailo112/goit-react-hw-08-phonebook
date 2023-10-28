import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { useIsLoggedIn } from 'hooks/hooks';
import { Loader } from 'components/Loader/Loader';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Text } from './Layout.styled';

export const Layout = () => {
  const isLoggedIn = useIsLoggedIn();

  return (
    <>
      <header>
        <div>
          <div>
            <Text>Phonebook</Text>
          </div>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </header>
      <main>
        <div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};
