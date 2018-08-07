import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
    <div>
        <div>
            <h1>Welcome to the Testing Blog</h1>
            <p>This a test blog made to learn gatsby and how to make sites with it.</p>
        </div>
        <div>
            <h2>Last 2 Articles</h2>
            {data.allMarkdownRemark.edges.map(({ node }, index) => (
                <div key={index} style={{ float: 'left', margin: '1rem', border: '1px solid #eee', borderRadius: '0.3rem', overflow: 'hidden'}}>
                    <Link to={node.fields.slug}>
                        <img src={node.frontmatter.headerImg.publicURL} />
                        <div style={{padding: '1rem'}}>
                        <h3>{node.frontmatter.title}</h3>
                        <span>{node.frontmatter.date}</span>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    </div>
);

export default IndexPage

export const query = graphql`
    query HomePageQuery {
        allMarkdownRemark(limit: 2, sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        layout
                        date(formatString: "MM/DD/YYYY")
                        title
                        headerImg {
                            publicURL
                        }
                    }
                }
            }
        }
    }
`;
