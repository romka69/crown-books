import React from "react"

const Header = ({ children }) => {
  return (
    <h3 className="h3 p-2 font-bold text-xl">
      {children}
    </h3>
  )
}

export default Header