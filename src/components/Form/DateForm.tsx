import React from 'react';

import DateInput from '@/components/Form/DateInput';

import styles from './DateForm.module.scss';

function DateForm({ onSubmit }: { onSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void }) {
  return (
    <div className={styles.dateFormWrapper}>
      <label htmlFor="earth-date">Earth date:</label>
      <form onSubmit={onSubmit} className={styles.dateForm}>
        <DateInput />
        <button type="submit" className={styles.submitButton}>
          Search
        </button>
      </form>
    </div>
  );
}

export default DateForm;
