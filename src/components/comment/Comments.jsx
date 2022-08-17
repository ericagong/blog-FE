import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import styled from "styled-components";
import axios from "axios";
import RESP from "../../server/response";

const Comments = (props) => {
  const [comments, setComments] = useState([]);

  const { id } = useParams();

  const navigate = useNavigate();

  const getComments = async () => {
    // const commentsNum = 1
    // const pageLimit = 5
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
  };

  return <></>;
};

export default Comments;
