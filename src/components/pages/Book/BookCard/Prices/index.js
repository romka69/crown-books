import React from "react"

import PropTypes from "prop-types"

import Wrapper from "./Wrapper"
import Price from "./Price"

const Prices = ({ pricesProps }) => {
  const { MinPrice, DesiredPrice, CurrentSum, ExpectedPrice } = pricesProps

  return (
    <>
      <hr className="mt-3" />
      <div className="flex justify-between mt-3 text-md font-semibold">
        <Wrapper>
          <div className="w-full">
            <Price
              label="Minimal price"
              val={MinPrice}
            />
          </div>
          <div className="w-full mt-3 md:mt-0">
            <Price
              label="Desired price"
              val={DesiredPrice}
            />
          </div>
        </Wrapper>
        <Wrapper>
          <div className="w-full">
            <Price
              label="Current sum"
              val={CurrentSum}
            />
          </div>
          <div className="w-full mt-3 md:mt-0">
            <Price
              label="Expected price"
              val={ExpectedPrice}
            />
          </div>
        </Wrapper>
      </div>
    </>
  )
}

Prices.propTypes = {
  Price: Price.propTypes.val,
}

export default Prices
