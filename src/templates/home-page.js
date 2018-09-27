import React from "react";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Img from 'gatsby-image'


export const HomePageTemplate = ({ title, subtitle, headshot, projects }) => {
  return (
    <Layout>
      <section>
        <div className="columns is-fullheight is-marginless">
          <div className="column landing">
            <h1 className="title is-1 uppercase">{title}</h1>
            <h2 className="subtitle is-2">{subtitle}</h2>

            <Navbar />
          </div>
          <div className="column landing bg-primary">
            {/* TODO: see if this should be .is-rounded */}
            <div
              className="circle"
              style={{ backgroundImage: `url(${headshot})` }}
            />
          </div>
        </div>
      </section>

      <section>
        <div className="columns is-fullheight is-marginless">
          <div className="column bg-secondary second">
            <div className="grid">
              {projects.map(project => {
                return (
                  <div
                    key={project.node.id}
                    className={`item ${
                      project.node.frontmatter.order == 1 ? "big" : ""
                    }`}
                  >
                    <Link to={project.node.fields.slug}>
                      <img alt="test1" src={project.node.fields.logolink.childImageSharp.fluid.src} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="column landing">
            <div className="heading-container">
              <h1 className="title is-super secondary	uppercase">
                50 days of UI
              </h1>
              <p className="title is-4 secondary">Goal:</p>
              <p className="title is-4 secondary">Role:</p>
              <p className="title is-4 secondary">Resources:</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

HomePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  projects: PropTypes.array.isRequired
};

const HomePage = ({ data }) => {
  const { markdownRemark: indexData } = data;
  const { allMarkdownRemark: projects } = data;
  console.log(projects)
  return (
    <HomePageTemplate
      title={indexData.frontmatter.title}
      subtitle={indexData.frontmatter.subtitle}
      headshot={indexData.frontmatter.headshot}
      projects={projects.edges.sort((a, b) => a.node.frontmatter.order - b.node.frontmatter.order)}
    />
  );
};

HomePage.propTypes = {
  data: PropTypes.object.isRequired
};

export default HomePage;

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        headshot
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "project" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
            logolink {
              childImageSharp {
                fluid(maxWidth: 200, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          frontmatter {
            image
            order
          }
        }
      }
    }
  }
`;
