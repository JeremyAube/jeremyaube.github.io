import React, { ReactElement } from "react";
import css from "./Card.module.css";

interface Props {
	children: React.ReactNode;
}

export default function Card({ children }: Props): ReactElement {
	return <div className={css.card}>{children}</div>;
}
