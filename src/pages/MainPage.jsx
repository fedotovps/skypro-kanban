import { useEffect, useState } from "react";
import "../App.css";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { cardList } from "../lib/data";
import { GlobalStyle, Wrapper } from "../components/Global/Global.styled";
import { Outlet } from "react-router-dom";

function MainPage() {
  const [cards, setCards] = useState(cardList);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header setCards={setCards} cards={cards} />
        {isLoading ? <span>Данные загружаются</span> : <Main cards={cards} />}
      </Wrapper>
      <Outlet />
    </>
  );
}

export default MainPage;
