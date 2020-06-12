import React from "react";
import Img, { FixedObject } from "gatsby-image";

interface Props {
	img: FixedObject;
	imgAlt: string;
	url: string;
}

export default function SocialLink(props: Props) {
	return (
		<a href={props.url}>
			<Img fixed={props.img} alt={props.imgAlt} />
		</a>
	);
}
