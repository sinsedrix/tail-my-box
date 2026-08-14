import React from "react"
import PropTypes from "prop-types"

import '../assets/scss/main.scss'

const Layout = ({ children }) => {

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          //maxWidth: 960,
          padding: '0 2rem',
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://vitejs.dev">Vite</a> + React
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
