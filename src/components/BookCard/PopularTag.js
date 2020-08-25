import React from "react"

import PropTypes from "prop-types"

const PopularTag = ({ feeds }) => {
  if (Number.parseInt(feeds) > 20)
    return (
      <div className="font-semibold text-sm text-accent">
        Popular
      </div>
    )

  return ""
}

PopularTag.propTypes = {
  feeds: PropTypes.string,
}

PopularTag.defaultProps = {
  feeds: "Empty feeds",
}

export default PopularTag
