import React from "react"

import PropTypes from "prop-types"

import Price from "./Price"

class Prices extends React.Component {
  render () {
    const { pricesProps: { MinPrice, DesiredPrice, CurrentSum, ExpectedPrice } } = this.props

    return (
      <div style={styles.prices}>
        <Price label="Minimal price" val={MinPrice} />

        <Price label="Desired price" val={DesiredPrice} />

        <Price label="Current sum" val={CurrentSum} />

        <Price label="Expected price" val={ExpectedPrice} />
      </div >
    )
  }
}

Prices.propTypes = {
  Price: Price.propTypes.val,
}

export default Prices

const styles = {
  prices: {
    paddingTop: "30px",
    display: "flex",
    marginTop: "10px",
    fontSize: "16px",
    fontWeight: "600",
  },
}
