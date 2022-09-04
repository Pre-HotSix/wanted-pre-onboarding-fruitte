import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import NumberFormat from 'react-number-format';

const AdminEnrollForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const [qty, setQty] = useState('');
  const [shippingFee, setShippingFee] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [options, setOptions] = useState([]);
  const [desc, setDesc] = useState('');

  const [showOptionInput, setShowOptionInput] = useState(false);
  const [tempOption, setTempOption] = useState('');

  const uploadImg = () => {
    setImgUrl('https://cdn.imweb.me/thumbnail/20220521/69f390486a3e3.png');
  };
  const handleAddOption = () => {
    setOptions([...options, tempOption]);
    setShowOptionInput(false);
    setTempOption('');
  };
  const hideOptionInput = () => {
    setShowOptionInput(false);
    setTempOption('');
  };
  const validAlertText = (targetText, totalSentence = undefined) => {
    if (totalSentence) alert(totalSentence);
    else alert(`${targetText}이(가) 입력되지 않았습니다.`);
  };
  const getIsValid = () => {
    if (name === '') {
      validAlertText('상품명');
      return false;
    }
    if (price === '' || price === '0') {
      validAlertText('판매가');
      return false;
    }
    if (salePrice === '' || salePrice === '0') {
      validAlertText('할인가');
      return false;
    } else if (Number(salePrice) > Number(price)) {
      validAlertText('할인가는 판매가보다 높을수 없습니다.');
      return false;
    }
    if (qty === '' || qty === '0') {
      validAlertText('수량');
      return false;
    }
    return true;
  };
  const regProduct = () => {
    const isValid = getIsValid();
    if (isValid) {
      navigate('adminmanage');
    }
  };

  return (
    <div>
      <label htmlFor="productName">상품명</label>
      <input
        id="productName"
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        maxLength="100"
      />
      <label htmlFor="productName">{`${name.length} / 100`}</label>
      <br />
      <label htmlFor="price">판매가</label>
      <NumberFormat
        id="price"
        thousandSeparator={true}
        prefix={'₩'}
        allowNegative={false}
        onValueChange={value => {
          setPrice(value.value);
        }}
      />
      <br />
      <label htmlFor="salePrice">할인가</label>
      <NumberFormat
        id="salePrice"
        thousandSeparator={true}
        prefix={'₩'}
        allowNegative={false}
        onValueChange={value => {
          setSalePrice(value.value);
        }}
      />
      <br />
      <label htmlFor="qty">수량</label>
      <NumberFormat
        id="qty"
        thousandSeparator={true}
        suffix={'개'}
        allowNegative={false}
        onValueChange={value => {
          setQty(value.value);
        }}
      />
      <br />
      <label htmlFor="shippingFee">배송비</label>
      <NumberFormat
        id="shippingFee"
        thousandSeparator={true}
        prefix={'₩'}
        allowNegative={false}
        onValueChange={value => {
          setShippingFee(value.value);
        }}
      />
      <br />
      <label htmlFor="shippingFee">옵션</label>
      <input
        type="button"
        value="옵션 등록"
        onClick={() => {
          setShowOptionInput(true);
        }}
      />
      <input
        type="button"
        value="옵션 초기화"
        onClick={() => {
          setOptions([]);
        }}
      />
      {showOptionInput && (
        <div>
          <input
            type="text"
            value={tempOption}
            onChange={e => {
              setTempOption(e.target.value);
            }}
          />
          <input type="button" value="추가" onClick={handleAddOption} />
          <input type="button" value="취소" onClick={hideOptionInput} />
        </div>
      )}
      {options.length > 0 &&
        options.map((option, idx) => {
          return <p key={idx}>{option}</p>;
        })}
      <br />
      <label>메인이미지</label>
      <input type="button" onClick={uploadImg} value="이미지 등록" />
      {imgUrl !== '' && <img src={imgUrl} />}
      <br />
      <textarea
        id="desc"
        value={desc}
        onChange={e => setDesc(e.target.value)}
        maxLength="1500"
      />
      <label htmlFor="name">{`${desc.length} / 1500`}</label>
      <br />
      <input type="button" onClick={regProduct} value="상품 등록" />
    </div>
  );
};

export default AdminEnrollForm;
