// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useState } from "react";
import Square from "./Square";
import ShowLine from "./ShowLine";
export default function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [xIsTurn, setXIsTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  function checkWinner() {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return logic;
      }
    }
    return false;
  }
  useEffect(() => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        if (JSON.stringify(logic) === JSON.stringify([6, 7, 8])) {
          setWinner(logic);
        } else if (JSON.stringify(logic) === JSON.stringify([3, 4, 5])) {
          setWinner(logic);
        } else if (JSON.stringify(logic) === JSON.stringify([0, 1, 2])) {
          setWinner(logic);
        } else if (JSON.stringify(logic) === JSON.stringify([0, 3, 6])) {
          setWinner(logic);
        } else if (JSON.stringify(logic) === JSON.stringify([1, 4, 7])) {
          setWinner(logic);
        } else if (JSON.stringify(logic) === JSON.stringify([2, 5, 8])) {
          setWinner(logic);
        } else if (JSON.stringify(logic) === JSON.stringify([0, 4, 8])) {
          setWinner(logic);
        } else if (JSON.stringify(logic) === JSON.stringify([2, 4, 6])) {
          setWinner(logic);
        } else {
          setWinner(null);
        }
        break;
      }
    }
  }, [state]);
  const isWinner = checkWinner();

  function handleClick(index) {
    if (isWinner || state[index] !== null) {
      return;
    }
    const copyState = [...state];
    (copyState[index] = xIsTurn ? "X" : "0"), setState(copyState);
    setXIsTurn(!xIsTurn);
  }

  function handlePlayAgain() {
    setState(Array(9).fill(null));
    setXIsTurn(true);
    setWinner(null);
  }

  function isBoardFull() {
    return state.every((square) => square !== null);
  }
  return (
    <div className="board-container">
      <h2 style={{ marginLeft: "580px" }}>Tic-Tac-Toe</h2>

      <h4 className="board-row">
        <span style={{ backgroundColor: "skyblue" }}>
          Player {xIsTurn ? "X" : "0"} Please Move
        </span>
      </h4>
      {isWinner && (
        <>
          <div style={{ marginLeft: "540px" }}>
            {/* <h2>Winning Result</h2> */}
            <span style={{ backgroundColor: "skyblue" }}>
              Player {state[isWinner[0]]} is Winner
            </span>
            <button style={{ marginLeft: "10px" }} onClick={handlePlayAgain}>
              Play Again
            </button>
          </div>
        </>
      )}
      {!isWinner && isBoardFull() && (
        <div style={{ marginLeft: "530px" }}>
          <h2>The game is a draw.</h2>
          <button onClick={handlePlayAgain}>Play Again</button>
        </div>
      )}
      <br />
      <div className="board">
        {Array.from({ length: 3 }, (_, rowIndex) => (
          <div key={rowIndex} className="board-row">
            {Array.from({ length: 3 }, (_, colIndex) => {
              const index = rowIndex * 3 + colIndex;
              console.log(index);
              return (
                <Square
                  key={index}
                  onClick={() => handleClick(index)}
                  value={state[index]}
                  isWinningSquare={isWinner && isWinner.includes(index)}
                />
              );
            })}
          </div>
        ))}
      </div>
      <ShowLine winner={winner} />
    </div>
  );
}
