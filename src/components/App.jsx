import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lazy } from 'react';
import { fecthCurrentUser } from '../redux/auth/authOperation';
import { RestrictedRoute } from '../redux/RestrictedRoute';
import { PrivateRoute } from 'redux/PrivateRoute';
import SharedLayout from '../components/SharedLayout/SharedLayout';
import { isRefreshing } from '../redux/selectors';

const RegisterForm = lazy(() => import('../pages/register/Register'));
const Login = lazy(() => import('../pages/login/Login'));
const Contacts = lazy(() => import('../pages/contacts/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fecthCurrentUser());
  }, [dispatch]);

  const steelRefresing = useSelector(isRefreshing);

  return steelRefresing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          path="/register"
          element={
            <RestrictedRoute component={RegisterForm} redirectTo="/contacts" />
          }
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={Login} redirectTo="/contacts" />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={Contacts} redirectTo="/login" />}
        />
      </Route>
    </Routes>
  );
}
