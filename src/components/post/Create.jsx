import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { Form } from "../styled/User";
import { H3, H3_BOLD, H4, H4_ERR } from "../styled/Hn";
import ImageView from "./ImageView";
import Button from "../../elements/Button";

import RESP from "../../server/response";
// import axios from "axios";

// TODO input type='file' css customizing
// TODO loading spinner 적용
const Create = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [files, setFiles] = useState([]);
  const [urls, setUrls] = useState("");
  // const isLoading = files !== [] && urls === "";

  const navigate = useNavigate();

  // https://jamong-icetea.tistory.com/243
  const onChangeHandler = async (e) => {
    const fileList = e.target.files;
    const formData = new FormData();
    for (let i = 0; i < fileList.length; i++) {
      formData.append(i, fileList[i]);
    }

    console.log(fileList);
    for (let key of formData.entries()) {
      console.log(`${key}`);
    }

    setFiles([...fileList]);

    if (!files) {
      setUrls("");
      return;
    }

    // const { imageUrls } = await axios.post(
    //   `http://localhost:3000/api/image`,
    //   files,
    //   {
    //     headers: {
    //       'Authorization': localStorage.getItem("AccessToken"),
    // 			'RefreshToken': localStorage.getItem("RefreshToken"),
    // 			'contents-type': 'multipart/form-data'
    //     },
    //   }
    // );

    const { imageUrl } = RESP.UPLOAD_PHOTO_SUCCESS;
    setUrls(imageUrl);
  };

  // console.log("files: ", files);
  // console.log("urls: ", urls);

  const onSubmitHandler = (formData) => {
    console.log(formData);
    const { title, content } = formData;

    // 단일 사진으로 고치기?
    const post = {
      title,
      content,
      imageUrl: urls,
    };

    console.log(post);

    // const {
    //   result,
    //   status: { message },
    // } = axios.post(`http://localhost:3000/api/post`, post, {
    //   headers: {
    //     'Authorization': localStorage.getItem("AccessToken"),
    //     'RefreshToken': localStorage.getItem("RefreshToken"),
    //   },
    // });

    const {
      result,
      status: { message },
    } = RESP.CREATE_POST_SUCCESS;

    if (!result) {
      alert(message);
      return;
    }

    navigate("/home");
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <TitleWrapper>
          <H3_BOLD as='label' htmlFor='file'>
            Image
          </H3_BOLD>
          <H3>Upload image for new post!</H3>
          {errors?.file ? <H4_ERR>{errors.file.message}</H4_ERR> : null}
        </TitleWrapper>
        <InputWrapper>
          <input
            {...register("file", {
              required:
                "You should select at least one image file to create new post.",
            })}
            type='file'
            accept='image/jpg, image/png, image/jpeg'
            multiple
            onChange={onChangeHandler}
          />
        </InputWrapper>
        {/* {isLoading ? <H4>Loading...</H4> : null} */}
        {urls ? <ImageView urls={urls} size='lg' /> : null}
        <TitleWrapper>
          <H3_BOLD as='label' htmlFor='title'>
            Title
          </H3_BOLD>
          {errors?.title ? <H4_ERR>{errors.title.message}</H4_ERR> : null}
        </TitleWrapper>
        <Input
          {...register("title", {
            required: "You should write title to create new post.",
            validate: {
              notEmpty: (v) =>
                v.replace(/\s+/g, "") !== "" ||
                "You should write title to create new post.",
            },
          })}
          type='text'
          id='title'
        />
        <TitleWrapper>
          <H3_BOLD as='label' htmlFor='content'>
            Content
          </H3_BOLD>
          {errors?.content ? <H4_ERR>{errors.content.message}</H4_ERR> : null}
        </TitleWrapper>
        <Textarea
          {...register("content", {
            required: "You should write content to create new post.",
            validate: {
              notEmpty: (v) =>
                v.replace(/\s+/g, "") !== "" ||
                "You should write content to create new posts.",
            },
          })}
          type='text'
          id='content'
        />
        <ButtonWrapper>
          <Button type='submit' content='Create' />
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
};

export default Create;

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
  margin: auto;
`;
