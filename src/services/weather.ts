import { DataPoint } from '@/components/Weather/types';

interface RawDataPoint {
  point: number;
  AT: { av: number };
  HWS: { av: number };
  PRE: { av: number };
  First_UTC: string;
  Last_UTC: string;
}

const data = {
  AT: { av: -71.233 },
  HWS: { av: 4.35 },
  PRE: { av: 761.006 },
  First_UTC: '2019-08-19T08:03:59Z',
  Last_UTC: '2019-08-20T08:43:34Z',
};

export async function getWeather(): Promise<RawDataPoint[]> {
  const result = Array.from({ length: 34 }).map((_, index) => {
    return { point: index, ...data };
  });
  return Promise.resolve(result);
}

export function convert(rawData: RawDataPoint[]): DataPoint[] {
  return rawData.map((item, index) => ({
    point: index,
    AT: item.AT,
    HWS: item.HWS,
    PRE: item.PRE,
    firstDate: item.First_UTC,
    lastDate: item.Last_UTC,
  }));
}
