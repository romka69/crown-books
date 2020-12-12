import React from "react"

import PropTypes from "prop-types"

const CoverBlock = ({ url, title }) => {
  return (
    <div className="h-64 sm:w-1/4 flex-none bg-cover text-center overflow-hidden rounded-t sm:rounded-t-none sm:rounded-l border" style={{ backgroundImage: `url(${url})` }} title={title}>
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
