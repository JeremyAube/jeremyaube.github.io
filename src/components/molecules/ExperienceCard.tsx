import React from "react";
import { Link } from "gatsby";
import { BriefcaseIcon, CalendarIcon } from "@primer/octicons-react";
import css from "./ExperienceCard.module.css";
import Card from "src/components/atoms/Card";
import Tag from "src/components/atoms/Tag";

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
					<h3>{props.title}</h3>
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

				{props.link ? <Link to={props.link}>{props.link}</Link> : null}

				<section className={css.techStack}>
					{props.techUsed?.map(tech => (
						<Tag tag={tech} />
					))}
				</section>
			</article>
		</Card>
	);
}
