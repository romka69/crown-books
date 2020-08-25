import React from "react"

const Header = ({ children }) => {
  return (
    <h5 className="h5 pb-2 font-semibold text-center">
      {children}
    </h5>
  )
}

export default Header