import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const ProductImg = data => {
  const { imgUrl } = data;

  const slide = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    slide.current = setInterval(() => {
      setCount(count => count + 1);
    }, 5000);
    return () => clearInterval(slide);
  }, []);

  const sideImgItems = imgUrl.map((item, index) => {
    return (
      <SideImgItem key={index}>
        <img src={item} alt="사이드 이미지" />
      </SideImgItem>
    );
  });

  let num = 0;
  const mainImgItems = imgUrl.map((item, index) => {
    return (
      <img
        className={count % imgUrl.length === num++ ? 'block' : 'none'}
        src={item}
        alt="메인 이미지"
        key={index}
      />
    );
  });

  return (
    <ImgContainer>
      <SideImgList>{sideImgItems}</SideImgList>
      <MainImgOuterBox>
        <MainImgInnerBox>{mainImgItems}</MainImgInnerBox>
      </MainImgOuterBox>
    </ImgContainer>
  );
};

export default ProductImg;

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const SideImgList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-right: 25px;
  width: 100px;
  height: 100%;
`;

const SideImgItem = styled.li`
  width: 100px;
  height: 100px;
  margin-bottom: 5px;
  border-radius: 10px;
  overflow: hidden;
  & > img {
    width: 100px;
    height: 100px;
  }
`;

const MainImgOuterBox = styled.div`
  width: 470px;
  height: 470px;
  border-radius: 25px;
  overflow: hidden;
`;

const MainImgInnerBox = styled.div`
  width: auto;
  height: auto;
  display: inline-flex;
  position: relative;
  & > img {
    display: block;
    width: 470px;
    height: 470px;
  }
  & > .none {
    display: none;
  }
  & > .block {
    animation: slider 2s;
  }
  @keyframes slider {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0%);
    }
  }
`;
