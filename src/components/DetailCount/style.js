import styled from 'styled-components';

export const CountCotainer = styled.div`
  margin-top: 30px;
`;

export const ToggleButton = styled.div`
  text-align: center;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
`;

export const RequiredBox = styled.div`
  width: 100%;
  height: 115px;
  padding-top: 30px;
  padding-bottom: 50px;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  text-indent: 5px;
  border-top: 1px solid rgb(169, 169, 169);
  text-align: center;
  & > div {
    height: 35px;
    line-height: 35px;
    border: 1px solid rgb(169, 169, 169);
    cursor: pointer;
    > svg {
      margin-left: 4px;
      padding-top: 4px;
    }
  }
`;

export const CountBox = styled(RequiredBox)`
  width: 100%;
  height: 115px;
  padding-top: 30px;
  padding-bottom: 50px;
  display: flex;
  justify-content: space-between;
  position: relative;
  & > span {
    display: inline-block;
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
  }
  & > div {
    display: flex;
    border: 0;
    & > span {
      display: inline-block;
      line-height: 35px;
      padding-right: 35px;
    }
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  & > button {
    font-size: 16px;
    width: 35px;
    height: 35px;
    line-height: 35px;
    border: 1px solid rgb(169, 169, 169);
    color: rgb(76, 156, 46);
    cursor: pointer;
  }
  & :nth-child(2) {
    line-height: 25px;
    color: rgb(0, 0, 0);
    cursor: default;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  bottom: 2px;
  right: 0;
  color: rgb(169, 169, 169);
  cursor: pointer;
  & > svg {
    width: 16px;
    height: 16px;
  }
`;
