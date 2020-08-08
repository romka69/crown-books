import React from "react"

import PropTypes from "prop-types"

const CoverBlock = ({ url }) => {
  return (
    <div style={styles.cover}>
      <img style={styles.imageCover} src={url} alt="" />
    </div>
  )
}

CoverBlock.propTypes = {
  url: PropTypes.string,
}

CoverBlock.defaultProps = {
  url: "https://avatars.mds.yandex.net/get-pdb/1946598/0e6b0532-257b-4a74-85ab-0e487c47c16e/s1200?webp=false",
}

export default CoverBlock

const styles = {
  cover: {
    border: "2px solid gray",
    height: "200px",
    overflow: "hidden",
  },
  imageCover: {
    width: "100%",
    maxWidth: "150px",
  },
}
