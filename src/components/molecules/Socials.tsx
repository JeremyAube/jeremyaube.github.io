import React from "react";
import css from "./Socials.module.css";
import { useStaticQuery, graphql } from "gatsby";
import SocialLink from "src/components/atoms/SocialLink";
import { FixedObject } from "gatsby-image";

export default function Socials() {
	const data: imageQuery = useStaticQuery(graphql`
		query {
			allSocialsYaml {
				nodes {
					name
					url
					alt
					image {
						childImageSharp {
							fixed(width: 32, height: 32) {
								...GatsbyImageSharpFixed
							}
						}
					}
				}
			}
		}
	`);

	return (
		<div className={css.socials}>
			{data.allSocialsYaml.nodes.map(node => (
				<SocialLink
					image={node.image.childImageSharp.fixed}
					alt={node.alt}
					name={node.name}
					url={node.url}
				/>
			))}
		</div>
	);
}

interface imageQuery {
	allSocialsYaml: {
		nodes: {
			name: string;
			url: string;
			alt: string;
			image: {
				childImageSharp: {
					fixed: FixedObject;
				};
			};
		}[];
	};
}
