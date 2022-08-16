import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import RESP from "../../server/response";

import Post from "./Post";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  // TODO API 문서 제발좀...
  const getPosts = async (pageNum, pageLimit) => {
    // const {
    //   data: {
    //     result,
    //     data,
    //     status: { message },
    //   },
    // } = await axios.get(
    //   `http://3.34.47.86/api/posts?pageNum=${pageNum}&pageLimit=${pageLimit}`,
    //   {
    //     headers: {
    //       Authorization: localStorage.getItem("AccessToken"),
    //       RefreshToken: localStorage.getItem("RefreshToken"),
    //     },
    //   }
    // );

    // console.log(result, data);

    const {
      result,
      data,
      status: { message },
    } = RESP.GET_POSTS_SUCCESS;

    if (!result) {
      alert(message);
      navigate("/home");
      return;
    }

    setPosts((state) => [...state, ...data]);
  };

  useEffect(() => {
    getPosts(1, 5);
  }, []);

  // console.log(posts);
  const allPosts = posts.map((props) => <Post key={props.id} {...props} />);

  return <>{allPosts}</>;
};

export default Posts;
