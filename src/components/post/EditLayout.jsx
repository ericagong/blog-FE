import styled from "styled-components";

import { H1 } from "../styled/Hn";
import Edit from "./Edit";

const EditLayout = (props) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <H1>Edit Post</H1>
      </TitleWrapper>
      <Edit />
    </Wrapper>
  );
};

export default EditLayout;

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
