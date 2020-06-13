import React from "react";
import css from "./Layout.module.css";
import "src/global.css";
import Header from "src/components/organism/Header";
import Footer from "../organism/Footer";
import SEO from "./SEO";

interface Props {
	children: React.ReactNode;
}

export default function Layout(props: Props) {
	return (
		<div className={css.layout}>
			<SEO />
			<Header />
			<main>{props.children}</main>
			<Footer />
		</div>
	);
}
