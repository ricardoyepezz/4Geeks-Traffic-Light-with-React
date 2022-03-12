import React from "react";
import { useState } from "react";
import "../../styles/index.css";
//defino estado inicial
export const TrafficLight = () => {
	const [color, setColor] = useState("");

	return (
		<>
			<div className="box">
				<div
					onClick={() => setColor("red")}
					className={
						"light red" + (color === "red" ? " glow" : "")
					}></div>
				<div
					onClick={() => setColor("yellow")}
					className={
						"light yellow" + (color === "yellow" ? " glow" : "")
					}></div>
				<div
					onClick={() => setColor("green")}
					className={
						"light green" + (color === "green" ? " glow" : "")
					}></div>
				<div className={color === "purple" ? " purple" : ""}></div>
				<button onClick={() => setColor("purple")}>Purple</button>
			</div>
		</>
	);
};
