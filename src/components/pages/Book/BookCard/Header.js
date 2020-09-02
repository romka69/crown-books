import React from "react"

import PropTypes from "prop-types"

const Header = ({ children }) => {
  return (
    <h1 className="mt-3 md:mt-0 mb-3 h1 font-extrabold text-2xl">
      {children}
    </h1>
  )
}

Header.propTypes = {
  children: PropTypes.string,
}

Header.defaultProps = {
  children: "Empty header",
}

export default Header
