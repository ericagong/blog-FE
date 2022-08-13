import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

// TODO null visibility: none 차이
const Button = ({ type, content, icon, size, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      {icon ? <Icon icon={icon} size={size} /> : null}
      {content ? <Btn type={type}>{content}</Btn> : null}
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.div``;

const Icon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.iconColor};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.hoverIconColor};
    transition: ${(props) => props.theme.transition};
    transform: ${(props) => props.theme.hoverTransform};
  }
`;

const Btn = styled.button.attrs((props) => ({ type: props.type }))`
  padding: 10px 20px;
  margin: 5px;
  border-radius: ${(props) => props.theme.buttonRadius};
  transition: ${(props) => props.theme.transition};
  border: none;
  box-shadow: ${(props) => props.theme.boxShadow};
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.hoverButtonColor};
    color: ${(props) => props.theme.hoverButtonTextColor};
  }
`;
