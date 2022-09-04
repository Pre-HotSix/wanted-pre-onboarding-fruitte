import React from 'react';
import styled from 'styled-components';
import ProCount from '../DetailCount/ProCount';

const ProDescription = items => {
  const { data } = items;
  const { id, title, desc, price, origin, shipping, required } = data;

  const description = desc.split('\n').map((text, index) => {
    return <p key={index}>{text}</p>;
  });

  const discountRate =
    parseInt(((price.regular - price.sale) / price.regular) * 100) + '%';

  const checkPrice = bet => {
    return price[bet].toLocaleString() + '원';
  };

  const priceTag = () => {
    if (price.sale) {
      return (
        <>
          <span className="discount">{discountRate}</span>
          <span>{checkPrice('sale')}</span>
          <span className="regular">{checkPrice('regular')}</span>
        </>
      );
    } else {
      return <span>{checkPrice('regular')}</span>;
    }
  };

  const infoData = {
    원산지: origin,
    배송방법: shipping.method,
    배송비: shipping.fee,
    배송안내: shipping.info,
  };

  const information = () => {
    const infoL = [],
      infoR = [];

    for (const key in infoData) {
      if (infoData[key]) {
        infoL.push(<span key={key}>{key}</span>);
        infoR.push(<span key={key}>{infoData[key]}</span>);
      }
    }

    return [<div key="infoL">{infoL}</div>, <div key="infoR">{infoR}</div>];
  };

  const info = { price, required, id };

  return (
    <DescContainer>
      <TitleBox>{title}</TitleBox>
      <DescBox>{description}</DescBox>
      <PriceBox>{priceTag()}</PriceBox>
      <InfoBox>{information()}</InfoBox>
      <ProCount {...info} />
    </DescContainer>
  );
};

export default ProDescription;

const DescContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 50px;
  padding-top: 35px;
  position: relative;
`;

const TitleBox = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 30px;
  padding-bottom: 10px;
`;

const DescBox = styled.div`
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

const PriceBox = styled.div`
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

const InfoBox = styled.div`
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
