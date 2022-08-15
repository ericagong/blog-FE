import Layout from "../components/styled/Layout";
import Header from "../components/common/Header";
import HomeLayout from "../components/post/HomeLayout";

const Home = (props) => {
  return (
    <Layout>
      <Header />
      <HomeLayout />
    </Layout>
  );
};

export default Home;
