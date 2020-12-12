import React from "react"

const Header = ({ children }) => {
  return (
    <h1 className="h1 p-10 pl-0 font-bold text-2xl">
      {children}
    </h1>
  )
}

export default Header