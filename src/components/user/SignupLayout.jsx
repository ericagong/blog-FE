import { Link } from "react-router-dom";

import styled from "styled-components";

import Signup from "./Signup";
import { H1 } from "../styled/Hn";

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

const Wrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 50px 0px;
`;
