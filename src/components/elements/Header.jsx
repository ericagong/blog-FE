import { useNavigate } from "react-router-dom";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { H2 } from "../styled/Hn";
import Button from "./Button";

const Header = (props) => {
  const navigate = useNavigate();

  const onClickHandler = (path) => {
    navigate(path);
  };

  const logoutHandler = () => {
    console.log("logged out!");
  };

  const isLogin = true;

  // TODO 로그인 여부에 따라 분기처리
  return (
    <Navigator>
      <Container size='small'>
        <Button
          icon={faHome}
          size={"lg"}
          onClick={() => onClickHandler("/home")}
        />
        <H2>mini-SNS</H2>
      </Container>
      {!isLogin ? (
        <Container>
          <Button content='login' onClick={() => onClickHandler("/login")} />
          <Button content='signup' onClick={() => onClickHandler("/signup")} />
        </Container>
      ) : null}
      {isLogin ? (
        <Container>
          <Button content='logout' onClick={logoutHandler} />
          <Button
            content='new post'
            onClick={() => onClickHandler("/create")}
          />
          <Button content='my' onClick={() => onClickHandler("/my")} />
        </Container>
      ) : null}
    </Navigator>
  );
};

export default Header;

const Navigator = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  width: ${(props) => (props.size === "small" ? "150px" : "300px")};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) =>
    props.size === "small" ? "flex-start" : "flex-end"};
`;
