import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #778b70;
  padding-top: 3%;
`;
export const Inner = styled.div`
  margin: 0 8.33%;
  display: flex;
  flex-direction: column;
  img {
    width: 12.7%;
    margin-bottom: 20px;
  }
  p {
    margin: 0;
    color: white;
    font-size: 1vmin;
  }
  p:last-child {
    margin-top: 2%;
    margin-bottom: 3%;
  }
`;
