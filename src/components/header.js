import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header class="header">

    <div class="header-flex">

      <div class="header-nav">
        <nav>
          <ul>
            <li><Link to="/page-2/">About</Link></li>
            <li><Link to="/page-2/">Projects</Link></li>
            <li><Link to="/page-2/">Contact</Link></li>
          </ul>
        </nav>
      </div>

      <div class="header-title">
        <h1><Link>{siteTitle}</Link></h1>
      </div>

      <div class="header-hire">
        <ul>
          <li><Link to="/page-2/">Hire Me</Link></li>
        </ul>
      </div>

    </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
