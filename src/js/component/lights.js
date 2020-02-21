import React, { useState, useEffect } from "react";

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

	const [red, setred] = useState("off");
	const [yellow, setyellow] = useState("off");
	const [green, setgreen] = useState("off");
	const [firstDigit, setfirstDigit] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setfirstDigit(firstDigit => firstDigit + 1);
		}, 1000);
	}, []);

	return <p>{firstDigit % 11}</p>;
}
