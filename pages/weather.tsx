import type { NextPage } from 'next';
import React from 'react';

import Grid from '@/components/Grid';
import Page from '@/components/Page';
import Heading from '@/components/Page/Heading';
import Pagination from '@/components/Pagination/Pagination';
import usePagination from '@/components/Pagination/usePagination';
import Card from '@/components/Weather/Card';
import { DataPoint } from '@/components/Weather/types';
import { convert, getWeather } from '@/services/weather';

const Weather: NextPage<{ data: DataPoint[] }> = ({ data }) => {
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
  } = usePagination({ total: data.length, pageSize: 9 });

  const pageData = data.slice(startIndex, endIndex);

  return (
    <Page>
      <Heading>Mars Weather</Heading>
      {/* hackland */}
      <div style={{ maxWidth: 1065 }}>
        <Grid>
          {pageData.map(item => (
            <Card key={item.point} {...item} />
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
      </div>
    </Page>
  );
};

export async function getStaticProps() {
  const rawData = await getWeather();
  const data = convert(rawData);

  return {
    props: {
      data,
    },
    revalidate: 60 * 60, // Every hour
  };
}

export default Weather;
