import { useState } from "react";
import * as S from "./Header.styled.js";
import { Container } from "../../style/common.style.js";
import { Link } from "react-router-dom";

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
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <Link to="/">
              <img src="images/logo.png" alt="SKYPRO" />
            </Link>
          </S.HeaderLogo>
          {/*<S.HeaderLogo>
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="SKYPRO" />
            </a>
          </S.HeaderLogo>*/}
          <S.HeaderNav>
            {/*<Button $testprops $size="medium">
                Click
              </Button>
              <DangerButton>Хелп</DangerButton>*/}
            <S.HeaderBtn onClick={addCard} id="btnMainNew">
              <a>Создать новую задачу</a>
            </S.HeaderBtn>
            <S.HeaderUser onClick={handleToggle}>Ivan Ivanov</S.HeaderUser>
            {toggle && (
              <S.HeaderPopUserSet id="user-set-target">
                {/* <a href="">x</a> */}
                <S.HeaderPopUserSetName>Ivan Ivanov</S.HeaderPopUserSetName>
                <S.HeaderPopUserSetMail>
                  ivan.ivanov@gmail.com
                </S.HeaderPopUserSetMail>
                <S.HeaderPopUserSetTheme>
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </S.HeaderPopUserSetTheme>
                <S.HeaderBtnExit>
                  <Link to="/exit">Выйти</Link>
                </S.HeaderBtnExit>
              </S.HeaderPopUserSet>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
}

export default Header;
