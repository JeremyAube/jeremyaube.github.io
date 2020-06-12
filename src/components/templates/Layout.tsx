import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "../molecules/Header";
import "../global.css";

interface Props {
	children: React.ReactNode;
}

export default function Layout(props: Props) {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<>
			<Header siteTitle={data.site.siteMetadata.title} />
			<div>
				<main>{props.children}</main>
				<footer>
					© {new Date().getFullYear()}, Built with
					{` `}
					<a href="https://www.gatsbyjs.org">Gatsby</a>
				</footer>
			</div>
		</>
	);
}
