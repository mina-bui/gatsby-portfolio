import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header class="header">

    <div class="header-flex">
      <div class="header-title">
        <Link to="/">
          <StaticImage
            src="../images/mina-bui_logo_symbol.png"
            width={75}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Mina Bui's Logo"
          />
        </Link>
      </div>

      <div class="header-nav">
        <nav>
          <ul>
            <li><Link to="/about/">About</Link></li>
            <li><Link to="/projects/">Projects</Link></li>
            <li><Link to="/contact/">Contact</Link></li>
          </ul>
        </nav>
      </div>

      <div class="header-hire">
        <ul>
          <li><Link to="mailto:hello@minabui.com?subject=Hello from your site!" id="header-hire-btn">Hire Me</Link></li>
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
