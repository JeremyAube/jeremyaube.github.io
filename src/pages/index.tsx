import React from "react";

import Layout from "src/components/templates/Layout";
import ExperienceBlock from "src/components/organism/ExperienceBlock";
import EducationBlock from "src/components/organism/EducationBlock";
import ProjectBlock from "src/components/organism/ProjectBlock";

export default function IndexPage() {
	return (
		<Layout>
			<ExperienceBlock />
			<EducationBlock />
			<ProjectBlock />
		</Layout>
	);
}
