import styled from 'styled-components';

export const SumBox = styled.div`
  height: 35px;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  color: rgb(169, 169, 169);
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  margin-top: 50px;
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

export const BuyButton = styled.button`
  width: 245px;
  background-color: rgb(76, 156, 46);
  color: rgb(255, 255, 255);
  & > a {
    display: inline-block;
    width: 100%;
    height: 100%;
    line-height: 50px;
  }
`;

export const CartButton = styled.button`
  border: 1px solid rgb(76, 156, 46);
  width: 170px;
`;

export const LikeButton = styled.button`
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
