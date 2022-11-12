import React from 'react';

import styles from './Square.module.scss'

const Square = ({click, value}) => {
  return (
    <button className={styles.square} onClick={click}>
      {value}
    </button>
  );
}

export default Square;
