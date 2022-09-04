import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  font-size: 1.4vmin;
  img {
    width: 2.43%;
    margin-bottom: 1%;
  }
  span:nth-child(2) {
    font-weight: 700;
    font-size: 2vmin;
    margin-bottom: 3%;
  }
`;
