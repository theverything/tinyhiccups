import React from 'react'
import Link from 'gatsby-link'
import dateFormat from 'date-fns/format'

const Posts = ({ title, edges }) => (
  <div className="posts">
    <h2>{title}</h2>
    {edges.map(({ node }) => (
      <article key={node.id}>
        <h3>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </h3>
        <div>
          {dateFormat(Date.parse(node.frontmatter.date), 'MMM D, YYYY')}
        </div>
        <p>{node.excerpt}</p>
      </article>
    ))}
  </div>
)

export default Posts
