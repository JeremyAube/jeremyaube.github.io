import React from "react";
import css from "./SocialLink.module.css";
import Img, { FixedObject } from "gatsby-image";

interface Props {
	name: string;
	image: FixedObject;
	alt: string;
	url: string;
}

export default function SocialLink(props: Props) {
	return (
		<div className={css.link}>
			<a href={props.url}>
				<Img fixed={props.image} alt={props.alt} />
			</a>
		</div>
	);
}
