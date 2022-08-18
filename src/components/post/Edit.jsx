import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import styled from "styled-components";

import { Form } from "../styled/User";
import { H3, H3_BOLD, H4, H4_ERR } from "../styled/Hn";
import ImageView from "./ImageView";
import Button from "../../elements/Button";

import RESP from "../../server/response";
import axios from "axios";

// TODO input type='file' css customizing
// TODO loading spinner 적용
const Edit = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [post, setPost] = useState({
    id: "",
    nickname: "",
    title: "",
    imageUrl: [],
    content: "",
    modifiedAt: "",
    isMine: "",
  });

  const { id } = useParams();

  const navigate = useNavigate();

  const getPost = async () => {
    const resp = await axios.get(`http://3.34.47.86/api/post/${id}`, {
      headers: {
        Authorization: localStorage.getItem("AccessToken"),
        RefreshToken: localStorage.getItem("RefreshToken"),
      },
    });

    const {
      result,
      data,
      status: { message },
    } = resp.data;

    // const { result, data } = RESP.GET_POST_SUCCESS;

    if (!result) {
      alert(message);
      navigate("/home");
      return;
    }

    // console.log(data);

    setPost({ ...post, ...data });
  };

  // console.log(post);

  useEffect(() => {
    getPost();
  }, []);

  const onChangeHandler = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setPost({ ...post, [id]: value });
  };

  const onClickHandler = () => {
    navigate(-1);
  };

  const onSubmitHandler = async (formData) => {
    const { title, content } = formData;

    const editPost = {
      title,
      content,
      imageUrl: post.imageUrl,
    };

    console.log(editPost);

    const resp = await axios.put(`http://3.34.47.86/api/post/${id}`, editPost, {
      headers: {
        Authorization: localStorage.getItem("AccessToken"),
        RefreshToken: localStorage.getItem("RefreshToken"),
      },
    });

    // const {
    //   result,
    //   status: { message },
    // } = RESP.EDIT_POST_SUCCESS;

    navigate("/home");
  };

  // console.log(post);

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <TitleWrapper>
          <H3_BOLD as='label' htmlFor='file'>
            Image
          </H3_BOLD>
        </TitleWrapper>
        {post ? <ImageView urls={post.imageUrl} size='lg' /> : null}
        <TitleWrapper>
          <H3_BOLD as='label' htmlFor='title'>
            Title
          </H3_BOLD>
          {errors?.title ? <H4_ERR>{errors.title.message}</H4_ERR> : null}
        </TitleWrapper>
        <Input
          {...register("title", {
            validate: {
              notEmpty: (v) =>
                v.replace(/\s+/g, "") !== "" ||
                "You should write title to edit post.",
            },
          })}
          type='text'
          id='title'
          value={post?.title}
          onChange={onChangeHandler}
        />
        <TitleWrapper>
          <H3_BOLD as='label' htmlFor='content'>
            Content
          </H3_BOLD>
          {errors?.content ? <H4_ERR>{errors.content.message}</H4_ERR> : null}
        </TitleWrapper>
        <Textarea
          {...register("content", {
            validate: {
              notEmpty: (v) =>
                v.replace(/\s+/g, "") !== "" ||
                "You should write content to edit post.",
            },
          })}
          type='text'
          id='content'
          value={post?.content}
          onChange={onChangeHandler}
        />
        <ButtonWrapper>
          <Button type='button' content='Cancel' onClick={onClickHandler} />
          <Button type='submit' content='Save' />
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
};

export default Edit;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  overflow: scroll;
`;

const TitleWrapper = styled.div`
  box-sizing: border-box;
  padding: 10px 0px 10px 0px;
`;

const InputWrapper = styled.div`
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
`;

const Textarea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  min-height: 200px;
  resize: none;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
