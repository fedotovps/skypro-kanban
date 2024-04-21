import { Navigate, Outlet } from "react-router-dom";
import { paths } from "../../lib/paths";
import { useUserContext } from "../../contexts/UserContext";

function Layout() {
  const {isAuth} = useUserContext();
  return isAuth ? <Outlet /> : <Navigate to={paths.SIGN_IN} />;
}

export default Layout;
