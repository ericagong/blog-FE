import Layout from "../../components/styled/Layout";
import Header from "../../components/common/Header";
import SignupLayout from "../../components/user/SignupLayout";

const Signup = (props) => {
  return (
    <Layout>
      <Header />
      <SignupLayout />
    </Layout>
  );
};

export default Signup;
