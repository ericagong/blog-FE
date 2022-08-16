import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import styled from "styled-components";
import axios from "axios";
import RESP from "../../server/response";

import ImageView from "../post/ImageView";
import { H3, H5 } from "../styled/Hn";
import Button from "../../elements/Button";
import CommentsLayout from "../comment/CommentsLayout";

const Detail = (props) => {
  const [post, setPost] = useState({
    id: "",
    nickname: "",
    title: "",
    imageUrl: [],
    content: "",
    modifiedAt: "",
    isMine: "",
  });

  const [comments, setComments] = useState([]);

  const { id } = useParams();

  const navigate = useNavigate();

  const getPost = async () => {
    // const { result, data } = await axios.get(`http://localhost:3000/api/post/${id}`, {
    // 	headers: {
    // 		'Authorization': localStorage.getItem('AccessToken'),
    // 		'RefreshToken': localStorage.getItem('RefreshToken')
    // 	}
    // });
    const { result, data } = RESP.GET_POST_SUCCESS;
    if (!result) {
      navigate("/home");
      return;
    }
    setPost({ ...post, ...data });
  };

  // TODO 에러 발생 시 홈으로 갈건지?
  // TODO change commentsNum to state.
  const getComments = async () => {
    const commentsNum = 1;
    const pageLimit = 5;
    // const { result, data } =
    //   await axios.get(`http://localhost:3000/api/post/${id}/comments?comentsNum=${commentsNum}&pageLimit=${pageLimit}, {
    //   headers: {
    //     'Authorization': localStorage.getItem("AccessToken"),
    //     'RefreshToken': localStorage.getItem("RefreshToken"),
    //   },
    // }`);
    const { result, data } = RESP.GET_COMMENTS_SUCCESS;
    if (!result) {
      navigate("/home");
      return;
    }
    setComments([...comments, ...data]);
  };

  useEffect(() => {
    getPost();
  }, []);

  // TODO 맨 밑에 닿을 때마다 호출!
  useEffect(() => {
    getComments();
  }, []);

  const onClickEdit = (e) => {
    navigate(`/edit/${id}`);
  };

  const deletePost = async () => {
    // const {
    //   data: {
    //     result,
    //     status: { message },
    //   },
    // } = await axios.delete(`http://3.34.47.86/api/post/${id}`, {
    //   headers: {
    //     Authorization: localStorage.getItem("AccessToken"),
    //     RefreshToken: localStorage.getItem("RefreshToken"),
    //   },
    // });

    const {
      result,
      status: { message },
    } = RESP.DELETE_POST_SUCCESS;

    if (!result) {
      alert(message);
      return;
    }
    navigate("/home");
  };

  const onClickDelete = (e) => {
    const answer = window.confirm("Are you sure to delete this post?");
    if (!answer) {
      return;
    }
    deletePost();
  };

  const { nickname, title, content, imageUrl, isMine, modifiedAt } = post;
  const date =
    "modified at " +
    modifiedAt.slice(0, 4) +
    "/" +
    modifiedAt.slice(5, 7) +
    "/" +
    modifiedAt.slice(8, 10);

  return (
    <>
      {post ? <ImageView urls={imageUrl} size='sm' /> : null}
      <Card>
        <Header>
          <H3>{title}</H3>
          {isMine ? (
            <ButtonWrapper>
              <Button
                content='Edit'
                type='button'
                size='sm'
                onClick={onClickEdit}
              />
              <Button
                content='Delete'
                type='button'
                size='sm'
                onClick={onClickDelete}
              />
            </ButtonWrapper>
          ) : null}
        </Header>
        <H5>
          Creator: {nickname} | {date}
        </H5>
        <H5>{content}</H5>
      </Card>
      <CommentsLayout />
    </>
  );
};

export default Detail;

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
  box-sizing: border-box;
  padding: 10px 0px;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;
