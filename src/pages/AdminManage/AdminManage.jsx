import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from 'components';
import * as S from './AdminManage.styles';
import { dummies } from 'constants/dummy';
import { AiOutlineCheck } from 'react-icons/ai';

const getPrice = price => {
  return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export default function AdminManage() {
  // const [sale, setSale] = useState(true);s
  const [productItem, setProductItem] = useState(dummies);

  const onClickDelete = event => {
    const ok = window.confirm('삭제하시겠습니까?');

    if (ok) {
      setProductItem(
        dummies.filter(el => {
          if (el.id !== Number(event.target.id)) {
            return el.id !== event.target.id;
          }
        }),
      );
    }
  };

  return (
    <>
      <Navigation />
      <S.Container>
        <S.Sidebar>
          <S.Logo src="/images/logo.jpeg" />
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
              {productItem.map(el => (
                <div className="row" key={el.id}>
                  <span>{String(el.id).padStart(6, '0')}</span>
                  <span>
                    <img className="contentImg" src={el.imgUrl[1]} />
                    <span className="contenttitle">{el.title}</span>
                  </span>
                  <span>₩ {getPrice(el.price.regular)}</span>
                  <span>{el.price.regular}개</span>
                  <span>
                    <input type="radio" name={el.id} readOnly checked />
                    <input type="radio" name={el.id} />
                  </span>
                  <span className="edit">EDIT</span>
                  <span className="delete" id={el.id} onClick={onClickDelete}>
                    DELETE
                  </span>
                </div>
              ))}
            </div>
          </div>
        </S.Article>
      </S.Container>
    </>
  );
}
