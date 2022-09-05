import * as S from './style';
import React, { useEffect, useState, useRef } from 'react';

const ProductImg = data => {
  const { imgUrl } = data;

  const slide = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    slide.current = setInterval(() => {
      setCount(count => count + 0.5);
    }, 3000);
    return () => clearInterval(slide);
  }, []);

  const sideImgItems = imgUrl.map((item, index) => {
    return (
      <S.SideImgItem key={index}>
        <img src={item} alt="사이드 이미지" />
      </S.SideImgItem>
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
    <S.ImgContainer>
      <S.SideImgList>{sideImgItems}</S.SideImgList>
      <S.MainImgOuterBox>
        <S.MainImgInnerBox>{mainImgItems}</S.MainImgInnerBox>
      </S.MainImgOuterBox>
    </S.ImgContainer>
  );
};

export default ProductImg;
