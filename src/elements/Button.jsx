import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

// TODO null visibility: none 차이
const Button = ({ type, content, icon, size, onClick, disabled }) => {
  return (
    <Wrapper onClick={onClick}>
      {icon ? <Icon icon={icon} size={size} /> : null}
      {content ? (
        <Btn type={type} size={size} disabled={disabled}>
          {content}
        </Btn>
      ) : null}
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
  &:disabled {
    cursor: not-allowed;
  }
`;

const Btn = styled.button.attrs((props) => ({
  type: props.type,
  disabled: props.disabled,
}))`
  padding: ${(props) =>
    props.size === "sm"
      ? "5px 10px"
      : props.size === "lg"
      ? "10px 110px"
      : "10px 20px"};
  margin: 5px;
  border-radius: ${(props) => props.theme.buttonRadius};
  transition: ${(props) => props.theme.transition};
  border: none;
  box-shadow: ${(props) => props.theme.boxShadow};
  /* // TODO css 효과 */
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.hoverButtonColor};
    color: ${(props) => props.theme.hoverButtonTextColor};
  }
`;
