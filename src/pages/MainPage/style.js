import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 8.33%;
  display: flex;
  flex-wrap: wrap;
  & > div:first-child {
    font-size: 1.6vmin;
    span:last-child {
      margin-left: 10px;
      color: #2a750e;
    }
    margin-bottom: 20px;
  }
`;
