import React from "react"

import PropTypes from "prop-types"

const AuthorBlock = ({ author: { Name } }) => {
  return (
    <div className="text-center font-bold text-base md:text-xl ">
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
