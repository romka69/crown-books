import React from "react"

import PropTypes from "prop-types"

class UserPrice extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userPrice: "",
    }

    this.priceInputRef = React.createRef()

    this.setField = this.setField.bind(this)
    this.calcPrice = this.calcPrice.bind(this)
  }

  componentDidMount () {
    this.priceInputRef.current.focus()
  }

  setField (e) {
    const lengthPrice = 4

    if (e.target.value.length > lengthPrice)
      return

    this.setState({ userPrice: e.target.value })
  }

  calcPrice () {
    return ((this.state.userPrice / 100) * 90).toFixed(2)
  }

  render () {
    const { minPrice } = this.props
    const { userPrice } = this.state

    return (
      <div className="mt-5 sm:flex items-center ml-5 md:ml-0">
        <span className="pr-2">
          Your price
        </span>
        <input
          className="border rounded py-2 px-3 w-24 leading-none text-secondary bg-secondary"
          ref={this.priceInputRef}
          type="number"
          value={userPrice}
          onChange={this.setField}
        />

        <div className="text-accent text-xs sm:pl-5">
          {
            userPrice >= minPrice ? (
              `Author get $${this.calcPrice()}. 10% service fee`
            ) : (
                "Not less than the minimum price of the book"
              )
          }
        </div>
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
