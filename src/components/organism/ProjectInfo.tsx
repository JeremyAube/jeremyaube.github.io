import React from "react";
import { BriefcaseIcon, CalendarIcon } from "@primer/octicons-react";
import css from "./ProjectInfo.module.css";
import Card from "src/components/atoms/Card";

interface Props {
	company: string;
	position: string;
	timeStart: string;
	timeEnd?: string;
	description: string;
	techUsed?: string[];
}

export default function project_info(props: Props) {
	return (
		<Card>
			<article className={css.project}>
				<header>
					<h3>{props.position}</h3>
					<p>
						<CalendarIcon />
						{props.timeStart} - {props.timeEnd ? props.timeEnd : "Present"}
					</p>
					<p>
						<BriefcaseIcon />
						{props.company}
					</p>
				</header>
				<p>{props.description}</p>

				<section className={css.techStack}>
					{props.techUsed?.map(tech => (
						<p>{tech}</p>
					))}
				</section>
			</article>
		</Card>
	);
}
