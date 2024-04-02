//import { useState } from "react";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
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
      {isLoading && <span>Данные загружаются</span>}
      {!isLoading && (
        <>
          <GlobalStyle />
          <div className="wrapper">
            {/* pop-up start */}
            <PopExit />
            <PopNewCard />
            <PopBrowse />
            {/* pop-up end */}
            <Header setCards={setCards} cards={cards} />
            <Main cards={cards} />
          </div>
        </>
      )}
      <script src="js/script.js"></script>
    </>
  );
}

export default App;
