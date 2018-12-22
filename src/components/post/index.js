import React from 'react';
import { Link } from 'gatsby';
import dateFormat from 'date-fns/format';

function PrevNext({ previous, next }) {
  return (
    <div className="prev-next-links">
      {previous && (
        <div className="prev-link">
          Previous Post -{' '}
          <Link to={previous.fields.slug}>{previous.frontmatter.title}</Link>
        </div>
      )}
      {next && (
        <div className="next-link">
          Next Post -{' '}
          <Link to={next.fields.slug}>{next.frontmatter.title}</Link>
        </div>
      )}
    </div>
  );
}

function Tags({ tags }) {
  return (
    <div className="post-tags">
      Tags:
      {tags.map(t => (
        <Link className="tag-link" to={`/tag/${t}/`}>
          #{t}
        </Link>
      ))}
    </div>
  );
}

export default ({ post, previous, next }) => {
  return (
    <article>
      <h2>{post.frontmatter.title}</h2>
      <div>
        Posted:{' '}
        {' ' + dateFormat(Date.parse(post.frontmatter.date), 'MMM D, YYYY')}
      </div>
      <Tags tags={post.frontmatter.tags} />
      <section dangerouslySetInnerHTML={{ __html: post.html }} />
      <PrevNext previous={previous} next={next} />
    </article>
  );
};