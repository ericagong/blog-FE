import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { Form } from "../styled/User";
import { H3, H4_ERR } from "../styled/Hn";
import Button from "../../elements/Button";

import RESP from "../../server/response";
// import axios from "axios";

const Create = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [file, setFile] = useState("");
  const [url, setUrl] = useState("");

  const navigate = useNavigate();

  // TODO thunk 사용?
  const onChangeHandler = async (e) => {
    const inputs = e.target.files;
    const file = inputs[0];
    setFile(file);
    console.log(file);

    if (!file) {
      setUrl("");
      return;
    }
    // const { imageUrl } = await axios.post(`http://localhost:3000/api/image`, file, {
    // 	headers: {
    // 		'Authorization': localStorage.getItem('Authorization'),
    // 		'RefreshToken': localStorage.getItem('RefreshToken'),
    // 		'content-type': 'enctype="multipart/form-data"'
    // 	}
    // });

    const { imageUrl } = RESP.UPLOAD_PHOTO_SUCCESS;
    setUrl(imageUrl);
  };

  const onSubmitHandler = (formData) => {
    console.log(formData);
    const { title, content } = formData;
    const post = {
      title,
      content,
      imageUrl: url,
    };
    console.log(post);
    // const { result, status: { message } } = axios.post(`http://localhost:3000/api/post`, post);
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
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <H3 as='label' htmlFor='file'>
        Upload Image
      </H3>
      {errors?.file ? <H4_ERR>{errors.file.message}</H4_ERR> : null}
      <input
        {...register("file", {
          required: "You should select image file to create new post.",
        })}
        type='file'
        onChange={onChangeHandler}
      />
      {!url && file ? <H3>Loading... </H3> : <Image src={url} alt='' />}
      <H3 as='label' htmlFor='title'>
        title
      </H3>
      {errors?.title ? <H4_ERR>{errors.title.message}</H4_ERR> : null}
      <input
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
      <H3 as='label' htmlFor='content'>
        content
      </H3>
      {errors?.content ? <H4_ERR>{errors.content.message}</H4_ERR> : null}
      <textarea
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
      <Button type='submit' content='Create' size='lg' />
    </Form>
  );
};

export default Create;

const Image = styled.img`
  width: 30px;
  height: 30px;
`;
