import clsx from 'clsx';

import ChevronLeft from '@/components/Icons/ChevronLeft';
import ChevronRight from '@/components/Icons/ChevronRight';
import { PaginationProps } from '@/components/Pagination/types';

import styles from './Pagination.module.scss';

function Pagination({
  totalPages,
  currentPage,
  next,
  prev,
  setCurrentPage,
  isFirstPage,
  isLastPage,
}: PaginationProps) {
  const createClickHandler = (index: number) => () => setCurrentPage(index);

  if (!totalPages) return null;

  return (
    <div className={styles.pagination}>
      <button className={styles.pageButton} onClick={prev} disabled={isFirstPage}>
        <ChevronLeft />
      </button>
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          className={clsx({
            [styles.pageButton]: true,
            [styles.highlight]: currentPage === index,
          })}
          onClick={createClickHandler(index)}
        >
          {index + 1}
        </button>
      ))}
      <button className={styles.pageButton} onClick={next} disabled={isLastPage}>
        <ChevronRight />
      </button>
    </div>
  );
}

export default Pagination;
