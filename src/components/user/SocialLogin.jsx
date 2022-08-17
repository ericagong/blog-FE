import styled from "styled-components";

import { H1 } from "../styled/Hn";
import Button from "../../elements/Button";

const SocialLogin = (props) => {
  const onClickHandler = () => {
    window.location.href =
      "https://kauth.kakao.com/oauth/authorize?client_id=2b986d1b574416a7d6d064619545aaff&redirect_uri=http://localhost:8080/user/kakao/callback&response_type=code";
  };

  return (
    <Wrapper>
      <HelperWrapper>
        <H1>Sign in with...</H1>
      </HelperWrapper>
      <ButtonWrapper>
        <Button content='Kakao' onClick={onClickHandler} size='lg' />
      </ButtonWrapper>
      <ButtonWrapper>
        <Button content='Google' onClick={onClickHandler} size='lg' />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default SocialLogin;

const Wrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 10%;
`;

const HelperWrapper = styled.div`
  margin: 50px 0px 10px 0px;
`;

const ButtonWrapper = styled.div`
  margin: 10px 0px;
`;
