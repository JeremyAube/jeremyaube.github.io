import React from "react";

import Layout from "src/components/templates/Layout";
import ExperienceBlock from "src/components/organism/ExperienceBlock";
import EducationBlock from "src/components/organism/EducationBlock";
import ProjectBlock from "src/components/organism/ProjectBlock";
import SkillsBlock from "src/components/organism/SkillsBlock";

export default function IndexPage() {
	return (
		<Layout>
			<ExperienceBlock />
			<EducationBlock />
			<ProjectBlock />
			<SkillsBlock />
		</Layout>
	);
}
