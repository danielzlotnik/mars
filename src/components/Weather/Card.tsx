import { DataPoint } from '@/components/Weather/types';

import styles from './Card.module.scss';

function WeatherCard({ point, AT, HWS, PRE, firstDate, lastDate }: DataPoint) {
  return (
    <div className={styles.card}>
      <Row title="Data Point:" value={point} />
      <Row title="Temperature[AVG]:" value={AT.av} />
      <Row title="Wind[AVG]:" value={HWS.av} />
      <Row title="Pressure[AVG]:" value={PRE.av} />
      <Row title="First UTC:" value={`"${firstDate}"`} />
      <Row title="Last UTC:" value={`"${lastDate}"`} />
    </div>
  );
}

function Row({ title, value }: { title: string; value: number | string }) {
  return (
    <div className={styles.row}>
      <strong>{title}</strong>
      <span className={styles.rowValue}>{value}</span>
    </div>
  );
}
export default WeatherCard;
