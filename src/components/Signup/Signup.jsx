import { Link, useNavigate } from "react-router-dom";
import * as S from "./Signup.styled";
import { paths } from "../../lib/paths";

function Signup({ setIsAuth }) {
  const navigate = useNavigate();
  function login() {
    setIsAuth(true);
    navigate(paths.MAIN);
  }
  return (
    <S.ContainerSignup>
      <S.Modal>
        <S.ModalBlock>
          <S.ModalTtl>
            <h2>Регистрация</h2>
          </S.ModalTtl>
          <S.ModalFormLogin id="formLogUp" action="#">
            <S.ModalInput
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Имя"
            ></S.ModalInput>
            <S.ModalInput
              type="text"
              name="login"
              id="loginReg"
              placeholder="Эл. почта"
            ></S.ModalInput>
            <S.ModalInput
              type="password"
              name="password"
              id="passwordFirst"
              placeholder="Пароль"
            ></S.ModalInput>
            <S.ModalBtnSignupEnt id="SignUpEnter" onClick={login}>
              Зарегистрироваться
            </S.ModalBtnSignupEnt>
            <S.ModalFormGroup>
              <p>
                Уже есть аккаунт?
                <Link to={paths.SIGN_IN}>Войдите здесь</Link>
              </p>
            </S.ModalFormGroup>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.Modal>
    </S.ContainerSignup>
  );
}

export default Signup;
