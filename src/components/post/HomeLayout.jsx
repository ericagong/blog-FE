import styled from "styled-components";

import { H1 } from "../styled/Hn";
import Posts from "./Posts";

// TODO delete H1?
const HomeLayout = (props) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <H1>Home</H1>
      </TitleWrapper>
      <Posts />
    </Wrapper>
  );
};

export default HomeLayout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  box-sizing: border-box;
  overflow: scroll;
`;

const TitleWrapper = styled.div`
  box-sizing: border-box;
  padding-bottom: 30px;
`;
