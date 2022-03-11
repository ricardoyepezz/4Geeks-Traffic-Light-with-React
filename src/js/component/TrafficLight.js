import React from "react";
import { useState } from "react";
import { PropTypes } from "prop-types";
import "../../styles/index.css";

export const TrafficLight = (props) => {
	const [color, setColor] = useState("no color");

	return (
		<div>
			<button onClick={() => setColor(props.color)}>Click me</button>

			<p className="parrafo">You clicked {color} times</p>
		</div>
	);
};

TrafficLight.propTypes = {
	color: PropTypes.string,
};
