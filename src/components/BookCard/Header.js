import React from "react"

import PropTypes from "prop-types"

const Header = ({ label }) => {
  return (
    <h1 className="mt-3 md:mt-0 mb-3 h1 font-extrabold text-2xl">{label}</h1>
  )
}

Header.propTypes = {
  label: PropTypes.string,
}

Header.defaultProps = {
  label: "Empty header",
}

export default Header
