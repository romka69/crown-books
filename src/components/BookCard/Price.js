import React from "react"

import PropTypes from "prop-types"

class Price extends React.Component {
  render () {
    const { label, val } = this.props

    return (
      <div style={styles.price}>
        <div>{label}</div>
        <div>${val}</div>
      </div>
    )
  }
}

Price.propTypes = {
  label: PropTypes.string,
  val: PropTypes.number,
}

Price.defaultProps = {
  label: "Empty price",
  val: 0,
}

export default Price

const styles = {
  price: {
    flex: "0 0 25%",
    maxWidth: "25%",
  },
}
