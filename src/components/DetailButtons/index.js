import * as S from './style';
import React, { useEffect, useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const ProButtons = data => {
  const {
    id,
    required,
    singleCount,
    singlePrice,
    multiCount,
    multiPrice,
    show,
    setShow,
  } = data;
  const navigate = useNavigate();
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

  const resultData = () => {
    const state = { id, total: { totalCount: 0, totalPrice: 0 } };
    multiPrice.forEach((ele, index) => {
      if (index !== 0) {
        const name = ele[0];
        const count = multiCount[ele[0]];
        const semiPrice = ele[1] * count;
        const price = semiPrice.toLocaleString() + '원';
        state[index] = { name, count, price };
        state.total = {
          ...state.total,
          totalCount: state.total.totalCount + count,
          totalPrice: state.total.totalPrice + semiPrice,
        };
      }
    });

    return state;
  };

  const sumPrice = () => {
    const data = resultData();
    const total = data.total.totalPrice;
    const sumResult = total.toLocaleString() + '원';
    return sumResult;
  };

  useEffect(() => {
    if (sumPrice() === '0원') {
      setShow(!show);
    }
  }, [sumPrice()]);

  const sumBox = () => {
    if (show) {
      return (
        <S.SumBox>
          <span>Total : </span>
          {sumPrice()}
        </S.SumBox>
      );
    }
  };

  const sendData = () => {
    if (required.length === 0) {
      const state = { id, count: singleCount, price: singlePrice };
      navigate('/productorder', { state: state });
    } else {
      if (show) {
        navigate('/productorder', { state: resultData() });
      } else alert('고객님, 필수선택을 완료하신 후 구매하기 버튼을 눌러주세요');
    }
  };

  return (
    <>
      {sumBox()}
      <S.ButtonContainer>
        <S.BuyButton onClick={sendData}>구매하기</S.BuyButton>
        <S.CartButton>장바구니</S.CartButton>
        <S.LikeButton onClick={changeHeart}>{isHeart()}</S.LikeButton>
      </S.ButtonContainer>
    </>
  );
};

export default ProButtons;
