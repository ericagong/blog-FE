import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import styled from "styled-components";
import axios from "axios";
import RESP from "../../server/response";

import Comment from "./Comment";

// TODO 무한 스크롤
const Comments = (props) => {
  const fetchWatcher = useSelector((state) => state.comment.fetchWatcher);

  const [comments, setComments] = useState([]);

  const { id } = useParams();

  const navigate = useNavigate();

  const getComments = async (commentsNum, pageLimit) => {
    // const { data: { result, data, status: { message } } } = await axios.get(`http://localhost:3000/api/post/${id}/comments?commentsNum=${commentsNum}&pageLimit=${pageLimit}`,
    // 	{
    // 		headers: {
    // 			Authorization: localStorage.getItem('AccessToken'),
    // 			RefreshToken: localStorage.getItem('RefreshToken')
    // 	}}
    // )

    const {
      result,
      data,
      status: { message },
    } = RESP.GET_COMMENTS_SUCCESS;

    if (!result) {
      alert(message);
      navigate("/home");
    }

    setComments([...comments, ...data]);
  };

  useEffect(() => {
    const commentsNum = 1;
    const pageLimit = 5;
    getComments(commentsNum, pageLimit);
  }, [fetchWatcher]);

  // console.log(comments);

  const allComments = comments.map((comment) => (
    <Comment key={comment.id} {...comment} postId={id} />
  ));

  return <CommentsWrapper>{allComments}</CommentsWrapper>;
};

export default Comments;

const CommentsWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
