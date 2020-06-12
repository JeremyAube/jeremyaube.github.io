import React, { ReactNode } from "react";
import css from "./InfoBlock.module.css";

interface Props {
	title: string;
	children: ReactNode;
}

export default function InfoBlock(props: Props) {
	return (
		<section className={css.infoBlock}>
			<h1>{props.title}</h1>
			{props.children}
		</section>
	);
}
