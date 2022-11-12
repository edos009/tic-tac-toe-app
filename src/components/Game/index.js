import React, { useState, useEffect } from "react";

import Board from "../Board";
import calculateWinner from "../../functions/calculateWinner";

import styles from "./Game.module.scss";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const [winX, setWinX] = useState(0);
  const [winO, setWinO] = useState(0);
  const [draw, setDraw] = useState(0);

  const handleClick = (index) => {
    const boardCopy = [...board];

    if (winner || boardCopy[index]) {
      return;
    }

    boardCopy[index] = xIsNext ? "X" : "O";

    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const startNewGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  useEffect(() => {
    const possibleWinner = calculateWinner(board);
    if (possibleWinner) {
      if (possibleWinner === "X") {
        setWinX((prev) => prev + 1);
      } else {
        setWinO((prev) => prev + 1);
      }
      setWinner(possibleWinner);
    }
    if (!board.includes(null) && !possibleWinner) {
      setDraw((prev) => prev + 1);
    }
  }, [board]);

  const resetScore = () => {
    setWinX(0);
    setWinO(0);
    setDraw(0);
  };

  return (
    <section className={styles.game}>
      <div className={styles.wrapper}>
        <h2 className={styles.score_title}>Score</h2>
        <div className={styles.box_score}>
          <p
            className={styles.score_text}
          >{`X: ${winX} | O: ${winO} | Draw: ${draw}`}</p>
          <button className={styles.btn_reset_score} onClick={resetScore}>
            Reset
          </button>
        </div>
        <Board board={board} xIsNext={xIsNext} click={handleClick} />
        <p className={styles.text}>
          {winner
            ? `Won: ${winner}`
            : !board.includes(null)
            ? "Draw"
            : `Now walking: ${xIsNext ? "X" : "O"}`}
        </p>
        <button className={styles.new_game} onClick={startNewGame}>
          Start Over
        </button>
      </div>
    </section>
  );
};

export default Game;
