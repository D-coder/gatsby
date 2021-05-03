import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      // <h1 className="main-heading">
      //   <Link to="/">{title}</Link>
      //   <Link to ='about'>About</Link>
      // </h1>
      <ul className="menu" >
        <li><Link to="/">Home</Link></li>
        <li><Link to="about">About</Link></li>
      </ul>


      
      
    )
    console.log(location);
  } else {
    header = (
      <ul className="menu" >
        <li><Link to="/">Home</Link></li>
        
      </ul>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
      
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
