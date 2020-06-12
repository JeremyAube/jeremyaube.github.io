import React from "react";
import { Link } from "gatsby";
import css from "./Header.module.css";

interface Props {
	siteTitle: string;
}

export default function Header(props: Props) {
	return (
		<header className={css.header}>
			<div>
				<h1>
					<Link to="/">{props.siteTitle}</Link>
				</h1>
			</div>
		</header>
	);
}
