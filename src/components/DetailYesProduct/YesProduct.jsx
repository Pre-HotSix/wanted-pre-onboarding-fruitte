import * as S from './style';
import React from 'react';
import ProImg from '../DetailImg/ProImg';
import ProDescription from '../DetailDescription/ProDescription';

const YesProduct = data => {
  const { numId, list } = data;
  const { imgUrl } = list[numId - 1];

  return (
    <S.YesContainer>
      <ProImg imgUrl={imgUrl} />
      <ProDescription data={list[numId - 1]} />
    </S.YesContainer>
  );
};

export default YesProduct;
