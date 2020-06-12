import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default function Socials() {
	const data: imageQuery = useStaticQuery(graphql``);

	return (
		<>
			{data.allFile.nodes.map(node => (
				<Img fixed={node.childImageSharp.fixed} alt="Social Link" />
			))}
		</>
	);
}

interface imageQuery {
	allFile: {
		nodes: {
			childImageSharp: {
				fixed: any;
			};
		}[];
	};
}
