import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Footer, Header } from 'components';

const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <Outlet />
      <Footer />
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Layout;
