import React from "react";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/Layout";

export const ProjectTemplate = ({ project }) => {
  return (
    <Layout>
      <h1 className="title">{project.title}</h1>
      <img src={project.image} alt="UI Project" />
      <br />
      <Link to="/#ui">Take me back!</Link>
    </Layout>
  );
};

ProjectTemplate.PropTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })
}

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
