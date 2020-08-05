import React from "react"

import PropTypes from "prop-types"

const Cover = ({ url }) => {
  return (
    <div style={styles.cover}>
      <img style={styles.imageCover} src={url} alt="" />
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

const styles = {
  cover: {
    border: "2px solid gray",
    height: "230px",
    overflow: "hidden",
  },
  imageCover: {
    height: "230px",
  },
}
