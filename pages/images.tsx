import type { NextPage } from 'next';
import React, { useState } from 'react';

import DateForm from '@/components/Form/DateForm';
import Grid from '@/components/Grid';
import Image from '@/components/Image';
import { ImageProps } from '@/components/Image/types';
import Page from '@/components/Page';
import Heading from '@/components/Page/Heading';
import Pagination from '@/components/Pagination/Pagination';
import usePagination from '@/components/Pagination/usePagination';
import { convert, getImages } from '@/services/images';

const Images: NextPage = () => {
  const [images, setImages] = useState<ImageProps[]>([]);

  const submit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      'earth-date': { value: string };
    };
    try {
      const date = new Date(target['earth-date'].value).toISOString().split('T')[0];

      const rawImages = await getImages({ date });
      const images = convert(rawImages);

      setImages(images);
    } catch (e) {
      console.error(e);
      // TODO - proper error handling and validation
    }
  };

  const {
    currentPage,
    prev,
    next,
    totalPages,
    setCurrentPage,
    startIndex,
    endIndex,
    isFirstPage,
    isLastPage,
  } = usePagination({ total: images.length, pageSize: 15 });

  const pageItems = images.slice(startIndex, endIndex);

  return (
    <Page>
      <Heading>Mars Images By Date</Heading>
      <DateForm onSubmit={submit} />
      <Grid>
        {pageItems.map(image => (
          <Image key={image.id} {...image} width={208} height={224} />
        ))}
      </Grid>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        prev={prev}
        next={next}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
      />
    </Page>
  );
};

export default Images;
