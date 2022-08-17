import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
// import axios from "axios";
import RESP from "../../server/response";

import { logout } from "../../modules/redux/user";
import { H2 } from "../styled/Hn";
import Button from "../../elements/Button";

const Header = (props) => {
  const isLogin = useSelector((state) => state.user.isLogin);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onClickHandler = (path) => {
    navigate(path);
  };

  // TODO error!
  const logoutHandler = async () => {
    // const {
    //   data: {
    //     result,
    //     status: { message },
    //   },
    // } = await axios.get(`http://3.34.47.86/user/logout`, {
    //   headers: {
    //     Authorization: localStorage.getItem("AccessToken"),
    //     RefreshToken: localStorage.getItem("RefreshToken"),
    //   },
    // });

    const {
      result,
      status: { message },
    } = RESP.LOGOUT_SUCCESS;

    if (!result) {
      alert(message);
      return;
    }

    dispatch(logout());
    localStorage.removeItem("AccessToken");
    localStorage.removeItem("RefreshToken");
  };

  return (
    <Navigator>
      <Container size='small'>
        <Button
          icon={faHome}
          size={"lg"}
          onClick={() => onClickHandler("/home")}
        />
        <ProjectName>
          <H2>mini-SNS</H2>
        </ProjectName>
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

const ProjectName = styled.div`
  box-sizing: border-box;
  padding-left: 10px;
`;
