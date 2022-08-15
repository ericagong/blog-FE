import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

// TODO check API
const Detail = (props) => {
  const getPost = async () => {
    const {
      id,
      nickname,
      title,
      imageUrl,
      content,
      modifiedAt,
      isMine,
      comments,
    } = await axios.get(`http://localhost:3000/api/${postId}`);
  };

  useEffect(() => {
    getPost();
  }, []);

  return <></>;
};

export default Detail;
