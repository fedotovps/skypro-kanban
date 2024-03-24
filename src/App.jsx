//import { useState } from "react";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/popups/PopBrowse";
import PopExit from "./components/popups/PopExit";
import PopNewCard from "./components/popups/PopNewCard";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className="wrapper">
        {/* pop-up start */}
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        {/* pop-up end */}
        <Header />
        <Main />
      </div>
      <script src="js/script.js"></script>
    </>
  );
}

export default App;
