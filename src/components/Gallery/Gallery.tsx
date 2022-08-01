import React, { useEffect, useRef, useState } from 'react';

import Control, { Direction } from '@/components/Gallery/Control';
import ChevronLeft from '@/components/Icons/ChevronLeft';
import ChevronRight from '@/components/Icons/ChevronRight';
import Image from '@/components/Image';
import { ImageProps } from '@/components/Image/types';
import usePagination from '@/components/Pagination/usePagination';
import { Size } from '@/types';

import styles from './Gallery.module.scss';

interface GalleryProps {
  children?: React.ReactNode;
  size: Size;
  images: ImageProps[];
}

/**
 *
 * @param children
 * @param size - width and height of each item, according to which the gallery would paginate
 * @param items - will be rendered according to the given size, intrinsic size will be ignored
 * @constructor
 */
function Gallery({ children, size, images }: GalleryProps) {
  const [pageSize, setPageSize] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const { currentPage, prev, next, totalPages, isLastPage, isFirstPage, startIndex, endIndex } =
    usePagination({ total: images.length, pageSize });

  const pageItems = images.slice(startIndex, endIndex);

  const calculatePageSize = () => {
    if (!trackRef.current) return;
    const carouselDimensions = trackRef.current.getBoundingClientRect();
    const inferredSize = Math.ceil(carouselDimensions.width / size.width);
    setPageSize(inferredSize);
  };

  useEffect(calculatePageSize, [trackRef, size.width]);

  useEffect(() => {
    window.addEventListener('resize', calculatePageSize);
    return () => window.removeEventListener('resize', calculatePageSize);
  }, []);

  return (
    <>
      <div className={styles.gallery}>
        {!isFirstPage && (
          <Control onClick={prev} ariaLabel="previous images" direction={Direction.left}>
            <ChevronLeft />
          </Control>
        )}

        <div ref={trackRef} className={styles.track}>
          {pageItems.map(image => (
            <Image key={image.id} {...image} width={size.width} height={size.height} />
          ))}
        </div>

        {!isLastPage && (
          <Control onClick={next} ariaLabel="next images" direction={Direction.right}>
            <ChevronRight />
          </Control>
        )}
      </div>
      <div className={styles.pagination}>
        Page {currentPage + 1} / {totalPages}
      </div>
    </>
  );
}

export default Gallery;
