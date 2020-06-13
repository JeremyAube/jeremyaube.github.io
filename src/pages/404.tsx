import React from "react";
import { Link } from "gatsby";

import Layout from "src/components/templates/Layout";

export default function NotFoundPage() {
	return (
		<>
			<h1>OOPS..</h1>
			<p>Cette page n'a pas été trouvé!</p>
			<Link to="/">Retour</Link>
		</>
	);
}
