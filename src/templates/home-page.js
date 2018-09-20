import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

export const HomePageTemplate = ({ title, subtitle, headshot }) => {
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
                <img src="https://bulma.io/images/placeholders/640x480.png" />
              </div>
              <div className="item">
                <img src="https://bulma.io/images/placeholders/640x480.png" />
              </div>
              <div className="item">
                <img src="https://bulma.io/images/placeholders/640x480.png" />
              </div>
              <div className="item">
                <img src="https://bulma.io/images/placeholders/640x480.png" />
              </div>
              <div className="item">
                <img src="https://bulma.io/images/placeholders/640x480.png" />
              </div>
              <div className="item">
                <img src="https://bulma.io/images/placeholders/640x480.png" />
              </div>
              <div className="item long">
                <img src="https://bulma.io/images/placeholders/640x480.png" />
              </div>
            </div>
          </div>
          <div className="column landing">
            <h1 className="title is-super secondary has-text-centered	uppercase">50 days of UI</h1>
            <p className="title is-4 secondary has-text-right">Goal:</p>
            <p className="title is-4 secondary has-text-right">Role:</p>
            <p className="title is-4 secondary has-text-right">Resources:</p>
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
