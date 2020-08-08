import React from "react"

const NameRow = ({ children }) => {
  return (
    <div style={styles.author}>{children}</div>
  )
}

export default NameRow

const styles = {
  author: {
    marginTop: "15px",
    marginBottom: "3px",
    fontSize: "20px",
    fontWeight: "600",
  },
}
