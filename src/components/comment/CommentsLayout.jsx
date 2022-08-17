import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import styled from "styled-components";
import axios from "axios";
import RESP from "../../server/response";

import { Form } from "../styled/User";
import Button from "../../elements/Button";
import { H4_ERR } from "../styled/Hn";

const CommentsLayout = (props) => {
  const { id } = useParams();

  // TODO react-hook-form reset
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const isLogin = useSelector((state) => state.user.isLogin);

  const onSubmitHandler = async (formData) => {
    // console.log(formData);

    // const { data: { result, status: { message } } } = await axios.post(`http://localhost:3000/api/post/${id}/comment`, formData, {
    // 	headers: {
    // 		Authorization: localStorage.getItem('AccessToken'),
    // 		RefreshToken: localStorage.getItem('RefreshToken')
    // 	}
    // });

    const {
      result,
      status: { message },
    } = RESP.CREATE_COMMENT_SUCCESS;

    if (!result) {
      alert(message);
      return;
    }
    reset({ content: "" });
  };

  return (
    <>
      {isLogin ? (
        <Form onSubmit={handleSubmit(onSubmitHandler)}>
          <InputWrapper>
            <Input
              {...register("content", {
                required: "You should write content to create comment.",
                validate: {
                  notEmpty: (v) =>
                    v.replace(/\s+/g, "") !== "" ||
                    "You should write content to create comment.",
                },
              })}
              type='text'
              id='content'
              placeholder='Write comment here...'
            />
            <Button type='submit' content='Create' />
          </InputWrapper>
          {errors?.content ? (
            <ErrorWrapper>
              <H4_ERR>{errors.content.message}</H4_ERR>
            </ErrorWrapper>
          ) : null}
        </Form>
      ) : null}
    </>
  );
};

export default CommentsLayout;

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
`;

const Input = styled.input`
  width: 100%;
`;

const ErrorWrapper = styled.div`
  box-sizing: border-box;
  padding: 0px 10px 20px;
`;
