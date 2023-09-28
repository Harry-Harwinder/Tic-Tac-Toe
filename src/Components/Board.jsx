import { useState, useEffect } from "react";
import Square from "./Square";
import ShowLine from "./ShowLine";
export default function Board() {
  const [squareData, setSquareData] = useState(Array(9).fill(null));
  const [xIsTurn, setXIsTurn] = useState(true);
  const [winner, setWinner] = useState(null);
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
  function checkWinner() {
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (
        squareData[a] !== null &&
        squareData[a] === squareData[b] &&
        squareData[a] === squareData[c]
      ) {
        return logic;
      }
    }
    return false;
  }
  useEffect(() => {
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (
        squareData[a] !== null &&
        squareData[a] === squareData[b] &&
        squareData[a] === squareData[c]
      )
        for (let combination of winnerLogic) {
          if (JSON.stringify(logic) === JSON.stringify(combination)) {
            setWinner(logic);
            break;
          }
        }
      if (!isWinner) {
        setWinner(null);
      }
    }
  }, [squareData]);

  const isWinner = checkWinner();

  function handleClick(index) {
    if (isWinner || squareData[index] !== null) {
      return;
    }
    const copystateSquareData = [...squareData];
    (copystateSquareData[index] = xIsTurn ? "X" : "0"),
      setSquareData(copystateSquareData);
    setXIsTurn(!xIsTurn);
  }

  function handlePlayAgain() {
    setSquareData(Array(9).fill(null));
    setXIsTurn(true);
    setWinner(null);
  }

  function isBoardFull() {
    return squareData.every((square) => square !== null);
  }
  return (
    <div className="board-container">
      <div className="title">
        <span>TIC-TAC-TOE</span>
      </div>
      {!isWinner && !isBoardFull() ? (
        <>
          {" "}
          <span className="board-row">
            <span style={{ backgroundColor: "skyblue" }}>
              Player {xIsTurn ? "X" : "0"} Please Move
            </span>
          </span>
        </>
      ) : null}
      {isWinner ? (
        <>
          <div style={{ marginLeft: "540px" }}>
            <span style={{ backgroundColor: "skyblue" }}>
              Player {squareData[isWinner[0]]} is Winner
            </span>
            <button className="btn-pl-again" onClick={handlePlayAgain}>
              Play Again
            </button>
          </div>
        </>
      ) : (
        <></>
      )}

      {!isWinner && isBoardFull() ? (
        <div style={{ marginLeft: "540px" }}>
          <span style={{ backgroundColor: "skyblue" }}>The Game Is Draw</span>
          <button className="btn-pl-again" onClick={handlePlayAgain}>
            Play Again
          </button>
        </div>
      ) : (
        <></>
      )}
      <div className="board">
        {Array.from({ length: 3 }, (_, rowIndex) => (
          <div key={rowIndex} className="board-row">
            {Array.from({ length: 3 }, (_, colIndex) => {
              const index = rowIndex * 3 + colIndex;
              return (
                <Square
                  key={index}
                  onClick={() => handleClick(index)}
                  value={squareData[index]}
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
