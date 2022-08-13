import Button from "../../elements/Button";

const Signup = (props) => {
  return (
    <>
      <input type='text' placeholder='ID' />
      <Button content='check' />
      <input type='text' placeholder='nickname' />
      <Button content='check' />
      <input type='password' placeholder='password' />
      <input type='password' placeholder='password check' />
      <Button content='Sign up' />
    </>
  );
};

export default Signup;
