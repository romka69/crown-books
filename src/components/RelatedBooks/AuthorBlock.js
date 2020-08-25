import React from "react"

import PropTypes from "prop-types"

const AuthorBlock = ({ author: { Name } }) => {
  return (
    <div className="text-center font-bold text-sm md:text-lg">
      {Name}
    </div>
  )
}

AuthorBlock.propTypes = {
  Name: PropTypes.string,
}

AuthorBlock.defaultValue = {
  Name: "Empty Author",
}

export default AuthorBlock
