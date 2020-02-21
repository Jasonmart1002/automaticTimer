import React, { useState } from "react";

//create your first component
export function Lights() {
	const redStyles = {
		height: "150px",
		width: "150px",
		backgroundColor: "red",
		borderRadius: "100px"
	};

	const yellowStyles = {
		height: "150px",
		width: "150px",
		backgroundColor: "yellow",
		borderRadius: "100px"
	};

	const greenStyles = {
		height: "150px",
		width: "150px",
		backgroundColor: "green",
		borderRadius: "100px"
	};

	const plainStyles = {
		height: "150px",
		width: "150px",
		backgroundColor: "black",
		borderRadius: "100px",
		border: "solid 1px white"
	};

	const traffic = {
		border: "2px black solid",
		width: "200px",
		backgroundColor: "black"
	};

	const [red, setred] = useState("on");
	const [yellow, setyellow] = useState("on");
	const [green, setgreen] = useState("on");

	useEffect(() => {
		const timer = setInterval(() => {
			setfirstDigit(firstDigit => firstDigit + 1);
		}, 1000);
	}, []);

	return (
		<div className="container text-center" style={traffic}>
			<div
				className="card mx-auto my-2"
				style={red === "on" ? redStyles : plainStyles}
				onClick={() => {
					setred(red === "on" ? red : "on");
					setyellow(red === "on" ? "off" : "off");
					setgreen(red === "on" ? "off" : "off");
				}}
			/>

			<div
				className="card mx-auto my-2"
				style={yellow === "on" ? yellowStyles : plainStyles}
				onClick={() => {
					setred(yellow === "on" ? "off" : "off");
					setyellow(yellow === "on" ? yellow : "on");
					setgreen(yellow === "on" ? "off" : "off");
				}}
			/>

			<div
				className="card mx-auto my-2"
				style={green === "on" ? greenStyles : plainStyles}
				onClick={() => {
					setred(green === "on" ? "off" : "off");
					setyellow(green === "on" ? "off" : "off");
					setgreen(green === "on" ? green : "on");
				}}
			/>
		</div>
	);
}
