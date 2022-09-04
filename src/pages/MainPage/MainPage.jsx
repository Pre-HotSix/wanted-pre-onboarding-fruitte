import { useState } from 'react';
import * as S from './style';
import {
  Navigation,
  TextBanner,
  ProductBlock,
  Pagination,
  Footer,
} from 'components';
import { dummies } from 'constants/dummy';

export default function MainPage() {
  const [boardData, setBoardData] = useState(dummies);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * 10;

  return (
    <>
      <Navigation />
      <TextBanner
        img={
          'https://cdn.imweb.me/upload/S201907022014f7de8adf6/075897ae563f4.png'
        }
        content1={`프루떼 [수확배송]`}
        content2={
          '친환경 농가의 맛있고 바른 먹거리를 만났을때 게릴라로 열리는 프루떼의 반짝스토어'
        }
        content3={
          '가장 알맞게 익었을때 농장에서 바로! 수확해서 배송해드립니다.'
        }
      />
      <S.Container>
        <div>
          <span>FRUITTE STORE</span>
          <span>{boardData.length}</span>
        </div>
        {boardData.slice(offset, offset + 10).map(item => (
          <ProductBlock data={item} key={item.id} />
        ))}
        <Pagination
          total={boardData.length}
          limit={10}
          page={page}
          setPage={setPage}
        />
      </S.Container>
      <Footer />
    </>
  );
}
