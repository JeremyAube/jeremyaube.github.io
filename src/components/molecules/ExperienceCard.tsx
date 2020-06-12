import React from "react";
import { Link } from "gatsby";
import { BriefcaseIcon, CalendarIcon } from "@primer/octicons-react";
import css from "./ExperienceCard.module.css";
import Card from "src/components/atoms/Card";
import TagList from "./TagList";

interface Props {
	title: string;
	company: string;
	description: string;
	timeStart: string;
	timeEnd?: string;
	link?: string;
	techUsed?: string[];
}

export default function ProjectInfo(props: Props) {
	return (
		<Card>
			<article className={css.project}>
				<header>
					<h2>{props.title}</h2>
					<p>
						<CalendarIcon />
						{props.timeStart} - {props.timeEnd ? props.timeEnd : "Présent"}
					</p>
					<p>
						<BriefcaseIcon />
						{props.company}
					</p>
				</header>
				<p>{props.description}</p>

				{props.link ? <Link to={props.link}>{props.link}</Link> : null}
				{props.techUsed ? <TagList tags={props.techUsed} /> : null}
			</article>
		</Card>
	);
}
