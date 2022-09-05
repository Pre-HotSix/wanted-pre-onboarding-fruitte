import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 50px 0;
`;
export const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
export const Button = styled.button`
  border: none;
  border-radius: 15px;
  padding: 8px;
  margin: 0;
  font-size: 1.4vmin;
  &:hover {
    background: #4c9c2e;
    cursor: pointer;
    transform: translateY(-2px);
  }
  &[disabled] {
    opacity: 0.4;
    cursor: revert;
    transform: revert;
  }
  &[aria-current] {
    background: #4c9c2e;
    color: white;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
  &:first-child,
  :last-child {
    background-color: #d9d9d9;
  }
`;
