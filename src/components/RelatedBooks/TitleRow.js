import React from "react"

const TitleRow = ({ children }) => {
  console.log("render index")
  return (
    <h5 style={styles.title}>{children}</h5>
  )
}

export default TitleRow

const styles = {
  title: {
    fontSize: "14px",
    marginTop: "5px",
    marginBottom: "2px",
    textAlign: "center",
  },
}