import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import InfoBlock from "src/components/molecules/InfoBlock";
import ExperienceCard from "src/components/molecules/ExperienceCard";

export default function ExperienceBlock() {
	const data: expQueryType = useStaticQuery(graphql`
		query {
			allExperienceYaml(sort: { fields: list_id, order: ASC }) {
				nodes {
					company
					title
					description
					link
					timeEnd
					techUsed
					timeStart
				}
			}
		}
	`);

	return (
		<InfoBlock title="Expérience">
			{data.allExperienceYaml.nodes.map(exp => (
				<ExperienceCard {...exp} key={exp.title + exp.company} />
			))}
		</InfoBlock>
	);
}

interface expQueryType {
	allExperienceYaml: {
		nodes: {
			company: string;
			title: string;
			description: string;
			link?: string;
			timeStart: string;
			timeEnd?: string;
			techUsed?: string[];
		}[];
	};
}
