import React from "react"

const EmailRow = ({ children }) => {
  return (
    <div>
      <a href={"mailto:" + children}>{children}</a>
    </div>
  )
}

export default EmailRow

const styles = {
  author: {
    marginTop: "15px",
    marginBottom: "3px",
    fontSize: "20px",
    fontWeight: "600",
  },
}
