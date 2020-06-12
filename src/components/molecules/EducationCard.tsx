import React from "react";
import css from "./EducationCard.module.css";
import Card from "../atoms/Card";

interface Props {
	school: string;
	degree: string;
	yearStart: number;
	yearEnd?: number;
}

export default function EducationCard(props: Props) {
	return (
		<Card>
			<h2>{props.degree}</h2>
			<p>{props.school}</p>
			<p>
				{props.yearStart} - {props.yearEnd ? props.yearEnd : "Présent"}
			</p>
		</Card>
	);
}
