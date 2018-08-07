import React from "react";

export default ({ data }) =>
{
    const post = data.markdownRemark;
    return (
        <div>
            <h1 style={{
                borderBottom: '1.5px solid black'
            }}>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
    );
};

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date
            }
        }
    }
`;