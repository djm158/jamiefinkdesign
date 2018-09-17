import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

export const HomePageTemplate = ({ title, subtitle, headshot }) => {
  console.log(headshot);
  return (
    <Layout>
      <section>
        <div className="columns is-fullheight is-gapless">
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
        <div className="columns is-fullheight is-gapless">
          <div className="column bg-secondary">
            <div className="tile is-ancestor">
              <div className="tile is-parent is-vertical">
                <div className="tile is-child">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </div>
                <div className="tile">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <h1 className="title secondary">50 days of UI</h1>
            <p>Goal:</p>
            <p>Role:</p>
            <p>Resources:</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

HomePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

const HomePage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <HomePageTemplate
      title={post.frontmatter.title}
      subtitle={post.frontmatter.subtitle}
      headshot={post.frontmatter.headshot}
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
  }
`;
