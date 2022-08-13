import styled from "styled-components";

const Layout = styled.div`
  width: 90vw;
  max-width: 1200px;
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
