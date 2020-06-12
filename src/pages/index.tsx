import React from "react";

import Layout from "src/components/layout";
import ProjectCard from "src/components/ProjectInfo";

export default function IndexPage() {
  return (
    <Layout>
      <h1>Expérience</h1>
      <ProjectCard
        company="Flexlite"
        description="test"
        timeStart="2018"
        position="software developer"
      />
    </Layout>
  );
}
