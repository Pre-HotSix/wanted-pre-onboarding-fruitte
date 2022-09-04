import React, { useState } from 'react';
import styled from 'styled-components';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProButtons = () => {
  const [heart, setHeart] = useState(0);
  const changeHeart = () => {
    heart === 0 ? setHeart(1) : setHeart(0);
  };

  const isHeart = () => {
    return (
      <>
        {heart ? <FaHeart /> : <FaRegHeart />}
        <span>{heart}</span>
      </>
    );
  };

  return (
    <ButtonContainer>
      <BuyButton>
        <Link to="/productorder">구매하기</Link>
      </BuyButton>
      <CartButton>장바구니</CartButton>
      <LikeButton onClick={changeHeart}>{isHeart()}</LikeButton>
    </ButtonContainer>
  );
};

export default ProButtons;

const ButtonContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  & > button {
    height: 100%;
    border-radius: 25px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    cursor: pointer;
  }
`;

const BuyButton = styled.button`
  width: 245px;
  background-color: rgb(76, 156, 46);
  & > a {
    color: rgb(255, 255, 255);
    display: inline-block;
    width: 100%;
    height: 100%;
    line-height: 50px;
  }
`;

const CartButton = styled.button`
  border: 1px solid rgb(76, 156, 46);
  width: 170px;
`;

const LikeButton = styled.button`
  width: 120px;
  border: 1px solid rgb(248, 135, 32);
  color: rgb(248, 135, 32);
  display: flex;
  justify-content: center;
  align-items: center;
  & > span {
    color: rgb(0, 0, 0);
  }
  & > svg {
    width: 26%;
    height: 24px;
    padding-top: 4px;
  }
`;
