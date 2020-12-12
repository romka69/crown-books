import React from "react"

import PropTypes from "prop-types"

import { truncate } from "../../../shared/helpers/truncate"

const AuthorBlock = ({ author: { Name } }) => {
  return (
    <div className="text-center font-bold text-base md:text-xl ">
      {truncate(Name, 12)}
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
