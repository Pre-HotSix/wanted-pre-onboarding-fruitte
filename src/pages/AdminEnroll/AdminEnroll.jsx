import styled from 'styled-components';
import React from 'react';
import AdminEnrollForm from 'components/Form/AdminEnrollForm';
import { AiOutlineHome } from 'react-icons/ai';

const AdminEnroll = () => {
  return (
    <Container>
      <Navigation>
        <Logo src="/images/logo.jpeg" />
        <ul>
          <li className="list active">
            <HomeIcon />
            <span className="title">Home</span>
          </li>
        </ul>
      </Navigation>
      <Article>
        <div className="topWrap">
          <h2 className="title">상품 등록</h2>
        </div>
        <Line />
        <AdminEnrollForm />
      </Article>
    </Container>
  );
};

const Container = styled.section`
  width: 1200px;
  height: 90vh;
  padding: 20px;
  margin: 0 auto;
  background: #2a750e;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Logo = styled.img`
  display: block;
  width: 164px;
  height: 45px;
  margin-top: 15px;
  margin-bottom: 45px;
`;
const Navigation = styled.nav`
  position: relative;
  width: 216px;
  height: 100%;
  background: #2a750e;
  border-left: 5px solid #2a750e;
  overflow-x: hidden;
  ul {
    width: 100%;
    padding-left: 5px;
    margin: 0;
    li {
      position: relative;
      width: 100%;
      height: 45px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      color: #fff;
      padding-left: 15px;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      &.active {
        background: #fff;
        color: #4c9c2e;
        &::before {
          content: '';
          position: absolute;
          top: -40px;
          right: 0;
          width: 40px;
          height: 40px;
          background: #2a750e;
          border-radius: 45%;
          box-shadow: 15px 15px 0 #fff;
        }
        &::after {
          content: '';
          position: absolute;
          bottom: -40px;
          right: 0;
          width: 40px;
          height: 40px;
          background: #2a750e;
          border-radius: 45%;
          box-shadow: 15px -15px 0 #fff;
        }
      }
      .title {
        position: relative;
        display: block;
        padding-left: 8px;
        white-space: nowrap;
      }
    }
  }
`;
const HomeIcon = styled(AiOutlineHome)`
  width: 20px;
  height: 20px;
`;

const Article = styled.article`
  background-color: #fff;
  padding: 30px;
  border-radius: 20px;
  width: 100%;
  height: 100%;

  .topWrap {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      margin: 0;
    }
    > button {
      width: 100px;
      height: 40px;
      border-radius: 20px;
      background-color: #4c9c2e;
      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #a9a9a9;
  margin: 20px 0;
`;
export default AdminEnroll;
