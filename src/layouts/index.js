import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Articles from '../components/articles'
//import './index.css'

const Layout = ({ children, data }) => (
    <div>
        <Helmet
            title={data.site.siteMetadata.title}
            meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
            ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />

        <Articles edges={data.allMarkdownRemark.edges} />

        <div style={{ marginTop: '4rem', marginRight: '25%', padding: '2rem' }}>
            {children()}
        </div>
    </div>
)

Layout.propTypes = {
    children: PropTypes.func,
}

export default Layout

export const query = graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
            }
        },
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    ...ArticlesFragment
                }
            }
        }
    }
`
