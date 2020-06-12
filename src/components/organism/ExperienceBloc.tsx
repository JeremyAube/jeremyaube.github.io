import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import css from "./ExperienceBloc.module.css";
import ExperienceCard from "src/components/molecules/ExperienceCard";

export default function ExperienceBloc() {
	const data: expQueryType = useStaticQuery(graphql`
		query MyQuery {
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

	console.log(data);

	return (
		<section className={css.experience}>
			<h1>Expérience</h1>
			{data.allExperienceYaml.nodes.map(exp => (
				<ExperienceCard
					title={exp.title}
					description={exp.description}
					company={exp.company}
					link={exp.link}
					timeStart={exp.timeStart}
					timeEnd={exp.timeEnd}
					techUsed={exp.techUsed}
				/>
			))}
		</section>
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
