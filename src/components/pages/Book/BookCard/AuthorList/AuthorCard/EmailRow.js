import React from "react"

const EmailRow = ({ children }) => {
  return (
    <div className="undeline text-base md:text-sm break-words">
      <a href={"mailto:" + children}>
        {children}
      </a>
    </div>
  )
}

export default EmailRow
