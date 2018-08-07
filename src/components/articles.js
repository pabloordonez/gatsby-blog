import React from 'react'
import Link from 'gatsby-link'

const Articles = ({ edges }) => (
    <div style={{ background: '#f5f5f5', float: 'right', right: 0, width: '25%', position: 'fixed', height: '100%', padding: '1rem' }}>
        <h3>Articles</h3>
        {edges.map(({ node }, index) =>
            (
                <div key={index}>
                    <Link to={node.fields.slug}>
                        <div style={{ width: '100%' }}>
                        <span>{node.frontmatter.title}</span>
                        <span style={{ color: '#aaa', float: 'right' }}>{node.frontmatter.date}</span>
                        </div>
                    </Link>
                </div>
            ))}
    </div>
)

export default Articles;

export const query = graphql`
    fragment ArticlesFragment on MarkdownRemark {
        fields {
            slug
        }
        frontmatter {
            layout
            date(formatString: "MM/DD/YYYY")
            title
        }
    }
`;
