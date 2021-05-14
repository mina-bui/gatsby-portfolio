import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => (
    <Layout>
        <SEO title="Projects Page" />
        <h1>Hi from the Projects page</h1>
        <Link to="/page-2">Go to page 2</Link>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default ProjectsPage
