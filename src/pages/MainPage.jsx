import "../App.css";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { GlobalStyle, Wrapper } from "../components/Global/Global.styled";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTasks } from "../lib/api";
import { useUserContext } from "../contexts/hooks/useUser";

function MainPage() {

  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [addErrorGetTasks, setAddErrorGetTasks] = useState(null);

  const {user} = useUserContext();

  useEffect(() => {
    getTasks(user.token).then((responce) => {
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
