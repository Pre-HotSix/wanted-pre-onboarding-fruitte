import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

ProductBlock.propTypes = {
  data: PropTypes.object,
};

export default function ProductBlock({ data }) {
  const navigate = useNavigate();

  return (
    <S.ProductRow onClick={() => navigate(`${data.id}`)}>
      <S.ImgCol>
        <img src={data.imgUrl[0]} />
      </S.ImgCol>
      <S.ContentCol>
        <span>{data.origin}</span>
        <span>{data.title}</span>
        <span>{data.price.regular}원</span>
        <span>{data.price.sale}원</span>
        <div className="delivery">
          <p>배송방법 {data.shipping.method}</p>
          <p>택배비 {data.shipping.fee}</p>
          <p>주의사항 {data.shipping.info}</p>
        </div>
      </S.ContentCol>
    </S.ProductRow>
  );
}
