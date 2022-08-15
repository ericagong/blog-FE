const SocialLogin = (props) => {
  const onClickHandler = () => {
    console.log("clicked");
    window.location.href =
      "https://kauth.kakao.com/oauth/authorize?client_id=2b986d1b574416a7d6d064619545aaff&redirect_uri=http://localhost:8080/user/kakao/callback&response_type=code";
  };

  return (
    <>
      <button onClick={onClickHandler}>kakao login</button>
    </>
  );
};

export default SocialLogin;
