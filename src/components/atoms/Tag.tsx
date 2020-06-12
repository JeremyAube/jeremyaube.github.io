import React from "react";
import css from "./Tag.module.css";

interface Props {
	tag: string;
}

export default function Tag(props: Props) {
	return <span className={css.tag}>{props.tag}</span>;
}
