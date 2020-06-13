import React from "react";
import { Helmet } from "react-helmet";

export default function SEO() {
	return (
		<Helmet htmlAttributes={{ lang: "fr" }}>
			<title>CV - Jérémy Aubé</title>
			<meta
				name="description"
				content="Je suis développeur logiciel avec un large éventail de compétences. Je valorise le travail d’équipe et j’aime apprendre de mes coéquipiers..."
			/>
			<meta name="keywords" content="@jeremyaube_,Jeremy,Aube,Software,Developer" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

			{/* Open Graph */}
			<meta property="og:title" content="Jérémy Aubé - Développeur logiciel" />
			<meta property="og:type" content="profile" />
			<meta property="profile:first_name" content="Jérémy" />
			<meta property="profile:last_name" content="Aubé" />
			<meta property="og:url" content="jeremyaube.me" />
			<meta
				property="og:description"
				content="Je suis développeur logiciel avec un large éventail de compétences. Je valorise le travail d’équipe et j’aime apprendre de mes coéquipiers..."
			/>
			<meta property="og:site_name" content="Jérémy Aubé" />

			{/* Twitter */}
			<meta name="twitter:card" content="Jérémy Aubé - Développeur Logiciel" />
			<meta name="twitter:site" content="@jeremyaube_" />
			<meta name="twitter:title" content="Jérémy Aubé - Développeur Logiciel" />
			<meta
				name="twitter:description"
				content="Je suis développeur logiciel avec un large éventail de compétences. Je valorise le travail d’équipe et j’aime apprendre de mes coéquipiers..."
			/>
			<meta name="twitter:creator" content="@jeremyaube_" />
		</Helmet>
	);
}
