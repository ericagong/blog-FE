import styled from "styled-components";

export const H1 = styled.div`
  padding: 10px;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const H2 = styled.div`
  padding: 10px;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const H3 = styled.div`
  padding: 10px;
  font-size: 0.9rem;
`;

export const H4 = styled.div`
  padding: 10px;
  font-weight: lighter;
  font-size: 0.7rem;
  color: ${(props) => props.theme.helperTextColor};
`;

export const H4_ERR = styled(H4)`
  color: ${(props) => props.theme.errorTextColor};
`;

export const H4_SUC = styled(H4)`
  color: ${(props) => props.theme.successTextColor};
`;
