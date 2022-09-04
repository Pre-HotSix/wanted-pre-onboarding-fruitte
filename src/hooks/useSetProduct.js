import { useSetRecoilState } from 'recoil';
import { productState } from 'recoil/product';
import { useEffect } from 'react';
import { dummies } from 'constants/dummy';

export default function useSetProduct() {
  const setProduct = useSetRecoilState(productState);

  useEffect(() => {
    setProduct(dummies);
  }, []);
}
