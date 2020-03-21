import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from '../components/header.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title, author
                }
            }
        }    
    `)
    return (
        <header className={headerStyles.header}>
            <h1><Link to="/" className={headerStyles.title}>{data.site.siteMetadata.author}</Link></h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to="/">Home</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to="/about">About</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to="/blog">Blog</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Footer