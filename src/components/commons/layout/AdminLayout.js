import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from 'components';

const AdminLayout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <Outlet />
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default AdminLayout;
