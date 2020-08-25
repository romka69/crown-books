import React from "react"

const Wrapper = ({ children }) => {
  return (
    <div className="flex flex-wrap -mx-3 md:mb-2">
      {children}
    </div>
  )
}

export default Wrapper