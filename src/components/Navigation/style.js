import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
  img {
    width: 12.7%;
    margin-left: 8.33%;
    margin-right: 9.375%;
    cursor: pointer;
  }
`;
export const TapLink = styled.p`
  font-size: 1.5vmin;
  cursor: pointer;
  margin-right: 44px;
  color: ${prop => (prop.isPath ? '#4C9C2E' : 'black')};
  &:hover {
    opacity: 0.6;
    color: greenyellow;
  }
`;
