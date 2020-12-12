import React from "react"

import PropTypes from "prop-types"

import Price from "./Price"

const Prices = ({ pricesProps }) => {
  const { MinPrice, DesiredPrice, CurrentSum, ExpectedPrice } = pricesProps

  return (
    <>
      <hr className="mt-3" />
      <div className="flex justify-between mt-3 text-md font-semibold">
        <Wrapper>
          <Price
            label="Minimal price"
            val={MinPrice}
            className="w-full"
          />
          <Price
            label="Desired price"
            val={DesiredPrice}
            className="w-full mt-3 md:mt-0"
          />
        </Wrapper>
        <Wrapper>
          <Price
            label="Current sum"
            val={CurrentSum}
            className="w-full"
          />
          <Price
            label="Expected price"
            val={ExpectedPrice}
            className="w-full mt-3 md:mt-0"
          />
        </Wrapper>
      </div>
    </>
  )
}

Prices.propTypes = {
  Price: Price.propTypes.val,
}

export default Prices

const Wrapper = ({ children }) => (
  <div className="w-1/2 md:w-full md:flex justify-between">
    {children}
  </div>
)
