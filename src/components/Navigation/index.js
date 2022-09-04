import { useLocation, useNavigate } from 'react-router-dom';
import { imgs } from 'constants';
import * as S from './style';

export default function Navigation() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const storePath =
    '/' || '/productdetail' || '/productorder' || 'productordercheck';
  const adminPath = 'adminenroll' || 'adminmanage';

  return (
    <S.Container>
      <img onClick={() => navigate('/')} src={imgs.logo} alt="" />
      <S.TapLink
        isPath={pathname === storePath ? true : false}
        onClick={() => navigate('/')}
      >
        STORE
      </S.TapLink>
      <S.TapLink
        isPath={pathname === adminPath ? true : false}
        onClick={() => navigate('/adminmanage')}
      >
        ADMIN
      </S.TapLink>
    </S.Container>
  );
}
