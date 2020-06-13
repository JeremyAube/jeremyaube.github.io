import React from "react";
import css from "./Header.module.css";
import SocialLink from "../molecules/Socials";
import { MailIcon, LocationIcon } from "@primer/octicons-react";

export default function Header() {
	return (
		<header className={css.header}>
			<h1>Jérémy Aubé</h1>
			<h4>Développeur Logiciel</h4>
			<p> (418) 520-7088</p>
			<section>
				<header hidden>
					<h2>Social Links</h2>
				</header>
				<SocialLink />
			</section>
			<section>
				<a href="mailto:jeremyaube24@gmail.com">
					<MailIcon verticalAlign="text-top" /> jeremyaube24@gmail.com
				</a>
				<p>
					<LocationIcon verticalAlign="text-top" /> Nouveau-Brunswick, Canada
				</p>
			</section>
		</header>
	);
}
