import { Link } from 'react-router-dom';
import * as S from './style';
import { ProductItem } from 'components';
import { useRecoilValue, useRecoilState } from 'recoil';
import { productState } from 'recoil/product';

export default function AdminManage() {
  const productInfo = useRecoilValue(productState);
  const [product, setProduct] = useRecoilState(productState);

  const onClickDelete = event => {
    const ok = window.confirm('삭제하시겠습니까?');

    if (ok) {
      setProduct(
        productInfo.filter(item => {
          if (item.id !== Number(event.target.id)) {
            return item.id !== event.target.id;
          }
        }),
      );
    }
  };

  return (
    <S.Container>
      <S.Sidebar>
        <S.Logo src="/images/logo.png" />
        <ul>
          <li className="list active">
            <S.HomeIcon />
            <span className="title">Home</span>
          </li>
        </ul>
      </S.Sidebar>
      <S.Article>
        <div className="topWrap">
          <h2 className="title">STORE LIST</h2>
          <button>
            <Link to="/adminenroll">+ADD</Link>
          </button>
        </div>
        <S.Line />
        <div className="table">
          <div className="row">
            <span>상품번호</span>
            <span>제품정보</span>
            <span>제품가격</span>
            <span>제품수량</span>
            <span>제품 노출 여부</span>
            <span>수정</span>
            <span>삭제</span>
          </div>
          <div className="column">
            {product.map((el, index) => (
              <ProductItem
                key={el.id}
                item={el}
                index={index}
                onClickDelete={onClickDelete}
              />
            ))}
          </div>
        </div>
      </S.Article>
    </S.Container>
  );
}
