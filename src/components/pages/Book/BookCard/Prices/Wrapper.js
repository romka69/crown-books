import React from "react"

const Wrapper = ({ children }) => {
  return (
    <div className="w-1/2 md:w-full md:flex justify-between">
      {children}
    </div>
  )
}

export default Wrapper