import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MainPage from "./pages/MainPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import CardPage from "./pages/CardPage";
import NotFoundPage from "./pages/NotFoundPage";
import { paths } from "./lib/paths";
import ExitPage from "./pages/ExitPage";
import { useEffect, useState } from "react";
import { getTasks } from "./lib/api";

const checkLS = () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    return user
  } catch(error) {
    console.log(error.message);
    localStorage.removeItem("user");
    return null;
  }
}

const AppRoutes = () => {
  const navigete = useNavigate();
  const [isAuth, setIsAuth] = useState(checkLS());
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [addErrorGetTasks, setAddErrorGetTasks] = useState(null);



  
  

  function login(user) {
    localStorage.setItem("user", JSON.stringify(user));
    navigete(paths.MAIN);
    setIsAuth(user);
  }

  function logout() {
    localStorage.removeItem("user")
    navigete(paths.SIGN_IN);
    setIsAuth(null);
    setCards([]);
  }

  
  return (
    <Routes>
      <Route element={<Layout isAuth={isAuth} />}>
        <Route path={paths.MAIN} element={<MainPage isAuth={isAuth} cards={cards} setCards={setCards} isLoading={isLoading} addErrorGetTasks={addErrorGetTasks} setAddErrorGetTasks={setAddErrorGetTasks} setIsLoading={setIsLoading} />}>
          <Route
            path={paths.EXIT}
            element={<ExitPage logout={logout} />}
          />
          <Route path={paths.CARD} element={<CardPage cards={cards} />} />
        </Route>
      </Route>

      <Route
        path={paths.SIGN_IN}
        element={<SignInPage login={login} />}
      />
      <Route
        path={paths.SIGN_UP}
        element={<SignUpPage login={login} />}
      />

      <Route path={paths.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
