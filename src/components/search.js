import React, { useReact, useState } from "react"
import { Link, graphql } from "gatsby"
import { useStaticQuery } from "gatsby"
const SearchIndex = props => {
    const data =  useStaticQuery(graphql`
    query MyQuery {
        allMarkdownRemark {
        edges {
            node {
            excerpt(pruneLength: 200)
            frontmatter {
                title
                description
                date(formatString: "MMMM DD, YYYY")
            }
            fields {
                slug
            }
            }
        }
        }
    }  
  `)
    //   const { data } = props
  const allPosts = data.allMarkdownRemark.edges

  const emptyQuery = ""

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    console.log(event.target.value)
    const query = event.target.value
    // const { data } = props

    const posts = data.allMarkdownRemark.edges || []

    const filteredData = posts.filter(post => {

      const { description, title } = post.node.frontmatter
      return (
        // description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) 
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  return (
    <>
      <h1 style={{ textAlign: `center` }}>Adeeth Music</h1>

      <div className="searchBox">
        <input
          className="searchInput"
          type="text"
          aria-label="Search"
          placeholder="Search Blog"
          onChange={handleInputChange}
        />
      </div>

      {posts.map(({ node }) => {
        const { excerpt } = node

        const { slug } = node.fields
        const { title, date, description } = node.frontmatter
        return (
          <article
            className="post-list-item"
            itemScope
            itemType="http://schema.org/Article"
          key={slug}>
            <header>
              <h2>
                <Link to={slug} itemProp="url">
                <span itemProp="headline">{title}</span>
                    </Link>
              </h2>

              <small>{date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: description || excerpt,
                }}
              />
            </section>
            <hr />
          </article>
        )
      })}
    </>
  )
}

export default SearchIndex

