import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import styled from "styled-components";

import { Form } from "../styled/User";
import Button from "../../elements/Button";
import { H4_ERR } from "../styled/Hn";

const CommentsLayout = (props) => {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (formData) => {
    console.log(formData);
  };

  console.log(errors?.content);
  return (
    <>
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
      </Form>
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
