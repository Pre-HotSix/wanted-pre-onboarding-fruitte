import React from 'react';
import styled from 'styled-components';
import ProImg from '../DetailImg/ProImg';
import ProDescription from '../DetailDescription/ProDescription';

const YesProduct = data => {
  const { numId, list } = data;
  const { imgUrl } = list[numId - 1];

  return (
    <YesContainer>
      <ProImg imgUrl={imgUrl} />
      <ProDescription data={list[numId - 1]} />
    </YesContainer>
  );
};

export default YesProduct;

const YesContainer = styled.div`
  position: absolute;
  padding: 50px 120px;
  width: 1440px;
  height: 1302px;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
