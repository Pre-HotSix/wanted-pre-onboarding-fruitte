import * as S from './style';
import React from 'react';
import AdminEnrollForm from 'components/Form/AdminEnrollForm';

const AdminEnroll = () => {
  return (
    <S.Container>
      <S.Sidebar>
        <S.Logo src="/images/logo.png" />
        <ul>
          <li className="list active">
            <S.HomeIcon />
            <span className="title">Home</span>
          </li>
        </ul>
      </S.Sidebar>
      <S.Article>
        <div className="topWrap">
          <h2 className="title">상품 등록</h2>
        </div>
        <S.Line />
        <AdminEnrollForm />
      </S.Article>
    </S.Container>
  );
};

export default AdminEnroll;
