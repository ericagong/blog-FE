import styled from "styled-components";

export const H1 = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;

export const H2 = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`;

export const H3 = styled.div`
  font-size: 0.9rem;
`;

export const H3_BOLD = styled(H3)`
  font-weight: bold;
`;

export const H4 = styled.div`
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

export const H5 = styled.div`
  font-weight: lighter;
  font-size: 0.8rem;
`;

export const H5_EFF = styled(H5)`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
    color: ${(props) => props.theme.hoverButtonColor};
  }
`;
