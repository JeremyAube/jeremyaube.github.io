import React from "react";
import css from "./EducationCard.module.css";
import Card from "../atoms/Card";
import { CalendarIcon, MortarBoardIcon } from "@primer/octicons-react";

interface Props {
	school: string;
	degree: string;
	yearStart: number;
	yearEnd?: number;
}

export default function EducationCard(props: Props) {
	return (
		<Card>
			<div className={css.eduCard}>
				<h2>{props.degree}</h2>
				<p>
					<CalendarIcon verticalAlign="text-top" />
					{" " + props.yearStart} - {props.yearEnd ? props.yearEnd : "Présent"}
				</p>
				<p>
					<MortarBoardIcon />
					{" " + props.school}
				</p>
			</div>
		</Card>
	);
}
