import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import productData from '../../constants/productData.json';

const MainPage = () => {
  const navigate = useNavigate();

  const handleNextPage = e => {
    console.log(e);
    navigate(`/${e}/productdetail`);
  };
  return (
    <Container>
      <div>안녕하세용~</div>
      {productData.map(item => (
        <ProductWrapper key={item.id} onClick={handleNextPage(item.id)}>
          <ProductImage
            key={item.id}
            onClick={handleNextPage(item.id)}
            src={item.imgUrl}
          ></ProductImage>
        </ProductWrapper>
      ))}
    </Container>
  );
};

export default MainPage;
const Container = styled.div``;

const ProductWrapper = styled.div``;

const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  cursor: pointer;
`;
