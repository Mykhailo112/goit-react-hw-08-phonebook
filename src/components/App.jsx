import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GlobalStyle } from './GlobalStyle';
import { Route, Routes } from 'react-router';
import { Layout } from './Layout/Layout';
import { refreshUser } from 'redux/auth/operations';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { routes } from 'routes';
import { useAuth } from 'hooks/hooks';

const HomePage = lazy(() => import('../pages/Home'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const LoginPage = lazy(() => import('../pages/Login'));
const RegisterPage = lazy(() => import('../pages/Register'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <Routes>
          <Route path={routes.HOME} element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path={routes.REGISTER}
              element={
                <PublicRoute
                  redirectTo={routes.CONTACTS}
                  component={RegisterPage}
                />
              }
            />
            <Route
              path={routes.LOGIN}
              element={
                <PublicRoute
                  redirectTo={routes.CONTACTS}
                  component={LoginPage}
                />
              }
            />
            <Route
              path={routes.CONTACTS}
              element={
                <PrivateRoute
                  redirectTo={routes.LOGIN}
                  component={ContactsPage}
                />
              }
            />
          </Route>
        </Routes>
        <GlobalStyle />
      </>
    )
  );
};
