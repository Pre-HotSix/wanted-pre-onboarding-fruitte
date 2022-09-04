import * as S from './style';
import { imgs } from 'constants';

export default function Footer() {
  return (
    <S.Container>
      <S.Inner>
        <img src={imgs.logo} alt="" />
        <p>상호명: Local & Life Inc. | 대표: 홍인기</p>
        <p>
          전화번호: 010-8828-0472 | 사업자번호: 625-81-01879 | 통신판매허가번호:
          2020-서울동대문-1110
        </p>
        <p>주소: 서울시 동대문구 회기로85 한국과학기술원 9호관 9402호</p>
        <p>Copyright ⓒ 2022 프루떼-오늘도프룻해! All rights reserved.</p>
      </S.Inner>
    </S.Container>
  );
}
