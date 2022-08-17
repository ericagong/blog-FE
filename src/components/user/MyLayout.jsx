import axios from "axios";
import React, { useState, useEffect } from "react";
import { H1 } from "../styled/Hn";
import { H3_BOLD } from "../styled/Hn";
import RESP from "../../server/response";
import { useNavigate } from "react-router-dom";
import Post from "../post/Post";
import styled from "styled-components";

function MyLayout(props) {
  const [posts, setPosts] = useState([]);
  const [numPosts, setNumPosts] = useState(0);
  const [numComments, setNumComments] = useState(0);


  console.log(posts);

  const navigate = useNavigate();

  const getPosts = async (pageNum, pageLimit) => {

    //     const {
    //         data : {
    //             result,
    //             data,
    //             status : { message },
    //         },
    //     } = await axios.get(`http://localhost:3000/api/my`,
    //     {
    //         headers: {
    //             Authorization: localStorage.getItem(“AccessToken”),
    //             RefreshToken: localStorage.getItem(“RefreshToken”),
    //         }
    //     }
    // )

    const {
      result,
      data: { posts, numComments, numPosts },
      status: { message },
    } = RESP.MY_SUCCESS;

    if (!result) {
      alert(message);
      navigate("/home");
      return;
    }

    setPosts(posts);
    setNumComments(numComments);
    setNumPosts(numPosts);
  };

  useEffect(() => {
    getPosts(1, 5);
  }, []);
  const myPosts = posts.map((post) => <Post key={post.id} {...post} />);
  return (
    <>
    <Wrapper>
      <TitleWrapper>
      <H1>Activity History</H1>
      </TitleWrapper>
      <H3_BOLD>My Posts : {numPosts}</H3_BOLD>
      <H3_BOLD>My Comments : {numComments}</H3_BOLD>
      {myPosts}
      </Wrapper> 

    </>
  );
}
export default MyLayout;


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  box-sizing: border-box;
  overflow: scroll;
`;


const TitleWrapper = styled.div`
  box-sizing: border-box;
  padding-bottom: 30px;
`;


