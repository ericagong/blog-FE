import styled from "styled-components";

const Layout = (props) => {
  return <L>{props.children}</L>;
};

const L = styled.div`
  width: 90vw;
  max-width: 1200px;
  min-width: 450px;
  height: 100vh;
  position: relative;
  margin: auto;
  box-sizing: border-box;
  padding: 30px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;

  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  overflow: hidden;
`;

export default Layout;
