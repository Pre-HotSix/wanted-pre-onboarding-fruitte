import styled from 'styled-components';

export const ProductRow = styled.div`
  font-size: 1vmin;
  display: flex;
  width: 100%;
  margin: 20px 0;
  padding-bottom: 1.5%;
  border-bottom: 1px solid black;
  &:hover {
    opacity: 0.6;
  }
  cursor: pointer;
`;
export const ImgCol = styled.div`
  display: flex;
  width: 20%;
  img {
    width: 100%;
    border-radius: 20px;
  }
`;
export const ContentCol = styled.div`
  position: relative;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  width: 60%;
  font-size: 1vmin;
  & > span:first-child {
    opacity: 0.6;
  }
  & > span:nth-child(2) {
    font-size: 2vmin;
    margin-bottom: 5px;
  }
  & > span:nth-child(3) {
    opacity: 0.3;
    text-decoration: line-through;
    font-size: 1.3vmin;
  }
  & > span:nth-child(4) {
    font-size: 1.5vmin;
    color: #fe5356;
  }
  & > .delivery {
    bottom: 0;
    font-size: 1.1vmin;
    display: block;
    p {
      margin: 0;
    }
  }
`;
