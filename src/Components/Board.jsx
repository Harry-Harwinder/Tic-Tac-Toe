import { useState, useEffect } from "react";
import Square from "./Square";
import ShowLine from "./ShowLine";

export default function Board() {
  const [squareData, setSquareData] = useState(Array(9).fill(null));
  const [xIsTurn, setXIsTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [boxShow, setBoxShow] = useState(true);
  const [boxCount, setBoxCount] = useState(3);
  const [, setUpdatedBoxCount] = useState(boxCount);

  useEffect(() => {
    setSquareData(Array(boxCount * boxCount).fill(null));
  }, [boxCount]);

  const generateWinnerLogic = () => {
    const rows = [];
    const cols = [];
    const diagonals = [[], []];
    for (let i = 0; i < boxCount; i++) {
      rows.push(Array.from({ length: boxCount }, (_, j) => i * boxCount + j));
      cols.push(Array.from({ length: boxCount }, (_, j) => j * boxCount + i));

      diagonals[0].push(i * (boxCount + 1));
      diagonals[1].push((i + 1) * (boxCount - 1));
    }

    return [...rows, ...cols, ...diagonals];
  };

  const winnerLogic = generateWinnerLogic();

  const handleChangeInput = (event) => {
    setBoxCount(event.target.value);
  };

  function handleBoxShow() {
    setBoxShow(false);
    setUpdatedBoxCount(boxCount);
  }

  function checkWinner() {
    for (let logic of winnerLogic) {
      const isWinner = logic.every(
        (index) =>
          squareData[index] !== null &&
          squareData[index] === squareData[logic[0]]
      );
      if (isWinner) {
        return logic;
      }
    }
    return false;
  }

  useEffect(() => {
    const isWinner = checkWinner();
    if (isWinner) {
      setWinner(isWinner);
    } else if (squareData.every((square) => square !== null)) {
      setWinner([]);
    }
  }, [squareData]);

  function handleClick(index) {
    if (winner || squareData[index] !== null) {
      return;
    }
    const copyStateSquareData = [...squareData];
    copyStateSquareData[index] = xIsTurn ? "X" : "O";
    setSquareData(copyStateSquareData);
    setXIsTurn(!xIsTurn);
  }

  function handlePlayAgain() {
    setSquareData(Array(boxCount * boxCount).fill(null));
    setXIsTurn(true);
    setWinner(null);
  }

  return (
    <div className="board-container">
      <div className="title">
        <h2>TIC-TAC-TOE</h2>

        <span className="main">
          {winner ? (
            <div
              style={{
                marginLeft: "-18px",
                marginTop: "-21px",
                marginBottom: "15px",
              }}
            >
              <span style={{ backgroundColor: "skyblue" }}>
                Player {squareData[winner[0]]} is Winner
              </span>
              <button className="btn-pl-again" onClick={handlePlayAgain}>
                Play Again
              </button>
            </div>
          ) : (
            <></>
          )}
          
          {boxShow && (
            <>
              Box Count:
              <input
                type="number"
                onChange={handleChangeInput}
                value={boxCount}
                className="inp-count"
                min="3"
                max="10"
              />
            </>
          )}
          {boxShow && <button onClick={handleBoxShow}>Start</button>}

          {!boxShow && (
            <>
              <div className="board">
                {Array.from({ length: boxCount }, (_, rowIndex) => (
                  <div key={rowIndex} className="board-row">
                    {Array.from({ length: boxCount }, (_, colIndex) => {
                      const index = rowIndex * boxCount + colIndex;

                      return (
                        <div key={index}>
                          <Square
                            value={squareData[index]}
                            onClick={() => handleClick(index)}
                            isWinningSquare={winner && winner.includes(index)}
                          />
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
              <ShowLine winner={winner} />
            </>
          )}
        </span>
      </div>
    </div>
  );
}
