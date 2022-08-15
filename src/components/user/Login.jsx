import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import RESP from "../../server/response";
// import axios from 'axios';
import { login } from "../../modules/redux/user";

import { Form } from "../styled/User";
import { H3, H4_ERR } from "../styled/Hn";
import Button from "../../elements/Button";

// TODO id 저장하시겠습니까? 로컬 스토리지 저장하고 그렇지 않은 경우는 쿠키 저장?
const Login = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const onSubmitHandler = async (formData) => {
    console.log(formData);
    // const { result, status: { message } } = await axios.post(`http://localhost:3000/user/login`, formData);
    const {
      result,
      status: { message },
    } = RESP.LOGIN_SUCCESS;
    const { Authorization, RefreshToken } = RESP.LOGIN_HEADER;
    if (!result) {
      alert(message);
      return;
    }
    localStorage.setItem("AccessToken", Authorization);
    localStorage.setItem("RefreshToken", RefreshToken);
    dispatch(login());
    navigate("/home");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <H3 as='label' htmlFor='username'>
        ID
      </H3>
      <Input
        {...register("username", {
          required: "You should write ID for login.",
        })}
        type='text'
        onChange={onChangeHandler}
      />
      {errors?.id ? <H4_ERR>{errors.id.message}</H4_ERR> : null}
      <H3 as='label' htmlFor='password'>
        Password
      </H3>
      <Input
        {...register("password", {
          required: "You should write password for login.",
        })}
        type='password'
        id='password'
        onChange={onChangeHandler}
      />
      {errors?.id ? <H4_ERR>{errors.id.message}</H4_ERR> : null}
      <Button type='submit' size='lg' content='Login' />
    </Form>
  );
};

export default Login;

const Input = styled.input`
  margin-left: 10px;
`;
