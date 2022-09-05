import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { productState } from 'recoil/product';
import PropTypes from 'prop-types';

ProductItem.propTypes = {
  item: PropTypes.object,
  onClickDelete: PropTypes.func.isRequired,
  index: PropTypes.number,
};

export default function ProductItem({ item, onClickDelete, index }) {
  const [isSale, setIsSale] = useState(item.sale);
  const [product, setProduct] = useRecoilState(productState);

  const onChangeSale = event => {
    if (event.target.value === 'true') {
      setIsSale(true);
    } else {
      setIsSale(false);
    }

    const arraynum = index;
    const tempOption = product.map((item, index) => {
      if (index !== arraynum) {
        return item;
      }
      return {
        ...item,
        sale: event.target.value === 'true' ? true : false,
      };
    });

    setProduct(tempOption);
  };

  return (
    <div className="row" key={item.id}>
      <span>{String(item.id).padStart(6, '0')}</span>
      <span>
        <img className="contentImg" src={item.imgUrl[0]} />
        <span className="contenttitle">{item.title}</span>
      </span>
      <span>₩ {item.price.sale.toLocaleString()}</span>
      <span>{item.price.regular}개</span>
      <span>
        <input
          type="radio"
          name={item.id}
          readOnly
          checked={isSale === true}
          value={'true'}
          onChange={onChangeSale}
        />
        <input
          type="radio"
          name={item.id}
          value={'false'}
          checked={isSale === false}
          onChange={onChangeSale}
        />
      </span>
      <span className="edit">EDIT</span>
      <span className="delete" id={item.id} onClick={onClickDelete}>
        DELETE
      </span>
    </div>
  );
}
