import { useState } from "react";

import Button from "../../elements/Button";

const Signup = (props) => {
  const [userInfo, setUserInfo] = useState({
    id: "",
    nickname: "",
    password: "",
    passwordCheck: "",
  });

  const onChangeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (!value) return;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  // use react-hook-form
  // TODO 유효성검사
  // TODO 이미지, 로고 추가한 인풋 필드 만들기
  console.log(userInfo);
  return (
    <form onSubmit={onSubmitHandler}>
      <input type='text' name='ID' onChange={onChangeHandler} required />
      <Button type='button' content='check' />
      <input type='text' name='nickname' onChange={onChangeHandler} required />
      <Button type='button' content='check' />
      <input
        type='password'
        name='password'
        onChange={onChangeHandler}
        required
      />
      <input
        type='password'
        name='password check'
        onChange={onChangeHandler}
        required
      />
      <Button type='submit' content='Sign up' />
    </form>
  );
};

export default Signup;
