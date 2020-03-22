import React from 'react'
import Layout from '../components/layout.jsx'
import {Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              html
              headings {
                depth
                value
              }
              frontmatter {
                # Assumes you're using title in your frontmatter.
                title date
              }
              fields {
                slug
              }
            }
          }
        }
      }    
    `)
    console.log(data)
    return (
        <Layout>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((post,id) => {
                    return (
                    <li key={`post-${id}`} className={blogStyles.post}>
                      <Link to={`/blog/${post.node.fields.slug}`}>
                        <h2>{post.node.frontmatter.title}</h2>
                        <p>{post.node.frontmatter.date}</p>
                      </Link>
                    </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage