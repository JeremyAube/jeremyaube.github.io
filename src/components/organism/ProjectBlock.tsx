import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import InfoBlock from "../molecules/InfoBlock";
import ProjectCard from "../molecules/ProjectCard";

export default function ProjectBlock() {
	const data: projectQueryType = useStaticQuery(graphql`
		query {
			allProjectYaml(sort: { fields: list_id, order: ASC }) {
				nodes {
					title
					completed
					description
					techStack
				}
			}
		}
	`);

	return (
		<InfoBlock title="Projets en cours">
			{data.allProjectYaml.nodes.map(project => (
				<ProjectCard {...project} key={project.title} />
			))}
		</InfoBlock>
	);
}

interface projectQueryType {
	allProjectYaml: {
		nodes: {
			title: string;
			completed: boolean;
			description: string;
			techStack: string[];
		}[];
	};
}
