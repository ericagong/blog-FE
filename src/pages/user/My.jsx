import Layout from "../../components/styled/Layout";
import Header from "../../components/common/Header";
import MyLayout from "../../components/user/MyLayout";
import styled from "styled-components";
import { H1 } from "../../components/styled/Hn";

const My = (props) => {
  return (
    <>
      <Layout>
        <Header />
       <MyLayout/>
      </Layout>
    </>
  );
};

export default My;


