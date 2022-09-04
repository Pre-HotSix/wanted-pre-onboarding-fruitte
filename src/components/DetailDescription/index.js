import * as S from './style';
import React from 'react';
import ProCount from '../DetailCount';

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
    <S.DescContainer>
      <S.TitleBox>{title}</S.TitleBox>
      <S.DescBox>{description}</S.DescBox>
      <S.PriceBox>{priceTag()}</S.PriceBox>
      <S.InfoBox>{information()}</S.InfoBox>
      <ProCount {...info} />
      {/* <ProRequired {...info} /> */}
    </S.DescContainer>
  );
};

export default ProDescription;
