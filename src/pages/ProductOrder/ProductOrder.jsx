import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as XButton } from '../../assets/X_InActive.svg';
import { ReactComponent as checkButton } from '../../assets/checkButton.svg';
import DaumPostcode from 'react-daum-postcode';
import { orderInfos } from 'constants/orderInfos';
import { dummies } from 'constants/dummy';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { productDetailsAtom } from 'recoil/product';

const ProductOrder = () => {
  const { state } = useLocation();
  const { Id } = useParams();
  const productDatas = dummies[Id - 1];
  const [modalState, setModalState] = useState(false);
  const [inputAddressValue, setInputAddressValue] = useState();
  const [inputZipCodeValue, setInputZipCodeValue] = useState();

  const [productDetails, setProductDetails] =
    useRecoilState(productDetailsAtom);

  const productPrice = state.total
    ? state.total.totalPrice
    : productDatas.price.sale * state.count;
  const shipMentPrice = 2500;

  const navigate = useNavigate();

  const modalRef = useRef(); //화면 외부 클릭하면 창이 닫히게
  useEffect(() => {
    document.addEventListener('mousedown', clickModalOutside);

    return () => {
      document.removeEventListener('mousedown', clickModalOutside);
    };
  });

  const clickModalOutside = event => {
    if (modalState && !modalRef.current.contains(event.target)) {
      setModalState(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      e.target[1].value &&
      e.target[2].value &&
      e.target[3].value &&
      e.target[4].value &&
      e.target[10].value &&
      e.target[11].value
    ) {
      navigate('/productordercheck');
    } else {
      alert('주문정보를 확인해주세요');
    }
    const today = new Date();
    const year = today.getFullYear(); // 년도
    const month = today.getMonth() + 1; // 월
    const date = today.getDate(); // 날짜
    setProductDetails(
      [
        ...productDetails,
        {
          year: year,
          month: month,
          day: date,
          orderNumber: 1234567890123456,
          imgUrl: productDatas.imgUrl,
          title: productDatas.title,
          price: productPrice,
          howMany: state.total ? state.total.totalCount : state.count,
        },
      ].reverse(),
    );
  };

  const onCompletePost = data => {
    setModalState(false);
    setInputAddressValue(data.address);
    setInputZipCodeValue(data.zonecode);
  };

  const postCodeStyle = {
    width: '400px',
    height: '400px',
    display: modalState ? 'block' : 'none',
  };

  const handleModal = () => {
    setModalState(true);
  };

  const handleXbutton = () => {
    setModalState(false);
  };

  const handleZipCode = e => {
    setModalState(false);
    // set;
  };

  const handleAddress = e => {
    setInputAddressValue(e.target.value);
  };
  return (
    <Container>
      <ModalBlock modalState={modalState}></ModalBlock>
      <CheckButtonIcon></CheckButtonIcon>
      <ProductContainer>
        <ProductInfos>
          <ProductImage
            src={
              productDatas.imgUrl.length > 1
                ? productDatas.imgUrl[0]
                : productDatas.imgUrl
            }
          ></ProductImage>
          <ProductDetails>
            <ProductTitle>{productDatas.title}</ProductTitle>
            <ProductItems>
              {state.total ? state.total.totalCount : state.count}개
            </ProductItems>
            <ProductPrice>{productPrice}원</ProductPrice>
          </ProductDetails>
        </ProductInfos>
        <UserForm onSubmit={handleSubmit}>
          <UserFormContainer>
            <UserAddressAndPayment>
              <ShipMentTitle>배송지</ShipMentTitle>
              <OrdererInfoCheckWrapper>
                <InfoCheck type={'checkbox'}></InfoCheck>
                <InfoTitle>주문자 정보와 동일</InfoTitle>
              </OrdererInfoCheckWrapper>
              <NameAndNumberWrapper>
                <NameInput placeholder="성함" type={'text'}></NameInput>
                <PhoneNumberInput
                  placeholder="연락처"
                  type={'text'}
                ></PhoneNumberInput>
              </NameAndNumberWrapper>
              <ZipCodeWrapper>
                <ZipCodeInput
                  onChange={handleZipCode}
                  value={inputZipCodeValue}
                  placeholder="우편번호"
                  type={'text'}
                ></ZipCodeInput>
                <ZipCodeFindButton onClick={handleModal}>
                  주소찾기
                </ZipCodeFindButton>
              </ZipCodeWrapper>
              <AddressInput
                onChange={handleAddress}
                value={inputAddressValue}
                placeholder="주소"
                type={'text'}
              ></AddressInput>
              <DetailAddressInput
                placeholder="상세주소"
                type={'text'}
              ></DetailAddressInput>
              <RequestsTitle>요청사항</RequestsTitle>
              <RequestSelect>
                <option value="요청사항을 선택해 주세요.">
                  요청사항을 선택해 주세요.
                </option>
                <option value="집 앞에 두고 가주세요.">
                  집 앞에 두고 가주세요.
                </option>
                <option value="부재시 경비실에 맡겨놔주세요.">
                  부재시 경비실에 맡겨놔주세요.
                </option>
                <option value="부재시 전화나 문자를 남겨주세요.">
                  부재시 전화나 문자를 남겨주세요.
                </option>
              </RequestSelect>
              <PayMethodContainer>
                <PayMethodTitle>결제수단</PayMethodTitle>
                <PayMethodWrapper>
                  <PayWithCard>
                    <input type="checkbox" />
                    <span>카드결제</span>
                  </PayWithCard>
                  <PayWithDirect>
                    <input type="checkbox" />
                    <span>무통장입금</span>
                  </PayWithDirect>
                </PayMethodWrapper>
                <PayAssignmentContainer>
                  <AllCheck>
                    <input type="checkbox" />
                    <span>
                      주문 내용을 확인하였으며, 정보 제공 등에 동의합니다. (전체
                      동의)
                    </span>
                  </AllCheck>
                  <UserCheck>
                    <input type="checkbox" />
                    <span>개인정보 수집 및 이용 동의</span>
                    <span className="condition">약관보기</span>
                  </UserCheck>
                  <ConditionCheck>
                    <input type="checkbox" />
                    <span>구매조건 확인 및 결제진행에 동의</span>
                  </ConditionCheck>
                </PayAssignmentContainer>
              </PayMethodContainer>
              <PostCodeWrapper ref={modalRef} modalState={modalState}>
                <PostCodeHeader>
                  <XbuttonIcon onClick={handleXbutton}></XbuttonIcon>
                </PostCodeHeader>
                <DaumPostcode
                  style={postCodeStyle}
                  onComplete={onCompletePost}
                ></DaumPostcode>
              </PostCodeWrapper>
            </UserAddressAndPayment>
            <UserInfosAndPayDetail>
              <UserInfos>
                <UserInfosTitle>주문자 정보</UserInfosTitle>
                <UserInfosOrderer>
                  <div className="title">주문자 이름</div>
                  <div className="infos">{orderInfos.name}</div>
                </UserInfosOrderer>
                <UserInfosPhoneNumber>
                  <div className="title">연락처</div>
                  <div className="infos">{orderInfos.phoneNumber}</div>
                </UserInfosPhoneNumber>
              </UserInfos>
              <PayDetail>
                <PayDetailTitle>결제상세</PayDetailTitle>
                <PayDetails>
                  <ProductPrices className="spaceBetween">
                    <div>상품금액</div>
                    <div>{productPrice}원</div>
                  </ProductPrices>
                  <ShipMent className="spaceBetween">
                    <div>배송비</div>
                    <div>{shipMentPrice}원</div>
                  </ShipMent>
                </PayDetails>
                <PayTotal className="spaceBetween">
                  <div className="title">총 주문금액</div>
                  <div className="infos">{productPrice + shipMentPrice}원</div>
                </PayTotal>
              </PayDetail>
            </UserInfosAndPayDetail>
          </UserFormContainer>
          <PayButton>결제하기</PayButton>
        </UserForm>
      </ProductContainer>
    </Container>
  );
};

export default ProductOrder;

const Container = styled.div`
  width: 1024px;
  height: 1054px;
  margin: auto;
  padding: 50px 75px;
  border: 1px solid ${({ theme }) => theme.colors.BORDER_COLOR};
  margin-top: 50px;
  margin-bottom: 100px;
  border-radius: 20px;
  text-align: center;
  position: relative;
`;

const ModalBlock = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.BLACK};
  opacity: 0.5;
  position: absolute;
  display: ${({ modalState }) => (modalState ? 'block' : 'none')};
  top: 0;
  left: 0;
`;

const ProductContainer = styled.div``;

const ProductInfos = styled.div`
  display: flex;
  padding-bottom: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.PRODUCT_BORDER_BOTTOM};
  margin-bottom: 30px;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 15px;
  margin-right: 20px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ProductTitle = styled.div`
  margin-bottom: 4px;
`;

const ProductItems = styled.div`
  margin-bottom: 4px;
`;

const ProductPrice = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const UserForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const UserFormContainer = styled.div`
  display: flex;
`;

const UserAddressAndPayment = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  width: 60%;
  input {
    padding: 7px 12px;
    border: 1px solid ${({ theme }) => theme.colors.LIGHT_GRAY};
  }
  input::placeholder {
    color: ${({ theme }) => theme.colors.LIGHT_GRAY};
  }
`;

const ShipMentTitle = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
  text-align: start;
  font-size: 20px;
`;

const OrdererInfoCheckWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const InfoCheck = styled.input`
  margin-right: 10px;
`;

const InfoTitle = styled.div``;

const NameAndNumberWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 12px;
`;

const NameInput = styled.input`
  margin-right: 10px;
  width: 50%;
`;

const PhoneNumberInput = styled.input`
  width: 50%;
`;

const ZipCodeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const ZipCodeInput = styled.input`
  width: 30%;
  margin-right: 10px;
`;

const ZipCodeFindButton = styled.div`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
  color: ${({ theme }) => theme.colors.WHITE};
  padding: 6px 21px;
`;

const AddressInput = styled.input`
  margin-bottom: 12px;
`;

const DetailAddressInput = styled.input`
  margin-bottom: 12px;
`;

const RequestsTitle = styled.div`
  text-align: start;
`;

const RequestSelect = styled.select`
  padding: 8px 12px;
  margin-bottom: 30px;
`;

const PayMethodContainer = styled.div`
  text-align: start;
`;

const PostCodeWrapper = styled.div`
  position: absolute;
  top: 20%;
  left: 30%;
  width: 400px;
  height: 450px;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.WHITE};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  display: ${({ modalState }) => (modalState ? 'block' : 'none')};
`;

const PostCodeHeader = styled.div`
  position: relative;
  height: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.LIGHT_GRAY};
`;

const XbuttonIcon = styled(XButton)`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  z-index: 200;
`;

const CheckButtonIcon = styled(checkButton)`
  margin-bottom: 50px;
`;

const PayMethodTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
`;

const PayMethodWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  input {
    margin-right: 10px;
    color: red;
  }
`;

const PayWithCard = styled.div``;

const PayWithDirect = styled.div`
  margin-left: 10px;
`;

const PayAssignmentContainer = styled.div``;

const AllCheck = styled.div`
  margin-bottom: 10px;
  span {
    font-weight: bold;
  }
`;

const UserCheck = styled.div`
  margin-left: 20px;
  margin-bottom: 10px;
  .condition {
    color: ${({ theme }) => theme.colors.LIGHT_GRAY};
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
  }
`;
const ConditionCheck = styled.div`
  margin-left: 20px;
`;

const UserInfosAndPayDetail = styled.div`
  width: 40%;
`;

const PayButton = styled.button`
  padding: 13px 110px;
  border-radius: 30px;
  color: ${({ theme }) => theme.colors.WHITE};
  background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
  width: fit-content;
  margin: auto;
  margin-top: 80px;
  cursor: pointer;
`;

const UserInfos = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.MAIN_COLOR};
  border-radius: 5px;
  padding: 30px;
  width: 100%;
  margin-bottom: 20px;
  text-align: start;

  .title {
    width: 40%;
  }
  .infos {
    width: 60%;
  }
`;

const UserInfosTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const UserInfosOrderer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const UserInfosPhoneNumber = styled.div`
  display: flex;
`;

const PayDetail = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.MAIN_COLOR};
  border-radius: 5px;
  padding: 30px;
  text-align: start;
  .spaceBetween {
    display: flex;
    justify-content: space-between;
  }
  .title {
  }
  .infos {
    color: ${({ theme }) => theme.colors.MAIN_COLOR};
  }
`;

const ProductPrices = styled.div`
  margin-bottom: 5px;
`;

const ShipMent = styled.div``;
const PayDetailTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const PayDetails = styled.div`
  margin-bottom: 20px;
`;

const PayTotal = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
