import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
  height: 90px;
  padding: 20px 0;
  margin: 0 auto;
  border-bottom: 1px solid #e9e9e9;

  img {
    width: auto;
    height: 50px;
    cursor: pointer;
    margin-right: 135px;
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
