import { useState } from "react";

import styled from "styled-components";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

import Button from "../../elements/Button";

const ImageView = ({ urls }) => {
  const [curr, setCurr] = useState(0);

  const onClickPrev = (e) => {
    if (curr === 0) {
      return;
    }
    setCurr((prev) => prev - 1);
  };

  const onClickNext = (e) => {
    if (curr === urls.length - 1) {
      return;
    }
    setCurr((prev) => prev + 1);
  };

  return (
    <Preview>
      <Button icon={faArrowCircleLeft} onClick={onClickPrev} />
      <Image src={urls[curr]} alt='' />
      <Button icon={faArrowCircleRight} onClick={onClickNext} />
    </Preview>
  );
};

export default ImageView;

const Preview = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 90%;
  box-sizing: border-box;
  padding: 0px 10px;
`;
