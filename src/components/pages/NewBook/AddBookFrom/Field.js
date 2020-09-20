import React from "react"

const Field = ({ wrapperClass, placeholder, type, name, className, register, ...inputProps }) => {
  const Component = type === "textarea" ? "textarea" : "input"

  return (
    <div
      className={`w-full sm:w-1/2 px-3 mb-6 sm:mb-8 ${wrapperClass ? wrapperClass : ''}`}
    >
      <Component
        className={`block w-full border rounded py-3 px-4 leading-none text-secondary bg-secondary ${className ? className : ''}`}
        placeholder={placeholder}
        name={name}
        type={type}
        ref={register}
        {...inputProps}
      />
    </div>
  )
}

export default Field