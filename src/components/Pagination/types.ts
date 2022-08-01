import { Dispatch, SetStateAction } from 'react';

export interface Pagination extends PaginationProps {
  startIndex: number;
  endIndex: number;
}

export interface PaginationProps {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  prev: () => void;
  next: () => void;
  totalPages: number;
  isLastPage: boolean;
  isFirstPage: boolean;
}
