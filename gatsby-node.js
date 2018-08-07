/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) =>
{
    createMarkdownFileSlug(node, getNode, boundActionCreators);
};

exports.createPages = ({ graphql, boundActionCreators }) =>
{
    return registerMarkdownFiles(graphql, boundActionCreators);
}

/**
 * Creates a slug for a markdwon file.
 * @param {Object} node The gatsby node created by the transformer plugin.
 * @param {Function} getNode Api function to retrieve the internal node.
 * @param {Object} boundActionCreators Helper object.
 */
function createMarkdownFileSlug(node, getNode, boundActionCreators)
{
    // check if the node is provided by the gatsby-transformer-remark plugin.
    if (node.internal.type === "MarkdownRemark")
    {
        // creates a slug from the file node.
        const slug = createFilePath({ node, getNode, basePath: `pages` });

        // add the slug as a custom field to the node.
        boundActionCreators.createNodeField({ node, name: `slug`, value: slug });
    }
}

/**
 * Registers the markdown files as pages.
 * @param {Function} graphql Reference to the graphql function.
 * @param {Object} boundActionCreators Helper object
 */
function registerMarkdownFiles(graphql, boundActionCreators)
{
    // lists all the markdown nodes with a slug field
    // then creates the page from it.
    return new Promise((resolve) =>
        graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
      `)
        .then(result =>
        {
            result.data.allMarkdownRemark.edges.forEach(({ node }) =>
            {
                boundActionCreators.createPage({
                    path: node.fields.slug,
                    component: path.resolve(`./src/templates/article.js`),
                    context: {
                        // Data passed to context is available in page queries as GraphQL variables.
                        slug: node.fields.slug
                    },
                })
            })
            resolve()
        }));
}
