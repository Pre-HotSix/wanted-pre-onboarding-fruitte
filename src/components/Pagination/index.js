import * as S from './style';
import PropTypes from 'prop-types';

Pagination.propTypes = {
  total: PropTypes.number,
  limit: PropTypes.number,
  page: PropTypes.number,
  setPage: PropTypes.func,
};

export default function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <S.Container>
      <S.Inner>
        <S.Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </S.Button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <S.Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? 'page' : null}
            >
              {i + 1}
            </S.Button>
          ))}
        <S.Button
          onClick={() => setPage(page + 1)}
          disabled={page === numPages}
        >
          &gt;
        </S.Button>
      </S.Inner>
    </S.Container>
  );
}
