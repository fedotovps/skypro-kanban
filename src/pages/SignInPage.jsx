import { GlobalStyle, Wrapper } from "../components/Global/Global.styled";
import Signin from "../components/Signin/Signin";

function SignInPage({ login }) {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Signin login={login} />
      </Wrapper>
    </>
  );
}

export default SignInPage;
