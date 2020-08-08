import React from "react"

import PropTypes from "prop-types"

const Header = ({ label }) => {
  return (
    <div style={styles.title}>{label}</div>
  )
}

Header.propTypes = {
  label: PropTypes.string,
}

Header.defaultProps = {
  label: "Empty header",
}

export default Header

const styles = {
  title: {
    fontWeight: "800",
    fontSize: "25px",
    marginBottom: "15px",
  },
}
