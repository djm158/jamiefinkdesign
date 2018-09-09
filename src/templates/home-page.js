import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";

export const HomePageTemplate = ({ title, subtitle }) => {
  return (
    <Layout>
      <section>
        <div className="columns is-vcentered is-fullheight">
          <div className="column">
            <h1 className="title is-1 uppercase">{title}</h1>
            <h2 className="subtitle is-2">{subtitle}</h2>
          </div>
          <div className="column">
            <div className="circle" />
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
      }
    }
  }
`;
