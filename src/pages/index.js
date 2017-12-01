import React from 'react'
import Posts from '../templates/posts'

const IndexPage = props => (
  <Posts title="Posts" edges={props.data.allMarkdownRemark.edges} />
)

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
          id
        }
      }
    }
  }
`

export default IndexPage
