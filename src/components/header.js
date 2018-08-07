import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
    <div style={{ background: '#069668', position: 'fixed', top: '0', height: '4rem', width: '100%' }}>
        <div style={{ padding: '1rem' }}>
            <h3 style={{ margin: 0 }}>
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                    {siteTitle}
                </Link>
            </h3>
        </div>
    </div>
)

export default Header
