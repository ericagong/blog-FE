import Layout from "../../components/styled/Layout";
import Header from "../../components/common/Header";
import LoginLayout from "../../components/user/LoginLayout";

const Login = (props) => {
  return (
    <>
      <Layout>
        <Header />
        <LoginLayout />
      </Layout>
    </>
  );
};

export default Login;
