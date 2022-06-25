import { Navigate, Outlet } from 'react-router-dom';
import userStore from '../store/userAuthStore';

export default function ProtectedRoute() {
  const user = userStore((state) => state.user);

  if (user.isLogged === false) {
    return <Navigate to="/auth/login" />;
  }
  return (
    <>
      <Outlet />
    </>
  );
}
