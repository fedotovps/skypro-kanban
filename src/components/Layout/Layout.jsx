import { Navigate, Outlet } from "react-router-dom";
import { paths } from "../../lib/paths";

function Layout({ isAuth }) {
  return isAuth ? <Outlet /> : <Navigate to={paths.SIGN_IN} />;
}

export default Layout;
