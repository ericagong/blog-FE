import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { H3, H5, H5_EFF } from "../styled/Hn";
import ImageView from "../post/ImageView";
import Button from "../../elements/Button";

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
      <ImageView urls={imageUrl} size='sm' />
      <Card>
        <Header>
          <H3>{title.length > 25 ? title.slice(0, 24) + "..." : title}</H3>
          <Button
            content='Detail'
            type='button'
            size='sm'
            onClick={onClickHandler}
          />
        </Header>
        <H5>
          Creator: {nickname} | {date}
        </H5>
        <H5>{content.length > 41 ? content.slice(0, 41) + "..." : content}</H5>
        <H5_EFF onClick={onClickHandler}>Comments: {numComments}</H5_EFF>
      </Card>
    </>
  );
};

export default Post;

const Card = styled.div`
  width: 70%;
  box-sizing: border-box;
  padding: 0px 10px;
  padding-bottom: 50px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
