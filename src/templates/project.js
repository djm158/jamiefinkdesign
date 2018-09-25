import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/Layout";

export const ProjectTemplate = ({ project }) => {
  return (
    <Layout>
      <h1 className="title">{project.title}</h1>
      <img src={project.image} alt="project-photo" />
    </Layout>
  );
};

const Project = ({ data }) => {
  const { markdownRemark: project } = data;
  return <ProjectTemplate project={project.frontmatter} />;
};

export default Project;

export const ProjectQuery = graphql`
  query Project($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image
      }
    }
  }
`;
