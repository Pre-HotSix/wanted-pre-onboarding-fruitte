import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import YesProduct from '../../components/DetailYesProduct/YesProduct';
import { dummies } from 'constants/dummy';

const ProductDetail = () => {
  const [list] = useState(dummies);
  const { docId } = useParams();

  const result = () => {
    if (docId) {
      const numId = Number(docId);
      if (numId <= list.length && docId[0] !== '-' && docId[0] !== '0') {
        const info = { numId, list };
        return <YesProduct {...info} />;
      }
    }
  };

  return <ProductLayout>{result()}</ProductLayout>;
};

export default ProductDetail;

const ProductLayout = styled.div`
  padding-top: 90px;
  position: relative;
`;
