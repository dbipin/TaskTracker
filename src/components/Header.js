import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
	// const onClick = () => {
	// 	console.log("button clickedd");
	// };

	const location = useLocation();
	return (
		<header className="header">
			<h1>{title}</h1>
			{location.pathname === "/" && (
				<Button
					color={showAdd ? "red" : "green"}
					onClick={onAdd}
					text={showAdd ? "Close" : "Add"}
				/>
			)}
		</header>
	);
};

Header.defaultProps = {
	title: "Task Tracker",
};

Header.propsType = {
	title: PropTypes.string.isRequired,
};

export default Header;
