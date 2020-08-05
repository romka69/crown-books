import React from "react"

const Summary = ({ children }) => {
  return (
    <div style={styles.info}>{children}</div>
  )
}

export default Summary

const styles = {
  info: {
    marginTop: "25px",
    fontSize: "14px",
  },
}
