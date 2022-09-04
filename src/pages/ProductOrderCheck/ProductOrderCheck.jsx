import { Pagination } from 'components';
import { usePagination } from 'hooks/usePagination';
import React from 'react';
import { useRecoilState } from 'recoil';
import { productDetailsAtom } from 'recoil/product';
import styled from 'styled-components';
import Products from './Products';

const ProductOrderCheck = () => {
  const [productDetails, setProductDetails] =
    useRecoilState(productDetailsAtom);

  const { page, setPage, limit, offset } = usePagination();
  return (
    <Container>
      <MainContainer>
        <MyPageContainer>
          <MyPageTitle className="title">마이페이지</MyPageTitle>
          <ShoppingTitle>쇼핑내역</ShoppingTitle>
          <OrderTitle>주문내역 조회</OrderTitle>
          <ShipmentTItle>배송 조회</ShipmentTItle>
        </MyPageContainer>
        <OrderInfoContainer>
          <OrderInfoTitle className="title">주문정보 조회</OrderInfoTitle>
          <OrderInfosHeader>
            <DateAndNumber>날짜 / 주문번호</DateAndNumber>
            <ProductNameAndOption>상품명 / 옵션</ProductNameAndOption>
            <ProductsAndPrice>상픔금액 / 수량</ProductsAndPrice>
            <Reviews>리뷰</Reviews>
          </OrderInfosHeader>
          {productDetails.slice(offset, offset + limit).map((item, index) => (
            <Products item={item} key={index}></Products>
          ))}
        </OrderInfoContainer>
      </MainContainer>
      <Pagination
        total={productDetails.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </Container>
  );
};

export default ProductOrderCheck;

const Container = styled.div`
  padding: 50px 120px 100px 120px;
  .title {
    padding-bottom: 15px;
    font-size: 24px;
    font-weight: bold;
  }
`;

const MainContainer = styled.div`
  display: flex;
`;

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

const MyPageTitle = styled.div`
  margin-right: 30px;
  border-bottom: 3px solid ${({ theme }) => theme.colors.MAIN_COLOR};
  color: ${({ theme }) => theme.colors.MAIN_COLOR};
  margin-bottom: 30px;
`;

const ShoppingTitle = styled.div`
  font-weight: bold;
  font-size: 21px;
  margin-bottom: 20px;
`;

const OrderTitle = styled.div`
  color: ${({ theme }) => theme.colors.MAIN_COLOR};
  margin-bottom: 8px;
  cursor: pointer;
`;

const ShipmentTItle = styled.div`
  color: ${({ theme }) => theme.colors.LIGHT_GRAY};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.MAIN_COLOR};
    transition: all 300ms ease-in-out;
  }
`;

const OrderInfoContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const OrderInfoTitle = styled.div`
  border-bottom: 3px solid ${({ theme }) => theme.colors.BLACK};
  color: ${({ theme }) => theme.colors.BLACK};
`;

const OrderInfosHeader = styled.div`
  display: flex;
  margin-top: 30px;
  padding: 11px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.BLACK};
  border-bottom: 1px solid ${({ theme }) => theme.colors.BLACK};
  text-align: center;
`;

const DateAndNumber = styled.div`
  width: 20%;
  padding: 0 30px;
`;
const ProductNameAndOption = styled.div`
  width: 45%;
  padding: 0 30px;
`;
const ProductsAndPrice = styled.div`
  width: 20%;
  padding: 0 30px;
`;
const Reviews = styled.div`
  width: 15%;
  padding: 0 30px;
`;
