import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminEnroll from '../pages/adminEnroll/adminEnroll';
import AdminManage from '../pages/adminManage/adminManage';
import MainPage from '../pages/MainPage/mainPage';
import ProductDetail from '../pages/productDetail/productDetail';
import ProductOrder from '../pages/productOrder/productOrder';
import ProductOrderCheck from '../pages/productOrderCheck/productOrderCheck';

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
