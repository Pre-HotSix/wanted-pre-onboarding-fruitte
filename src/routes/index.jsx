import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  AdminEnroll,
  AdminManage,
  MainPage,
  ProductDetail,
  ProductOrder,
  ProductOrderCheck,
} from 'pages/index';
import { Layout, AdminLayout } from 'components';

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/productdetail" element={<ProductDetail />}>
            <Route path=":docId" element={<ProductDetail />} />
          </Route>
          <Route path="/productorder" element={<ProductOrder />}>
            <Route path=":Id" element={<ProductDetail />} />
          </Route>
          <Route path="/productordercheck" element={<ProductOrderCheck />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/adminenroll" element={<AdminEnroll />} />
          <Route path="/adminmanage" element={<AdminManage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoute;
