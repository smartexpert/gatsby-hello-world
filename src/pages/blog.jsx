import React from 'react'
import Layout from '../components/layout.jsx'
import {graphql, useStaticQuery } from 'gatsby'

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
            }
          }
        }
      }    
    `)
    console.log(data)
    return (
        <Layout>
            <h1>Blog</h1>
            <ol>
                {data.allMarkdownRemark.edges.map((post,id) => {
                    return (
                    <li key={`post-${id}`}>
                        <h2>{post.node.frontmatter.title}</h2>
                        <p>{post.node.frontmatter.date}</p>
                    </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage