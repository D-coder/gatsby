import * as React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({location }) => {
    return(
        <Layout location={location} title="About">
            <Seo title="About US" />
            <Bio />
            <p>This is About Us page</p>
        </Layout>
    )
}
export default About