import { useMemo, useState } from 'react';

import { Pagination } from '@/components/Pagination/types';

function usePagination({ total, pageSize }: { total: number; pageSize: number }): Pagination {
  const [currentPage, setCurrentPage] = useState(0);

  const prev = () => setCurrentPage(currentPage => currentPage - 1);
  const next = () => setCurrentPage(currentPage => currentPage + 1);

  const totalPages = Math.ceil(total / pageSize);

  const isLastPage = (currentPage + 1) * pageSize >= total;
  const isFirstPage = currentPage === 0;

  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;

  return useMemo(
    () => ({
      currentPage,
      setCurrentPage,
      prev,
      next,
      totalPages,
      isLastPage,
      isFirstPage,
      startIndex,
      endIndex,
    }),
    [currentPage, totalPages, isLastPage, isFirstPage, startIndex, endIndex]
  );
}

export default usePagination;
