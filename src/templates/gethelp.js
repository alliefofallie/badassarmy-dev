import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'


export const GetHelpTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-1 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
              <center>
              <br></br>
              <a href="http://badassarmy.org/victims/"><figure class="thumbnail"><img src="../img/help-768x768.jpeg" /></figure></a>
              <br></br>
              <figure class="image"><img src="../img/Text-placeholder-977x1024.png" /></figure>
              </center>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

GetHelpTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const GetHelp = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <GetHelpTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

GetHelp.propTypes = {
  data: PropTypes.object.isRequired,
}

export default GetHelp

export const getHelpQuery = graphql`
  query GetHelp($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
