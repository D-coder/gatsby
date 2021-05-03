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
            <p>An artist, producer, DJ, composer and songwriter based in Delhi and produces Dance-pop, House and RnB music. His music is majorly influenced by pop sounds and melodies as he grew up listening to them.
He has been doing music since he was like 8, but for him, the career really started when he purchased his first little synth which motivated him to play melodies all day and night.

For him, music is life; the sounds we hear, voices and colors around automatically spark a random melody, beat.</p>
        </Layout>
    )
}
export default About
