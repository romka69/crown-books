import React from "react"

const Wrapper = ({ children }) => {
  return (
    <div className="flex justify-evenly">
      {children}
    </div>
  )
}

export default Wrapper