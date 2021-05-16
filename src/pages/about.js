import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <h1>Hi from the About page</h1>
        <Link to="/page-2">Go back to page 2</Link>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default AboutPage
