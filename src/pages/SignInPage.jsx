import { GlobalStyle, Wrapper } from "../components/Global/Global.styled";
import Signin from "../components/Signin/Signin";

function SignInPage({ setIsAuth }) {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Signin setIsAuth={setIsAuth} />
      </Wrapper>
    </>
  );
}

export default SignInPage;
