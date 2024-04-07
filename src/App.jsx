import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/popups/PopBrowse";
import PopExit from "./components/popups/PopExit";
import PopNewCard from "./components/popups/PopNewCard";
import { cardList } from "./lib/data";
import { GlobalStyle } from "./components/Global/Global.styled";

function App() {
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
      <div className="wrapper">
        {/* pop-up start */}
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        {/* pop-up end */}
        <Header setCards={setCards} cards={cards} />
        {isLoading ? <span>Данные загружаются</span> : <Main cards={cards} />}
      </div>
    </>
  );
}

export default App;
