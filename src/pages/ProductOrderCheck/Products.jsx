import React from 'react';
import styled from 'styled-components';

const Products = ({ item }) => {
  console.log(item);
  return (
    <Container>
      <DateAndNumber>
        <div>{`${item.year} / ${item.month} / ${item.day}`}</div>
        <div className="orderNumber">${item.orderNumber}</div>
      </DateAndNumber>
      <ProductNameAndOption>
        <ProductImg
          src={item.imgUrl.length > 1 ? item.imgUrl[0] : item.imgUrl}
        ></ProductImg>
        <ProductTitle>{item.title}</ProductTitle>
      </ProductNameAndOption>
      <ProductsAndPrice>
        <span className="sub">{`${item.price}원 /`}</span>
        <span>{` ${item.howMany}개`}</span>
      </ProductsAndPrice>
      <Reviews>
        <ReviewButton>리뷰쓰기</ReviewButton>
      </Reviews>
    </Container>
  );
};

export default Products;

const Container = styled.div`
  display: flex;
  padding: 36px 10px;
  text-align: center;
  align-items: center;
`;

const DateAndNumber = styled.div`
  width: 20%;
  text-align: center;
  margin-right: 20px;
  .orderNumber {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.LIGHT_BLUE};
    text-decoration: underline;
    cursor: pointer;
  }
`;
const ProductNameAndOption = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  text-align: start;
`;

const ProductImg = styled.img`
  border-radius: 15px;
  width: 70px;
  height: 70px;
  margin-right: 15px;
`;
const ProductTitle = styled.div``;

const ProductsAndPrice = styled.div`
  width: 20%;
  .sub {
    color: ${({ theme }) => theme.colors.SUB_COLOR};
  }
`;
const Reviews = styled.div`
  width: 15%;
`;
const ReviewButton = styled.button`
  padding: 8px 19px;
  color: ${({ theme }) => theme.colors.WHITE};
  background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
  font-size: 14px;
  border-radius: 20px;
  cursor: pointer;
`;
