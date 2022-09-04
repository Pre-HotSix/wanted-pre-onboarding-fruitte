import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import * as S from './style';

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
      <S.FormInputWrapper>
        <S.Label htmlFor="productName">상품명</S.Label>
        <S.FormInput
          id="productName"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          maxLength="100"
          inputSize="650"
        />
        <S.Label htmlFor="productName">{`${name.length} / 100`}</S.Label>
      </S.FormInputWrapper>

      <S.FormInputWrapper>
        <S.Label htmlFor="price">판매가</S.Label>
        <S.FormInput
          as={NumberFormat}
          id="price"
          thousandSeparator={true}
          prefix={'₩'}
          allowNegative={false}
          onValueChange={value => {
            setPrice(value.value);
          }}
        />
      </S.FormInputWrapper>

      <S.FormInputWrapper>
        <S.Label htmlFor="salePrice">할인가</S.Label>
        <S.FormInput
          as={NumberFormat}
          id="salePrice"
          thousandSeparator={true}
          prefix={'₩'}
          allowNegative={false}
          onValueChange={value => {
            setSalePrice(value.value);
          }}
        />
      </S.FormInputWrapper>
      <S.FormInputWrapper>
        <S.Label htmlFor="qty">수량</S.Label>
        <S.FormInput
          as={NumberFormat}
          id="qty"
          thousandSeparator={true}
          suffix={'개'}
          allowNegative={false}
          onValueChange={value => {
            setQty(value.value);
          }}
        />
      </S.FormInputWrapper>
      <S.FormInputWrapper>
        <S.Label htmlFor="shippingFee">배송비</S.Label>
        <S.FormInput
          as={NumberFormat}
          id="shippingFee"
          thousandSeparator={true}
          prefix={'₩'}
          allowNegative={false}
          onValueChange={value => {
            setShippingFee(value.value);
          }}
        />
      </S.FormInputWrapper>
      <S.FormInputWrapper>
        <S.Label htmlFor="shippingFee">옵션</S.Label>
        <S.Button
          type="button"
          value="옵션 등록"
          onClick={() => {
            setShowOptionInput(true);
          }}
          isRegBtn={true}
          marginLeft={85}
        />
        <S.Button
          type="button"
          value="옵션 초기화"
          onClick={() => {
            setOptions([]);
          }}
          isRegBtn={false}
        />
      </S.FormInputWrapper>
      {showOptionInput && (
        <S.FormInputWrapper>
          <S.FormInput
            type="text"
            value={tempOption}
            onChange={e => {
              setTempOption(e.target.value);
            }}
            maxLength="100"
          />
          <S.Button
            type="button"
            value="추가"
            onClick={handleAddOption}
            isRegBtn={true}
            nonAbsolute={true}
            marginLeft={430}
          />
          <S.Button
            type="button"
            value="취소"
            onClick={hideOptionInput}
            isRegBtn={false}
            nonAbsolute={true}
          />
        </S.FormInputWrapper>
      )}
      {options.length > 0 &&
        options.map((option, idx) => {
          return <p key={idx}>* {option}</p>;
        })}
      <S.FormInputWrapper>
        <S.Label>메인이미지</S.Label>
        <S.Button
          type="button"
          onClick={uploadImg}
          value="이미지 등록"
          isRegBtn={true}
          marginLeft={43}
        />
        {imgUrl !== '' && <img src={imgUrl} />}
      </S.FormInputWrapper>
      <S.FormTextAreaWrapper>
        <S.TextArea
          id="desc"
          value={desc}
          onChange={e => setDesc(e.target.value)}
          maxLength="1500"
        />
        <S.Label htmlFor="name">{`${desc.length} / 1500`}</S.Label>
      </S.FormTextAreaWrapper>
      <S.Button
        type="button"
        onClick={regProduct}
        value="상품 등록"
        isRegBtn={true}
        marginLeft={700}
      />
    </div>
  );
};

export default AdminEnrollForm;
