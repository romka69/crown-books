import React, { useContext } from "react"

import ThemeContext from "../../contexts/ThemeContext"

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  function isDark () {
    return theme === "dark"
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={isDark()}
        onChange={e => setTheme(e.target.checked ? "dark" : "light")}
      ></input>
      To dark
    </label>
  )
}

export default Toggle