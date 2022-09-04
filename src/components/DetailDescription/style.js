import styled from 'styled-components';

export const DescContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 50px;
  padding-top: 35px;
  position: relative;
`;

export const TitleBox = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 30px;
  padding-bottom: 10px;
`;

export const DescBox = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  padding-bottom: 20px;
  & > p {
    margin: 0;
    padding: 0;
  }
`;

export const PriceBox = styled.div`
  width: 100%;
  height: 41px;
  font-style: normal;
  margin-bottom: 20px;
  display: flex;
  & > span {
    display: inline-block;
    line-height: 41px;
    font-weight: 700;
    font-size: 24px;
    padding-right: 10px;
  }
  & > .discount {
    font-size: 28px;
    color: rgb(248, 135, 32);
    padding-right: 20px;
  }
  & > .regular {
    font-weight: 400;
    font-size: 16px;
    text-decoration-line: line-through;
    color: rgb(169, 169, 169);
  }
`;

export const InfoBox = styled.div`
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  & > :nth-child(1) {
    font-weight: 700;
    padding-right: 13px;
  }
  & > div > span {
    display: block;
  }
`;
