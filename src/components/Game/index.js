import React from "react";
import Board from "../Board";

import styles from "./Game.module.scss";

const Game = () => {
  return (
    <section className={styles.game}>
      <div className={styles.wrapper}>
        <Board />
      </div>
    </section>
  );
};

export default Game;
