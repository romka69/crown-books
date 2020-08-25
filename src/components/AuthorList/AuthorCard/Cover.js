import React from "react"

import PropTypes from "prop-types"

const Cover = ({ url }) => {
  return (
    <div className="flex justify-center">
      <img className="cover rounded border-solid border-2" src={url} alt="" />
    </div>
  )
}

Cover.propTypes = {
  url: PropTypes.string,
}

Cover.defaultProps = {
  url: "https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/c232a028-e829-4862-a10a-fbca6c390a7c.png",
}

export default Cover
