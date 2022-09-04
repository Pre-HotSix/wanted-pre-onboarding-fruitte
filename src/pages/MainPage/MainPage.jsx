
import * as S from './style';
import {
  Navigation,
  TextBanner,
  ProductBlock,
  Pagination,
  Footer,
} from 'components';
import { useRecoilValue } from 'recoil';
import { productState } from 'recoil/product';
import { usePagination } from 'hooks/usePagination';

export default function MainPage() {
  const boardData = useRecoilValue(productState);
  const filteredBoard = boardData.filter(item => item.sale);
  const { page, setPage, limit, offset } = usePagination();

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
          <span>{filteredBoard.length}</span>
        </div>
        {filteredBoard
          .slice(offset, offset + limit)
          .map(item => item.sale && <ProductBlock data={item} key={item.id} />)}
        <Pagination
          total={filteredBoard.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </S.Container>
      <Footer />
    </>
  );
}
