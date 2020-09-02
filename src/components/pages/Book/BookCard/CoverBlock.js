import React from "react"

import PropTypes from "prop-types"

const CoverBlock = ({ url }) => {
  return (
    <img
      className="shadow-xl object-cover w-1/2 md:w-full rounded border-solid border-2 border-gray-200"
      src={url}
      alt=""
    />
  )
}

CoverBlock.propTypes = {
  url: PropTypes.string,
}

CoverBlock.defaultProps = {
  url: "https://avatars.mds.yandex.net/get-pdb/1946598/0e6b0532-257b-4a74-85ab-0e487c47c16e/s1200?webp=false",
}

export default CoverBlock
