import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { H3, H5, H5_EFF } from "../styled/Hn";
import Button from "../../elements/Button";

// TODO : 요약 추가?
const Post = ({
  id,
  nickname,
  imageUrl,
  title,
  content,
  numComments,
  modifiedAt,
}) => {
  const navigate = useNavigate();

  const date =
    "modified at " +
    modifiedAt.slice(0, 4) +
    "/" +
    modifiedAt.slice(5, 7) +
    "/" +
    modifiedAt.slice(8, 10);

  const onClickHandler = (e) => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <Image src={imageUrl} alt='' />
      <Card>
        <Header>
          <H3>{title}</H3>
          <Button
            content='상세페이지'
            type='button'
            size='sm'
            onClick={onClickHandler}
          />
        </Header>
        <H5>
          Creator: {nickname} | {date}
        </H5>
        <H5_EFF onClick={onClickHandler}>Comments: {numComments}</H5_EFF>
        <H5>{content}</H5>
      </Card>
    </>
  );
};

export default Post;

const Card = styled.div`
  width: 70%;
  box-sizing: border-box;
  padding-bottom: 50px;
`;

const Image = styled.img`
  width: 70%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
