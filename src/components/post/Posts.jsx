import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import axios from "axios";

import Post from "./Post";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const target = useRef(null);

  useEffect(() => {
    console.log("initial getPost");
    getPosts();
  }, []);

  const onIntersect = async (entries, observer) => {
    // 타겟 엘리멘트가 교차영역에 있고, loading중이 아닐때
    entries.forEach((entry) => {
      console.log(entry);
      console.log(observer);
      if (entry.isIntersecting) {
        getPosts(page);
      } else {
        console.log("target is not intersecting!");
      }
    });
  };

  // 옵저버 생성
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      threshold: 0.5,
    });
    console.log(`Created observer to see: ${target.current}`);
    observer.observe(target.current);
    return () => {
      observer.disconnect();
      console.log(`Observer disconnected`);
    };
  }, []);

  const navigate = useNavigate();

  // TODO page 안넘어감...
  const getPosts = async () => {
    const pageLimit = 10;

    setIsLoading((prev) => !prev);

    const {
      data: {
        result,
        data,
        status: { message },
      },
    } = await axios.get(
      `http://3.34.47.86/api/posts?pageNum=${page}&pageLimit=${pageLimit}`,
      {
        headers: {
          Authorization: localStorage.getItem("AccessToken"),
          RefreshToken: localStorage.getItem("RefreshToken"),
        },
      }
    );

    if (!result) {
      alert(message);
      navigate("/home");
      return;
    }

    setPosts((state) => [...state, ...data]);
    setPage((prev) => prev + 1);
    setIsLoading((prev) => !prev);
  };

  const allPosts = posts.map((post) => <Post key={post.id} {...post} />);

  return (
    <>
      {allPosts}
      {!isLoading ? <Footer ref={target}>Footer</Footer> : null}
    </>
  );
};

export default Posts;

const Footer = styled.div`
  width: 100%;
`;
