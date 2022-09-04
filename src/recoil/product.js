import { productDetails } from 'constants/productDetails';
import { atom } from 'recoil';

export const productState = atom({
  key: 'productState',
  default: [],
});

export const productDetailsAtom = atom({
  key: 'productDetails',
  default: [...productDetails],
});
