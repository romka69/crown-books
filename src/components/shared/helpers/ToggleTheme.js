import React, { useContext } from "react"

import ThemeContext from "../../../contexts/ThemeContext"

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  function isDark () {
    return theme === "dark"
  }

  return (
    <>
      <input
        className="mr-3 mb-5 cursor-pointer"
        id="changeTheme"
        type="checkbox"
        checked={isDark()}
        onChange={e => setTheme(e.target.checked ? "dark" : "light")}
      ></input>
      <label className="text-accent underline cursor-pointer" htmlFor="changeTheme">Dark theme</label>
    </>
  )
}

export default Toggle