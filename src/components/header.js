import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo-w.png"

const Header = ({ siteTitle, rootUrl }) => (
  <header id="header">
    <a href={rootUrl} className="logo">
      <img src={logo} alt="logo" className="icon" />
    </a>
    <div className="content">
      <div className="inner">
        <h1>
          <Link
            to="/">
            {siteTitle}
          </Link>
        </h1>
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
