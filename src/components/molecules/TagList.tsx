import React from "react";
import css from "./TagList.module.css";
import Tag from "src/components/atoms/Tag";

interface Props {
	tags: string[];
}

export default function TagList(props: Props) {
	return (
		<section className={css.tagList}>
			{props.tags.map(tag => (
				<Tag tag={tag} />
			))}
		</section>
	);
}
