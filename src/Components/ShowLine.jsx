import PropTypes from "prop-types";
ShowLine.propTypes = {
  winner: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default function ShowLine({ winner }) {
  const winningCombinations = [
    { combination: [6, 7, 8], className: "row-3" },
    { combination: [3, 4, 5], className: "row-2" },
    { combination: [0, 1, 2], className: "row-1" },
    { combination: [0, 3, 6], className: "col-1" },
    { combination: [1, 4, 7], className: "col-2" },
    { combination: [2, 5, 8], className: "col-3" },
    { combination: [0, 4, 8], className: "dg-row-1-1" },
    { combination: [2, 4, 6], className: "dg-row-1-3" },
  ];
  const winnerCombination = winningCombinations.find(
    ({ combination }) => JSON.stringify(winner) === JSON.stringify(combination)
  );
  return winnerCombination ? (
    <div>
      <div className={winnerCombination.className}></div>
    </div>
  ) : (
    <></>
  );
}
