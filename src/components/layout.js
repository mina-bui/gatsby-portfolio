/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <footer>
          <div class="footer_social">

          </div>

          <br />
          <div class="footer_line2">
            <div class="footer_logo">
              <Link to="/">
                <StaticImage
                  src="../images/mina-bui_logo.png"
                  width={300}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Mina Bui's Logo"
                />
              </Link>
            </div>

            <div class="footer_copyright">
              © {new Date().getFullYear()} Mina Bui. Built with {` `} <a href="https://www.gatsbyjs.com">Gatsby</a>.
            </div>
          </div>

        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
