import PropTypes from "prop-types";
Square.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
};
export default function Square({ onClick, value }) {
  return (
    <div onClick={onClick} className="square">
      <h3 style={{ marginTop: "40px" }}>{value}</h3>
    </div>
  );
}
