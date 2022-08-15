import styled from "styled-components";

// TODO : 후처리 어디서?
const Post = ({
  id,
  nickname,
  imageUrl,
  title,
  content,
  numComments,
  modifiedAt,
}) => {
  const date =
    modifiedAt.slice(0, 4) +
    "/" +
    modifiedAt.slice(5, 7) +
    "/" +
    modifiedAt.slice(8, 10);

  return (
    <>
      <div>{id}</div>
      <div>Author: {nickname}</div>
      <Image src={imageUrl} alt='' />
      <div>{title}</div>
      <div>{content}</div>
      <div>Comments: {numComments}</div>
      <div>{date}</div>
    </>
  );
};

export default Post;

const Image = styled.img`
  width: 10px;
  height: 10px;
`;
