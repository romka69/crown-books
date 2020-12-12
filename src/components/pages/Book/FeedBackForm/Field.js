import React from "react"

const Field = ({ placeholder, value, name, onChange }) => {
  return (
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <input
        className="block w-full border rounded py-3 px-4 leading-none text-secondary bg-secondary"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  )
}

export default Field