import { GlobalStyle, Wrapper } from "../components/Global/Global.styled";
import Signup from "../components/Signup/Signup";

function SignUpPage({ login }) {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Signup login={login} />
      </Wrapper>
    </>
  );
}

export default SignUpPage;
