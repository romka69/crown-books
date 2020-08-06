import React from "react"

import PropTypes from "prop-types"

class UserPrice extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userPrice: 0,
    }

    this.setField = this.setField.bind(this)
    this.calcPrice = this.calcPrice.bind(this)
  }

  setField (e) {
    this.setState({ userPrice: e.target.value })
  }

  calcPrice () {
    return ((this.state.userPrice / 100) * 90).toFixed(2)
  }

  render () {
    const { minPrice } = this.props
    const { userPrice } = this.state

    return (
      <div style={styles.userPrice}>
        <span style={styles.title}>Your price</span>
        <input
          name="userPrice"
          type="number"
          onChange={this.setField}
        />

        <span style={styles.notify}>
          {
            userPrice >= minPrice ? (
              `Author get $${this.calcPrice()}. 10% service fee`
            ) : (
                "Not less than the minimum price of the book"
              )
          }
        </span>
      </div>
    )
  }
}

UserPrice.propTypes = {
  minPrice: PropTypes.number,
}

UserPrice.defaultValue = {
  minPrice: 0,
}

export default UserPrice

const styles = {
  userPrice: {
    paddingTop: "1em",
  },
  title: {
    paddingRight: "0.2em",
  },
  notify: {
    paddingLeft: "0.5em",
    fontSize: "10px",
    color: "red",
  },
}