module.exports = {
	siteMetadata: {
		title: `Jérémy Aubé`,
		description:
			"Je suis développeur logiciel avec un large éventail de compétences. Je valorise le travail d’équipe et j’aime apprendre de mes coéquipiers. Ma capacité d'apprendre rapidement me permet de rester agile et de m'adapter au monde de la technologie en constante évolution.",
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `image`,
				path: `${__dirname}/content/images`,
			},
		},
		`gatsby-transformer-yaml`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `./content`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Jérémy Aubé`,
				short_name: `profile`,
				start_url: `/`,
				display: `minimal-ui`,
				icon: `content/images/icon/face.png`, // This path is relative to the root of the site.
			},
		},
	],
};
