import styled from "styled-components";
import { faPencil, faXmark } from "@fortawesome/free-solid-svg-icons";

import { H3_BOLD, H3 } from "../styled/Hn";
import Button from "../../elements/Button";

const Comment = ({ nickname, content, isMine }) => {
  return (
    <CommentWrapper>
      <NicknameWrapper>
        <H3_BOLD>{nickname}</H3_BOLD>
      </NicknameWrapper>
      <H3>{content}</H3>
      {isMine ? (
        <>
          <ButtonWrapper>
            <Button icon={faPencil} size='sm' />
          </ButtonWrapper>
          <ButtonWrapper>
            <Button icon={faXmark} size='sm' />
          </ButtonWrapper>
        </>
      ) : null}
    </CommentWrapper>
  );
};

export default Comment;

const CommentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  box-sizing: border-box;
  padding: 5px;
`;

const NicknameWrapper = styled.div`
  margin-right: 10px;
`;

const ButtonWrapper = styled.div`
  margin-left: 10px;
`;
