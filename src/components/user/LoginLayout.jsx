import { Link } from "react-router-dom";

import { Wrapper } from "../styled/User";
import { H1 } from "../styled/Hn";
import Login from "./Login";

const LoginLayout = (props) => {
  return (
    <>
      <Wrapper>
        <H1>Sign in</H1>
        <Link to='/signup'>Go Sign up</Link>
      </Wrapper>
      <Login />
    </>
  );
};

export default LoginLayout;
