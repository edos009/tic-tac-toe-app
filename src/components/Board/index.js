import React from "react";
import Square from "../Square";

import styles from "./Board.module.scss";

const Board = ({ board, xIsNext, click }) => {
  return (
    <div className={styles.board}>
      {board.map((elem, index) => (
        <Square key={index} value={elem} click={() => click(index)}/>
      ))}
    </div>
  );
};

export default Board;
