import styled from 'styled-components';
import { AiOutlineHome } from 'react-icons/ai';

export const Container = styled.section`
  width: 1200px;
  height: auto;
  padding: 20px;
  margin: 0 auto;
  background: #d7ebc2;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 50px;
`;
export const Logo = styled.img`
  display: block;
  width: 164px;
  height: 45px;
  margin-top: 15px;
  margin-bottom: 45px;
`;
export const Sidebar = styled.nav`
  position: relative;
  width: 200px;
  min-width: 200px;
  height: 100%;
  padding-left: 5px;
  overflow-x: hidden;
  overflow-y: hidden;
  ul {
    width: 100%;
    padding-left: 5px;
    margin: 0;
    li {
      position: relative;
      width: 100%;
      height: 50px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      color: #222;
      padding-left: 15px;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      &.active {
        background: #fff;
        color: #2a750e;
        &::before {
          content: '';
          position: absolute;
          top: -40px;
          right: 0;
          width: 40px;
          height: 40px;
          background: #d7ebc2;
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
          background: #d7ebc2;
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
export const HomeIcon = styled(AiOutlineHome)`
  width: 20px;
  height: 20px;
`;
export const Article = styled.article`
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

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #a9a9a9;
  margin: 20px 0;
`;
