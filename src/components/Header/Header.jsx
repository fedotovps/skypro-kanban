import { useState } from "react";

function Header({ setCards, cards }) {
  const [toggle, setToggel] = useState(false);

  const handleToggle = () => {
    setToggel((prevState) => !prevState);
    console.log(toggle);
  };

  function addCard() {
    const newCard = {
      id: cards.length + 1,
      topic: "Research",
      title: "Новая задача",
      date: "24.03.2024",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew">
              <a onClick={addCard}>Создать новую задачу</a>
            </button>
            <a className="header__user _hover02" onClick={handleToggle}>
              Ivan Ivanov
            </a>
            {toggle && (
              <div
                className="header__pop-user-set pop-user-set"
                id="user-set-target"
              >
                {/* <a href="">x</a> */}
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
                </button>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
