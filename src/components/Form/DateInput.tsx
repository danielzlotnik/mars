import React from 'react';

import styles from './DateForm.module.scss';

function DateInput() {
  return (
    <input
      type="text"
      id="earth-date-input"
      name="earth-date"
      placeholder="Please enter date"
      className={styles.dateInput}
    />
  );
}

export default DateInput;
