import { Link } from "react-router-dom";

import { Wrapper } from "../styled/User";
import { H1 } from "../styled/Hn";
import Signup from "./Signup";

const SignupLayout = (props) => {
  return (
    <>
      <Wrapper>
        <H1>Sign up</H1>
        <Link to='/login'>Go Login</Link>
      </Wrapper>
      <Signup />
    </>
  );
};

export default SignupLayout;
