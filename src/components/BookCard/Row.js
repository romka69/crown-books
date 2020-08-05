import React from "react"

const Row = ({ children }) => {
  return (
    <div style={styles.character}>{children}</div>
  )
}

export default Row

const styles = {
  character: {
    marginTop: "10px",
    fontSize: "18px",
    fontWeight: "600",
  },
}
