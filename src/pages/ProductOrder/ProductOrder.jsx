import React from 'react';
import styled from 'styled-components';
import productData from '../../constants/productData.json';
import ordererInfos from '../../constants/ordererInfos.json';
import DaumPostcode from 'react-daum-postcode';
// import { useParams } from 'react-router-dom';

const ProductOrder = () => {
  // const { id } = useParams();
  const productDatas = productData[0];

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
  };

  const shipMentPrice = 2500;

  const howMany = 1;
  const productPrice = productDatas.price.sale * howMany;

  const onCompletePost = data => {
    console.log(data);
    setAddress(data.address);
  };
  return (
    <Container>
      <PayTitle>결제하기</PayTitle>
      <ProductContainer>
        <ProductInfos>
          <ProductImage src={productDatas.imgUrl}></ProductImage>
          <ProductDetails>
            <ProductTitle>{productDatas.title}</ProductTitle>
            <ProductItems>{howMany}개</ProductItems>
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
                <ZipCodeInput placeholder="연락처" type={'text'}></ZipCodeInput>
                <ZipCodeFindButton>주소찾기</ZipCodeFindButton>
              </ZipCodeWrapper>
              <AddressInput placeholder="주소" type={'text'}></AddressInput>
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
              </PayMethodContainer>
              {/* <DaumPostcode onComplete={onCompletePost} autoClose></DaumPostcode> */}
            </UserAddressAndPayment>
            <UserInfosAndPayDetail>
              <UserInfos>
                <UserInfosTitle>주문자 정보</UserInfosTitle>
                <UserInfosOrderer>
                  <div className="title">주문자 이름</div>
                  <div className="infos">{ordererInfos.name}</div>
                </UserInfosOrderer>
                <UserInfosPhoneNumber>
                  <div className="title">연락처</div>
                  <div className="infos">{ordererInfos.phoneNumber}</div>
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
`;

const PayTitle = styled.div`
  color: ${({ theme }) => theme.colors.MAIN_COLOR};
  margin: auto;
  margin-bottom: 50px;
`;

const ProductContainer = styled.div``;

const ProductInfos = styled.div`
  display: flex;
  padding-bottom: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.PRODUCT_BORDER_BOTTOM};
  margin-bottom: 30px;
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

const ProductTitle = styled.div``;

const ProductItems = styled.div``;

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

const RequestsTitle = styled.div``;

const RequestSelect = styled.select`
  padding: 8px 12px;
  margin-bottom: 30px;
`;

const PayMethodContainer = styled.div`
  text-align: start;
`;

const PayMethodTitle = styled.div``;

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
