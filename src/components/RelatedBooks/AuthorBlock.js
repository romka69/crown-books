import React from "react"

import PropTypes from "prop-types"

const AuthorBlock = ({ author: { Name } }) => {
  return (
    <div style={styles.author}>
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

const styles = {
  author: {
    fontWeight: "bold",
    fontSize: "13px",
  },
}