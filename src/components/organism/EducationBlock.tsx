import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import InfoBlock from "../molecules/InfoBlock";
import EducationCard from "../molecules/EducationCard";

export default function EducationBlock() {
	const data: eduQueryType = useStaticQuery(graphql`
		query {
			allEducationYaml(sort: { fields: list_id, order: ASC }) {
				nodes {
					degree
					school
					yearEnd
					yearStart
				}
			}
		}
	`);

	return (
		<InfoBlock title="Éducation">
			{data.allEducationYaml.nodes.map(edu => (
				<EducationCard {...edu} />
			))}
		</InfoBlock>
	);
}

interface eduQueryType {
	allEducationYaml: {
		nodes: {
			degree: string;
			school: string;
			yearEnd?: number;
			yearStart: number;
		}[];
	};
}
