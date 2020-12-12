import React from "react"

const Actions = ({ disabled, children }) => {
  return (
    <div className="flex justify-center">
      <button
        className="w-40 shadow bg-secondary text-secondary font-bold py-2 px-4 rounded"
        type="submit"
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  )
}

export default Actions