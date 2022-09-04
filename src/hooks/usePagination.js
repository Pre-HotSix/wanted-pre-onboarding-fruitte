import { useState } from 'react';

export const usePagination = () => {
  const [page, setPage] = useState(1);
  const limit = 10;
  const offset = (page - 1) * limit;

  return { page, limit, offset, setPage };
};
