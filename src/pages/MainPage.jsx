import "../App.css";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { GlobalStyle, Wrapper } from "../components/Global/Global.styled";
import { Outlet } from "react-router-dom";

function MainPage({isLoading, addErrorGetTasks, cards, setCards, user}) {

    return (    
      <>
        <GlobalStyle />
        <Wrapper>
          <Header setCards={setCards} cards={cards} user={user} />
          {isLoading ? <span>Данные загружаются</span> : <Main cards={cards} />}
          {addErrorGetTasks ? <span style={{color: "red"}}>Не удалось загрузить данные, попробуйте позже</span> : null}
        </Wrapper>
        <Outlet />
      </>
    );
  
}

export default MainPage;
