import React from "react"

import PropTypes from "prop-types"

class Header extends React.Component {
  render () {
    return (
      <div style={styles.title}>{this.props.label}</div>
    )
  }
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
