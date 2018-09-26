import React from "react";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

export const HomePageTemplate = ({ title, subtitle, headshot, mainProject }) => {
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
              <div className="item big">
                <Link to={mainProject.fields.slug}>
                  <img
                    alt="test1"
                    src={mainProject.frontmatter.image}
                  />
                </Link>
              </div>
              <div className="item">
                <img
                  alt="test2"
                  src="https://bulma.io/images/placeholders/640x480.png"
                />
              </div>
              <div className="item">
                <img
                  alt="test3"
                  src="https://bulma.io/images/placeholders/640x480.png"
                />
              </div>
              <div className="item">
                <img
                  alt="test4"
                  src="https://bulma.io/images/placeholders/640x480.png"
                />
              </div>
              <div className="item">
                <img
                  alt="test5"
                  src="https://bulma.io/images/placeholders/640x480.png"
                />
              </div>
              <div className="item">
                <img
                  alt="test6"
                  src="https://bulma.io/images/placeholders/640x480.png"
                />
              </div>
              <div className="item long">
                <img
                  alt="test7"
                  src="https://bulma.io/images/placeholders/640x480.png"
                />
              </div>
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
  mainProject: PropTypes.object.isRequired
};

const HomePage = ({ data }) => {
  const { markdownRemark: indexData } = data;
  const { allMarkdownRemark: projects } = data;

  return (
    <HomePageTemplate
      title={indexData.frontmatter.title}
      subtitle={indexData.frontmatter.subtitle}
      headshot={indexData.frontmatter.headshot}
      mainProject={projects.edges[0].node}
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
          }
          frontmatter {
            title
            image
          }
        }
      }
    }
  }
`;
