import styled from "styled-components";

import { H1 } from "../styled/Hn";
import Create from "./Create";

const CreateLayout = (props) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <H1>Create New Post</H1>
      </TitleWrapper>
      <Create />
    </Wrapper>
  );
};

export default CreateLayout;

const Wrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  margin-top: 50px;
  overflow: scroll;
`;

const TitleWrapper = styled.div`
  box-sizing: border-box;
  padding-bottom: 10px;
`;
