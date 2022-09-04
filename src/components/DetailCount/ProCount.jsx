import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import ProButtons from '../DetailButtons/ProButtons';

const ProCount = data => {
  const { price, required } = data;
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

  const subInfo = (itemN, count, total) => {
    return (
      <CountBox>
        <div>
          <span>{itemN}</span>
          <ButtonBox>
            <button onClick={() => minusCount(itemN)}>
              <FaChevronDown />
            </button>
            <button>{count}</button>
            <button onClick={() => plusCount(itemN)}>
              <FaChevronUp />
            </button>
          </ButtonBox>
        </div>
        <span>{total}</span>
      </CountBox>
    );
  };

  const choice = item => {
    return (
      <RequiredBox>
        <div onClick={() => setShow(!show)}>
          {`${item} (필수)`}
          <FaChevronDown />
        </div>
      </RequiredBox>
    );
  };

  const openCloseBtn = () => {
    if (show) {
      return (
        <ToggleButton onClick={() => setShow(!show)}>
          <FaChevronUp />
        </ToggleButton>
      );
    }
  };

  const result = () => {
    if (required.length === 0) {
      return <>{subInfo('수량', count, totalPrice())}</>;
    } else {
      const preview = required.map((item, index) => {
        const itemName = item[0];
        const itemPrice = item[1];
        const total = (itemPrice * sepCount[itemName]).toLocaleString() + '원';

        if (index === 0) {
          return <div key={index}>{show ? null : choice(item)}</div>;
        } else {
          return (
            <Fragment key={index}>
              {show ? subInfo(itemName, sepCount[itemName], total) : null}
            </Fragment>
          );
        }
      });

      return preview;
    }
  };

  return (
    <CountCotainer>
      {openCloseBtn()}
      {result()}
      <ProButtons />
    </CountCotainer>
  );
};

export default ProCount;

const CountCotainer = styled.div`
  margin-top: 30px;
`;

const ToggleButton = styled.div`
  text-align: center;
  height: 30px;
  line-height: 30px;
`;

const RequiredBox = styled.div`
  width: 100%;
  height: 115px;
  padding-top: 30px;
  padding-bottom: 50px;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  text-indent: 5px;
  border-top: 1px solid rgb(169, 169, 169);
  text-align: center;
  & > div {
    height: 35px;
    line-height: 35px;
    border: 1px solid rgb(169, 169, 169);
    > svg {
      margin-left: 4px;
      padding-top: 4px;
    }
  }
`;

const CountBox = styled(RequiredBox)`
  width: 100%;
  height: 115px;
  padding-top: 30px;
  padding-bottom: 50px;
  display: flex;
  justify-content: space-between;
  & > span {
    display: inline-block;
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
  }
  & > div {
    display: flex;
    border: 0;
    & > span {
      display: inline-block;
      line-height: 35px;
      padding-right: 35px;
    }
  }
`;

const ButtonBox = styled.div`
  display: flex;
  & > button {
    font-size: 16px;
    width: 35px;
    height: 35px;
    line-height: 35px;
    border: 1px solid rgb(169, 169, 169);
    color: rgb(76, 156, 46);
    cursor: pointer;
  }
  & :nth-child(2) {
    line-height: 25px;
    color: rgb(0, 0, 0);
    cursor: default;
  }
`;
