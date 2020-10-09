import React from "react"

import PropTypes from "prop-types"

const PopularTag = ({ feeds }) => {
  if (feeds > 20)
    return (
      <div className="font-semibold text-sm text-accent">
        Popular
      </div>
    )

  return ""
}

PopularTag.propTypes = {
  feeds: PropTypes.number,
}

PopularTag.defaultProps = {
  feeds: 0,
}

export default PopularTag
