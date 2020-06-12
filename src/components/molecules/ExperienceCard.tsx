import React from "react";
import { BriefcaseIcon, CalendarIcon, LinkIcon } from "@primer/octicons-react";
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
						<CalendarIcon verticalAlign="text-top" />
						{" " + props.timeStart} - {props.timeEnd ? props.timeEnd : "Présent"}
					</p>
					<p>
						<BriefcaseIcon verticalAlign="text-top" />
						{" " + props.company}
					</p>
				</header>
				<p>{props.description}</p>

				{props.link ? (
					<a href={props.link} target="_blank">
						<LinkIcon verticalAlign="text-top" />
						{" " + props.link}
					</a>
				) : null}
				{props.techUsed ? <TagList tags={props.techUsed} /> : null}
			</article>
		</Card>
	);
}
