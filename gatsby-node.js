const path = require("path");

exports.onCreateWebpackConfig = ({ stage, actions }) => {
	actions.setWebpackConfig({
		resolve: {
			modules: [path.resolve(__dirname), "node_modules"],
		},
	});
};

exports.createSchemaCustomization = ({ actions }) => {
	const { createTypes } = actions;
	const typeDefs = `
    type SocialsYaml implements Node @infer {
      image: File! @fileByRelativePath
    }
  `;
	createTypes(typeDefs);
};
