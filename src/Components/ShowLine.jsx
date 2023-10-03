import PropTypes from "prop-types";
import {
  winningCombinations3x3,
  winningCombinations4x4,
  winningCombinations5x5,
  winningCombinations6x6,
  winningCombinations7x7,
} from "./WinningCombinations";

ShowLine.propTypes = {
  winner: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default function ShowLine({ winner }) {
  const getWinnerCombination = (winner_1, combinations_1) =>
    combinations_1.find(
      ({ combination }) =>
        JSON.stringify(winner_1) === JSON.stringify(combination)
    );

  const winnerCombination3X3 = getWinnerCombination(
    winner,
    winningCombinations3x3
  );
  const winnerCombination4x4 = getWinnerCombination(
    winner,
    winningCombinations4x4
  );
  const winnerCombination5x5 = getWinnerCombination(
    winner,
    winningCombinations5x5
  );
  const winnerCombination6x6 = getWinnerCombination(
    winner,
    winningCombinations6x6
  );
  const winnerCombination7x7 = getWinnerCombination(
    winner,
    winningCombinations7x7
  );

  const classNameToShow =
    winnerCombination3X3?.className ||
    winnerCombination4x4?.className ||
    winnerCombination5x5?.className ||
    winnerCombination6x6?.className ||
    winnerCombination7x7?.className;
    console.log("winner:", winner);
    console.log("classNameToShow:", classNameToShow);
  return (
    classNameToShow && (
      <div>
        <div className={classNameToShow}></div>
      </div>
    )
  );
}
