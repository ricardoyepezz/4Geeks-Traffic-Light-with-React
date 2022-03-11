import React from "react";
import { TrafficLight } from "./TrafficLight";

//create your first component
const Home = () => {
	return (
		<div>
			<TrafficLight color={"rojo"} />
			<TrafficLight color={"amarillo"} />
			<TrafficLight color={"verde"} />
		</div>
	);
};

export default Home;
