import PropTypes from "prop-types";

const Button = ({ color, onClick, text }) => {
	return (
		<>
			<button
				style={{ backgroundColor: color }}
				onClick={onClick}
				className="btn"
			>
				{text}
			</button>
		</>
	);
};
Button.defaultProps = {
	color: "steelblue",
};
Button.propType = {
	color: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
