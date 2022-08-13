import Layout from "../components/styled/Layout";
import { H1 } from "../components/styled/Hn";
import Header from "../components/common/Header";

const Home = (props) => {
  return (
    <Layout>
      <Header />
      <H1>home</H1>

      {/* <HomeLayout/> */}
    </Layout>
  );
};

export default Home;
