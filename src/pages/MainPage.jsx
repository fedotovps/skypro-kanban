import "../App.css";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { GlobalStyle, Wrapper } from "../components/Global/Global.styled";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { getTasks } from "../lib/api";
import { useUserContext } from "../contexts/UserContext";

function MainPage({isLoading, setIsLoading, addErrorGetTasks, setAddErrorGetTasks, cards, setCards}) {

  const {isAuth} = useUserContext();

  useEffect(() => {
    getTasks(isAuth.token).then((responce) => {
      setCards(responce.tasks);
      console.log(cards);
    })
    .catch((error) => {
      setAddErrorGetTasks(error.message);
    }).finally(() => {
      setIsLoading(false);
    })
}, []);

    return (    
      <>
        <GlobalStyle />
        <Wrapper>
          <Header setCards={setCards} cards={cards} />
          {isLoading ? <span>Данные загружаются</span> : <Main cards={cards} />}
          {addErrorGetTasks ? <span style={{color: "red"}}>Не удалось загрузить данные, попробуйте позже</span> : null}
        </Wrapper>
        <Outlet />
      </>
    );
  
}

export default MainPage;
