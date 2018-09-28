import React from "react";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";

export const ProjectTemplate = ({ project }) => {
  return (
    <>
      <div className="two-column-bg" />
      <div className="modal">
        <div className="modal-container">
          <h1 className="title project-title">{project.title}</h1>
          <p className="project-desc">Goal: {project.goal}</p>
          <p className="project-desc">Role: {project.role}</p>
          <p className="project-desc">Resources: {project.resources}</p>
          <Link to="/#ui">Take me back!</Link>
        </div>
        <img className="project-img" src={project.frontmatter.media.childImageSharp.fluid.src} alt="UI Project" />
        <br />
      </div>
    </>
  );
};

// ProjectTemplate.propTypes = {
//   project: PropTypes.shape({
//     image: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     role: PropTypes.string,
//     goal: PropTypes.string,
//     resources: PropTypes.string
//   })
// };

const Project = ({ data }) => {
  const { markdownRemark: project } = data;
  return <ProjectTemplate project={project} />;
};

export default Project;

export const ProjectQuery = graphql`
  query Project($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        media {
          childImageSharp {
            fluid(maxWidth: 1200) {
              src
              srcSet
              base64
            }
          }
        }
        goal
        role
        resources
      }
    }
  }
`;
