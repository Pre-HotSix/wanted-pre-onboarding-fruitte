import styled from 'styled-components';

export const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
`;

export const SideImgList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-right: 25px;
  width: 100px;
  height: 100%;
  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

export const SideImgItem = styled.li`
  width: 100px;
  height: 100px;
  margin-bottom: 5px;
  border-radius: 10px;
  overflow: hidden;
  & > img {
    width: 100px;
    height: 100px;
  }
`;

export const MainImgOuterBox = styled.div`
  width: 470px;
  height: 470px;
  border-radius: 25px;
  overflow: hidden;
  @media screen and (max-width: 1280px) {
    position: absolute;
    right: 0;
  }
`;

export const MainImgInnerBox = styled.div`
  width: auto;
  height: auto;
  display: inline-flex;
  position: relative;
  & > img {
    display: block;
    width: 470px;
    height: 470px;
  }
  & > .none {
    display: none;
  }
  & > .block {
    display: block;
  }
`;
