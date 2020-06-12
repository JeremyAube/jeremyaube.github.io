import React from "react";
import TagList from "../molecules/TagList";
import competences from "../../../content/skills.json";
import InfoBlock from "../molecules/InfoBlock";

export default function SkillsBlock() {
	return (
		<InfoBlock title="Compétences">
			<TagList tags={competences} />
		</InfoBlock>
	);
}
