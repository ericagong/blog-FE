import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { Form } from "../styled/User";
import { H3, H4, H4_ERR, H4_SUC } from "../styled/Hn";
import Button from "../../elements/Button";

import RESP from "../../server/response";
// import axios from "axios";

// TODO 유효성겁사 프론트단? 백단?
// TODO FE encoding?
const Signup = (props) => {
  const [userInfo, setUserInfo] = useState({
    id: "",
    nickname: "",
    password: "",
    passwordCheck: "",
  });

  const [check, setCheck] = useState({
    id: false,
    idMsg: "",
    nickname: false,
    nicknameMsg: "",
    password: false,
    passwordMsg: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const changeHandler = (e) => {
    let name = e.target.name;
    const value = e.target.value;
    setUserInfo({ ...userInfo, [name]: value });
    if (name === "passwordCheck") {
      name = "password";
    }
    const nameMsg = name + "Msg";
    setCheck({ ...check, [name]: false, [nameMsg]: "" });
  };

  const checkIDHandler = async (e) => {
    // const username = userInfo.id;
    // const {
    //   result,
    //   status: { message },
    // } = await axios.post(`http://localhost:3000/user/username`, {username});
    const {
      result,
      status: { message },
    } = RESP.ID_CHECK_SUCCESS;
    setCheck({ ...check, id: result, idMsg: message });
  };

  const checkNickHandler = (e) => {
    // const nickname = userInfo.nickname;
    // const {
    //   result,
    //   status: { message },
    // } = awiat axios.post(`http://localhost:3000/user/nickname`, { nickname });
    const {
      result,
      status: { message },
    } = RESP.NICKNAME_CHECK_SUCCESS;
    setCheck({ ...check, nickname: result, nicknameMsg: message });
  };

  const checkPWandler = (e) => {
    const password = userInfo.password;
    const passwordCheck = userInfo.passwordCheck;
    const result = password === passwordCheck;
    const message = result
      ? "Password matched!"
      : "Password not matching, Please check!";
    setCheck({ ...check, password: result, passwordMsg: message });
  };

  const submitHandler = async (formData) => {
    console.log(formData);
    // const resp = axios.post(`http://localhost:3000/signup`, formData);
    const {
      result,
      data,
      status: { message },
    } = RESP.SIGN_UP_SUCCESS;
    alert(message);
    if (result) {
      navigate("/login");
    }
  };

  return (
    <Form onSubmit={handleSubmit(submitHandler)}>
      <HelperWrapper>
        <H3 as='label' htmlFor='ID'>
          ID
        </H3>
        <H4>Use 8 to 16 characters with a mix of letters, numbers.</H4>
      </HelperWrapper>
      <InputWrapper>
        <input
          type='text'
          {...register("id", {
            required: "You should write ID.",
            pattern: {
              value: /[A-Za-z0-9]{8,16}/,
              message:
                "ID should be 8 to 16 characters with a mix of letters, numbers.",
            },
            validate: {
              noWhiteSpace: (v) =>
                !/[\s]/g.test(v) || "ID cannot contain space.",
            },
          })}
          onChange={changeHandler}
        />
        <Button
          type='button'
          size='sm'
          content='check'
          onClick={checkIDHandler}
        />
        {check.id ? (
          <H4_SUC>{check.idMsg}</H4_SUC>
        ) : (
          <H4_ERR>{check.idMsg}</H4_ERR>
        )}
      </InputWrapper>
      {errors?.ID && <H4_ERR>{errors.ID.message}</H4_ERR>}
      <HelperWrapper>
        <H3 as='label' htmlFor='nickname'>
          Nickname
        </H3>
        <H4>
          Use 2 to 8 characters with a mix of letters(Englisth or Korean),
          numbers.
        </H4>
      </HelperWrapper>
      <InputWrapper>
        <input
          type='text'
          {...register("nickname", {
            required: "You should write Nickname.",
            pattern: {
              value: /[ㄱ-ㅎ가-힣a-zA-Z0-9]{2,8}/,
              message:
                "Nickname should be 2 to 8 characters with a mix of letters(English or Korean), numbers.",
            },
            validate: {
              noWhiteSpace: (v) =>
                !/[\s]/g.test(v) || "Nickname cannot contain space.",
            },
          })}
          onChange={changeHandler}
        />
        <Button
          type='button'
          size='sm'
          content='check'
          onClick={checkNickHandler}
        />
        {check.nickname ? (
          <H4_SUC>{check.nicknameMsg}</H4_SUC>
        ) : (
          <H4_ERR>{check.nicknameMsg}</H4_ERR>
        )}
      </InputWrapper>
      {errors?.nickname && <H4_ERR>{errors.nickname.message}</H4_ERR>}
      <HelperWrapper>
        <H3 as='label' htmlFor='password'>
          Password
        </H3>
        <H4>
          Use 8 to 16 characters with a mix of letters, numbers and special
          characters(!@#$%^&*()?_~).
        </H4>
      </HelperWrapper>
      <InputWrapper>
        <input
          type='password'
          {...register("password", {
            required: true,
            pattern: {
              value: /[a-zA-Z0-9!@#$%^&*()?_~]{8,16}/,
              message:
                "Password should be 2 to 8 characters with a mix of letters, numbers and special characters.",
            },
            validate: {
              noWhiteSpace: (v) =>
                !/[\s]/g.test(v) || "Nickname cannot contain space.",
              mixOfTwo: (v) => {
                let cnt = 0;
                if (v.search(/[0-9]/) !== -1) cnt++;
                if (v.search(/[a-zA-Z]/) !== -1) cnt++;
                if (v.search(/[!@#$%^&*()?_~]/) !== -1) cnt++;
                return (
                  cnt > 1 ||
                  "Nickname should contain two of followings: letters, numbers, special characters."
                );
              },
            },
          })}
          onChange={changeHandler}
        />
      </InputWrapper>
      {errors?.password && <H4_ERR>{errors.password.message}</H4_ERR>}
      <HelperWrapper>
        <H3 as='label' htmlFor='password check'>
          Password Check
        </H3>
        <H4>Use 8 to 16 characters with a mix of letters, numbers.</H4>
      </HelperWrapper>
      <InputWrapper>
        <input
          type='password'
          {...register("passwordCheck", { required: true })}
          onChange={changeHandler}
        />
        <Button
          type='button'
          size='sm'
          content='check'
          onClick={checkPWandler}
        />
        {check.password ? (
          <H4_SUC>{check.passwordMsg}</H4_SUC>
        ) : (
          <H4_ERR>{check.passwordMsg}</H4_ERR>
        )}
      </InputWrapper>
      <Button
        type='submit'
        size='lg'
        content='Sign up'
        disabled={!(check.id && check.nickname & check.password)}
      />
    </Form>
  );
};

export default Signup;

const HelperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 10px 10px;
`;
