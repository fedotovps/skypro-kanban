import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MainPage from "./pages/MainPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import CardPage from "./pages/CardPage";
import NotFoundPage from "./pages/NotFoundPage";
import { paths } from "./lib/paths";
import ExitPage from "./pages/ExitPage";
import { useState } from "react";

const AppRoutes = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Routes>
      <Route element={<Layout isAuth={isAuth} />}>
        <Route path={paths.MAIN} element={<MainPage />}>
          <Route
            path={paths.EXIT}
            element={<ExitPage setIsAuth={setIsAuth} />}
          />
          <Route path={paths.CARD} element={<CardPage />} />
        </Route>
      </Route>

      <Route
        path={paths.SIGN_IN}
        element={<SignInPage setIsAuth={setIsAuth} />}
      />
      <Route
        path={paths.SIGN_UP}
        element={<SignUpPage setIsAuth={setIsAuth} />}
      />

      <Route path={paths.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
