import { GlobalStyle, Wrapper } from "../components/Global/Global.styled";
import Signup from "../components/Signup/Signup";

function SignUpPage({ setIsAuth }) {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Signup setIsAuth={setIsAuth} />
      </Wrapper>
    </>
  );
}

export default SignUpPage;
