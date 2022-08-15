import styled from "styled-components";

import { H1 } from "../styled/Hn";
import Create from "./Create";

const CreateLayout = (props) => {
  return (
    <Wrapper>
      <H1>Create New Post</H1>
      <Create />
    </Wrapper>
  );
};

export default CreateLayout;

const Wrapper = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding-top: 50px;
`;
