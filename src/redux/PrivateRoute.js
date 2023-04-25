import { Navigate } from 'react-router-dom';
import { getIsLoggedIn, isRefreshing } from './selectors';
import { useSelector } from 'react-redux';
export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isSteelRefreshing = useSelector(isRefreshing);
  const shouldRedirect = !isLoggedIn && !isSteelRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
