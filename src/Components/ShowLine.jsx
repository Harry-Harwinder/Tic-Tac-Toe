import PropTypes from "prop-types";

ShowLine.propTypes = {
    winner: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default function ShowLine({winner}) {
  const getWinnerCombination = (winner_1, combinations_1) =>
  combinations_1.find(
      ({ combination }) =>
        JSON.stringify(winner_1) === JSON.stringify(combination)
    );

  const winningCombinations3x3 = [
    { combination: [6, 7, 8], className: "row-3" },
    { combination: [3, 4, 5], className: "row-2" },
    { combination: [0, 1, 2], className: "row-1" },
    { combination: [0, 3, 6], className: "col-1" },
    { combination: [1, 4, 7], className: "col-2" },
    { combination: [2, 5, 8], className: "col-3" },
    { combination: [0, 4, 8], className: "dg-row-1-1" },
    { combination: [2, 4, 6], className: "dg-row-1-3" },
  ];

  const winningCombinations4x4 = [
    { combination: [0, 1, 2, 3], className: "row-1-4x4" },
    { combination: [4, 5, 6, 7], className: "row-2-4x4" },
    { combination: [8, 9, 10, 11], className: "row-3-4x4" },
    { combination: [12, 13, 14, 15], className: "row-4-4x4" },
    { combination: [0, 4, 8, 12], className: "col-1-4x4" },
    { combination: [1, 5, 9, 13], className: "col-2-4x4" },
    { combination: [2, 6, 10, 14], className: "col-3-4x4" },
    { combination: [3, 7, 11, 15], className: "col-4-4x4" },
    { combination: [0, 5, 10, 15], className: "dg-row-1-1-4x4" },
    { combination: [3, 6, 9, 12], className: "dg-row-1-4-4x4" },
  ];

  const winnerCombination3X3 = getWinnerCombination(
    winner,
    winningCombinations3x3
  );
  const winnerCombination4x4 = getWinnerCombination(
    winner,
    winningCombinations4x4
  );

  const classNameToShow =
    winnerCombination3X3?.className || winnerCombination4x4?.className;

  return (
    classNameToShow && (
      <div>
        <div className={classNameToShow}></div>
      </div>
    )
  );
}
