import * as S from './style';
import React, { Fragment, useEffect, useState } from 'react';
import { FaChevronUp, FaChevronDown, FaTimes } from 'react-icons/fa';
import ProButtons from '../DetailButtons';

const ProCount = data => {
  const { price, required, id } = data;
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(false);
  const [sepCount, setSepCount] = useState({});

  const bridge = {};
  required.forEach((ele, index) => {
    if (index !== 0) bridge[ele[0]] = 1;
  });

  useEffect(() => {
    setSepCount({ ...bridge });
  }, []);

  const totalPrice = () => {
    const total = count * (price.sale ? price.sale : price.regular);
    return total.toLocaleString() + '원';
  };

  const minusCount = item => {
    const sepLength = Object.keys(sepCount).length;
    if (sepLength > 1 && sepCount[item] > 1) {
      setSepCount({ ...sepCount, [item]: sepCount[item] - 1 });
    } else if (count > 1) setCount(count - 1);
  };
  const plusCount = item => {
    const sepLength = Object.keys(sepCount).length;
    if (sepLength > 1) {
      setSepCount({ ...sepCount, [item]: sepCount[item] + 1 });
    } else setCount(count + 1);
  };
  const deleteCount = item => {
    setSepCount({ ...sepCount, [item]: 0 });
  };
  const resetCount = () => {
    const bridgeCount = { ...sepCount };
    for (const key in sepCount) {
      if (bridgeCount[key] === 0) {
        bridgeCount[key] = 1;
      }
    }
    setSepCount({ ...bridgeCount });
    setShow(!show);
  };

  const deleteBtn = itemN => {
    if (itemN !== '수량') {
      return (
        <S.DeleteButton onClick={() => deleteCount(itemN)}>
          <FaTimes />
        </S.DeleteButton>
      );
    }
  };

  const countBox = (itemN, count, total) => {
    if (count !== 0) {
      return (
        <S.CountBox>
          <div>
            <span>{itemN}</span>
            <S.ButtonBox>
              <button onClick={() => minusCount(itemN)}>
                <FaChevronDown />
              </button>
              <button>{count}</button>
              <button onClick={() => plusCount(itemN)}>
                <FaChevronUp />
              </button>
            </S.ButtonBox>
          </div>
          <span>{total}</span>
          {deleteBtn(itemN)}
        </S.CountBox>
      );
    }
  };

  const choice = item => {
    return (
      <S.RequiredBox>
        <div onClick={resetCount}>
          {`${item} (필수)`}
          <FaChevronDown />
        </div>
      </S.RequiredBox>
    );
  };

  const openCloseBtn = () => {
    if (show && required.length !== 0) {
      return (
        <S.ToggleButton onClick={() => setShow(!show)}>
          <FaChevronUp />
        </S.ToggleButton>
      );
    }
  };

  const result = () => {
    if (required.length === 0) {
      return <>{countBox('수량', count, totalPrice())}</>;
    } else {
      const preview = required.map((item, index) => {
        const itemName = item[0],
          itemPrice = item[1],
          total = (itemPrice * sepCount[itemName]).toLocaleString() + '원';

        if (index === 0) {
          return <div key={index}>{show ? null : choice(item)}</div>;
        } else {
          return (
            <Fragment key={index}>
              {show ? countBox(itemName, sepCount[itemName], total) : null}
            </Fragment>
          );
        }
      });

      return preview;
    }
  };

  const singleCount = count,
    singlePrice = totalPrice(),
    multiCount = sepCount,
    multiPrice = required;
  const forData = {
    id,
    required,
    singleCount,
    singlePrice,
    multiCount,
    multiPrice,
    show,
    setShow,
  };

  return (
    <S.CountCotainer>
      {openCloseBtn()}
      {result()}
      <ProButtons {...forData} />
    </S.CountCotainer>
  );
};

export default ProCount;
