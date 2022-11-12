import React from 'react';
import Square from '../Square';

import styles from './Board.module.scss'

const Board = () => {
  return (
    <div className={styles.board}>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
    </div>
  );
}

export default Board;
