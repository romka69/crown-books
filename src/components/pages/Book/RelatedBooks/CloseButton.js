import React from "react"

const CloseButton = ({ id, removeFromRelated }) => {
  return (
    <button
      className="bg-secondary text-secondary font-bold px-1"
      onClick={() => removeFromRelated(id)}
    >
      X
    </button>
  )
}

export default CloseButton
