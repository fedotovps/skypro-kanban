import { Link, useNavigate } from "react-router-dom";
import * as S from "./Signin.styled";
import { paths } from "../../lib/paths";

function Signin({ setIsAuth }) {
  const navigete = useNavigate();
  function login() {
    setIsAuth(true);
    navigete(paths.MAIN);
  }
  return (
    <S.ContainerSignin>
      <S.Modal>
        <S.ModalBlock>
          <S.ModalTtl>
            <h2>Вход</h2>
          </S.ModalTtl>
          <S.ModalFormLogin id="formLogIn" action="#">
            <S.ModalInput
              type="text"
              name="login"
              id="formlogin"
              placeholder="Эл. почта"
            />
            <S.ModalInput
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
            />
            <S.ModalBtnEnter id="btnEnter" onClick={login}>
              Войти
            </S.ModalBtnEnter>
            <S.ModalFormGroup>
              <p>Нужно зарегистрироваться?</p>
              <Link to={paths.SIGN_UP}>Регистрируйтесь здесь</Link>
            </S.ModalFormGroup>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.Modal>
    </S.ContainerSignin>
  );
}

export default Signin;
