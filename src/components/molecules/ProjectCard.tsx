import React from "react";
import Card from "../atoms/Card";
import Tag from "../atoms/Tag";
import TagList from "./TagList";

interface Props {
	completed: boolean;
	title: string;
	description: string;
	techStack: string[];
}

export default function ProjectCard(props: Props) {
	return (
		<Card>
			<h2>{props.title}</h2>
			<span>{props.completed}</span>
			<p>{props.description}</p>
			<TagList tags={props.techStack} />
		</Card>
	);
}
