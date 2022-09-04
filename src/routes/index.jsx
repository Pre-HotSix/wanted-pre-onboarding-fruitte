import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  AdminEnroll,
  AdminManage,
  MainPage,
  ProductDetail,
  ProductOrder,
  ProductOrderCheck,
} from 'pages/index';

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/productorder" element={<ProductOrder />} />
        <Route path="/productordercheck" element={<ProductOrderCheck />} />
        <Route path="/adminenroll" element={<AdminEnroll />} />
        <Route path="/adminmanage" element={<AdminManage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoute;
