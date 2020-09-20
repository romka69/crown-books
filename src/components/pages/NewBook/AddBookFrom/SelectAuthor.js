import React from "react"

const Select = ({ errors, register, ...inputProps }) => {
  return (
    <div
      className="w-full px-3 mb-6"
    >
      <select
        className="block w-full border rounded py-3 px-4 leading-none text-secondary bg-secondary"
        ref={register}
        {...inputProps}
      >
        <option value="recpCnRph69uTl4GJ">Author 1</option>
        <option value="recfhKriS4CftQGCJ">Author 2</option>
      </select>
      {errors && errors[inputProps.name] && <span className="text-red-600">{errors[inputProps.name].message}</span>}
    </div >
  )
}

export default Select