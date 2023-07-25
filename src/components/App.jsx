import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import { lazy, useEffect } from 'react';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { refreshUser } from 'redux/auth/authOperations';

// import PetModal from './petModal/PetModal';
// import AddPetPage from 'pages/AddPetPage';
// import ModalApproveAction from 'pages/ModalApproveAction';
// import NewsPage from 'pages/NewsPage';

const MainPage = lazy(() => import('../pages/MainPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage'));
const UserPage = lazy(() => import('../pages/UserPage'));
const OurFriendsPage = lazy(() => import('../pages/OurFriendsPage'));

const App = () => {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/user"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/user" component={<LoginPage />} />
            }
          />
          <Route
            path="/user"
            element={
              <PrivateRoute redirectTo="/login" component={<UserPage />} />
            }
          />
          <Route path="/notices/sell" element={<NoticesPage />} />
          <Route path="/friends" element={<OurFriendsPage />} />
        </Route>
      </Routes>
      // <div>
      //   {/* <AddPetPage /> */}
      //   {/* <ModalApproveAction /> */}
      //   {/* <NewsPage /> */}
      // </div>
    )
  );
};
export default App;
