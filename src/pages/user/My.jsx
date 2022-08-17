import Layout from "../../components/styled/Layout";
import Header from "../../components/common/Header";
import MyLayout from "../../components/user/MyLayout";
import styled from "styled-components";
import { H1 } from "../../components/styled/Hn";

const My = (props) => {
  return (
    <>
      <Wrapper>
        <Header />
        <TitleWrapper>
          <H1>My Page</H1>
        </TitleWrapper>
       <MyLayout/>
      </Wrapper>
    </>
  );
};

export default My;

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
