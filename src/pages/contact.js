import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
    <Layout>
        <SEO title="Contact Page" />
        <h1>Hi from the Contact page</h1>
        <Link to="/page-2">Go to page 2</Link>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default ContactPage
