import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";

export const ProjectTemplate = ({ title, subtitle, headshot }) => {
  return (
    <Layout>
    </Layout>
  );
};

const Project = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <ProjectTemplate
      mainProject={post.frontmatter.mainProject}
    />
  );
};

Project.propTypes = {
  intro: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string
  }),};

export default Project;

export const ProjectQuery = graphql`
  query Project($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        mainProject {
          title
          image
        }
      }
    }
  }
`;
