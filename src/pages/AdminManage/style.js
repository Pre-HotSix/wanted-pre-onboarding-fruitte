import styled from 'styled-components';
import { AiOutlineHome } from 'react-icons/ai';

export const Container = styled.section`
  width: 1200px;
  height: calc(100vh - 90px);
  padding: 20px;
  margin: 0 auto;
  background: #d7ebc2;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
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

  .table {
    width: 100%;
    height: calc(100% - 80px);
    overflow: hidden;
    overflow-y: auto;
    .row {
      width: 100%;
      text-align: center;
      display: grid;
      grid-template-columns: 1fr 360px 0.8fr 0.8fr 1fr 0.5fr 0.8fr;
      font-size: 14px;
      font-weight: bold;
      align-items: center;
    }
    > .row {
      margin-bottom: 20px;
    }
    .column {
      .row {
        border: 1px solid #4c9c2e;
        margin-bottom: 15px;
        text-align: center;
        padding: 10px 0;
        &:last-of-type {
          margin-bottom: 0;
        }
        > span {
          width: 100%;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          &:nth-of-type(2) {
            .contentImg {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              margin-right: 20px;
            }
            .contenttitle {
              text-align: left;
              width: 300px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
          }
          &:nth-of-type(5) {
            span {
              cursor: pointer;
              width: 30px;
              height: 30px;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            input {
              -webkit-appearance: none; /* remove default */
              display: block;
              width: 30px;
              height: 30px;
              border-radius: 50%;
              cursor: pointer;
              border: 2px solid #db1508;
              background-color: #fff;
              background-image: -webkit-radial-gradient(
                rgb(75, 255, 20) 0%,
                rgb(75, 255, 20, 1) 15%,
                rgb(75, 255, 20, 0.3) 28%,
                rgb(75, 255, 20, 0) 70%
              );
              background-repeat: no-repeat;
              outline: none;
              &:nth-of-type(1) {
                border: 2px solid #3abf08;
              }
            }

            input,
            input:active {
              background-position: 0 24px;
            }
            input:checked {
              background-position: 0 0;
              border: 2px solid #3abf08;
              &:nth-of-type(2) {
                border: 2px solid #db1508;
                background-image: -webkit-radial-gradient(
                  rgb(222, 0, 0) 0%,
                  rgb(222, 0, 0, 1) 15%,
                  rgb(222, 0, 0, 0.3) 28%,
                  rgb(222, 0, 0, 0) 70%
                );
              }
            }
            input:checked ~ input,
            input:checked ~ input:active {
              background-position: 0 -24px;
            }
          }
        }
        .edit,
        .delete {
          cursor: pointer;
        }
        .edit:hover,
        .delete:hover {
          color: #f88720;
        }
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
