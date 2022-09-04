import * as S from './style';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import YesProduct from '../../components/DetailYesProduct';
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

  return <S.ProductLayout>{result()}</S.ProductLayout>;
};

export default ProductDetail;
