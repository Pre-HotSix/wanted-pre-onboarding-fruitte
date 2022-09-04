import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #778b70;
  padding: 60px 0;
`;
export const Inner = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  img {
    width: 183px;
    height: 50px;
    margin-bottom: 20px;
  }
  p {
    margin: 0;
    color: white;
    font-size: 1vmin;
  }
  p:last-child {
    margin-top: 2%;
  }
`;
