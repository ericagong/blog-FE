import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import axios from "axios";
import RESP from "../../server/response";

import Post from "./Post";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  const getPosts = async (pageNum, pageLimit) => {
    // const {
    //   result,
    //   data,
    //   status: { message },
    // } = await axios.get(
    //   `http://localhost:3000/api/posts?pageNum=${pageNum}&pageLimit=${pageLimit}`,
    //   {
    //     headers: {
    //       Authorization: localStorage.getItem("AccessToken"),
    //       RefreshToken: localStorage.getItem("RefreshToken"),
    //     },
    //   }
    // );

    const {
      result,
      data,
      status: { message },
    } = RESP.GET_POSTS_SUCCESS;
    // console.log(data);

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
