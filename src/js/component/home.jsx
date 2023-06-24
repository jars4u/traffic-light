import React, { useState } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState("red");
	return (
		<>
			<div className="container-flex">
				<div className="post"></div>
				<div className="box">
					<div
						onClick={() => setColor("red")}
						className={"bulb red " + (color === "red" ? "redLight" : "")}
					></div>
					<div
						onClick={() => setColor("yellow")}
						className={
							"bulb yellow " + (color === "yellow" ? "yellowLight" : "")
						}
					></div>
					<div
						onClick={() => setColor("green")}
						className={"bulb green " + (color === "green" ? "greenLight" : "")}
					></div>
				</div>
			</div>
		</>
	);
};

export default Home;
