import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import YesProduct from '../../components/DetailYesProduct';
import { dummies } from 'constants/dummy';

const ProductDetail = () => {
  const [list] = useState(dummies);
  const { docId } = useParams();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const result = () => {
    if (docId) {
      const numId = Number(docId);
      if (numId <= list.length && docId[0] !== '-' && docId[0] !== '0') {
        const info = { numId, list };
        return <YesProduct {...info} />;
      }
    }
  };

  return <div>{result()}</div>;
};

export default ProductDetail;
