import React from "react"

import PropTypes from "prop-types"

class Prices extends React.Component {
  render () {
    const { pricesProps: { MinPrice, DesiredPrice, CurrentSum, ExpectedPrice } } = this.props

    return (
      <div style={styles.prices}>
        <div style={styles.price}>
          <div>Minimal price</div>
          <div>${MinPrice}</div>
        </div>
        <div style={styles.price}>
          <div>Desired price</div>
          <div>${DesiredPrice}</div>
        </div>
        <div style={styles.price}>
          <div>Current sum</div>
          <div>${CurrentSum}</div>
        </div>
        <div style={styles.price}>
          <div>Expected price</div>
          <div>${ExpectedPrice}</div>
        </div>
      </div>
    )
  }
}

Prices.propTypes = {
  MinPrice: PropTypes.number,
  DesiredPrice: PropTypes.number,
  CurrentSum: PropTypes.number,
  ExpectedPrice: PropTypes.number,
}

Prices.defaultProps = {
  MinPrice: 0,
  DesiredPrice: 0,
  CurrentSum: 0,
  ExpectedPrice: 0,
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
  price: {
    flex: "0 0 25%",
    maxWidth: "25%",
  },
}
