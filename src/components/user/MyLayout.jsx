import axios from 'axios';
import React, { useState, useEffect} from 'react'
import { H1 } from "../styled/Hn";
import { H3_BOLD } from "../styled/Hn";
import RESP from "../../server/response";
import { useNavigate } from "react-router-dom"
import Post from "../post/Post";

function MyLayout(props) {
    const [post, setPost] = useState([]);
    console.log(post)

    const navigate = useNavigate()

    const getPost = async (pageNum,pageLimit) => {
    //     const {
    //         data : {
    //             result,
    //             data,
    //             status : { message },
    //         },
    //     } = await axios.get(`http://localhost:3000/api/my`, 
    //     {
    //         headers: {
    //             Authorization: localStorage.getItem("AccessToken"),
    //             RefreshToken: localStorage.getItem("RefreshToken"),
    //         }
    //     }
    // )

        const {
        result,
        data,
        status : { message },
        } = RESP.MY_SUCCESS


        if (!result) {
        alert(message)
        navigate("/home");
        return
        }
        setPost(data)

    }

    useEffect (() => {
        getPost(1,5)
    },[])

  const myPosts = post.map((props) => <div key={props.posts.id} {...props} />)


  return (
   <> 
    <H1>나의 활동 내역</H1>
    <H3_BOLD>내가 작성한 게시글 : {post.numPosts}</H3_BOLD>
    <H3_BOLD>내가 작성한 댓글 : {post.numComments}</H3_BOLD>
    {myPosts}
   </> 
  )
}

export default MyLayout