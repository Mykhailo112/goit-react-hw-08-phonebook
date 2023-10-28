import { Routes, Route } from 'react-router';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { useFetchingCurrentUser } from 'hooks/hooks';
import { userRefresh } from 'redux/auth/operations';
import { MainDiv } from './App.styled';

import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
const Home = lazy(() => import('pages/Home/Home'));
const Registration = lazy(() => import('pages/Registration/Registration'));
const Login = lazy(() => import('pages/Login/Login'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useFetchingCurrentUser();

  useEffect(() => {
    dispatch(userRefresh());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <MainDiv>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute>
                  <Home />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute redirectTo="/login" restricted>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute redirectTo="/register" restricted>
                  <Registration />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute redirectTo="/contacts" restricted>
                  <Contacts />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </MainDiv>
    )
  );
};
