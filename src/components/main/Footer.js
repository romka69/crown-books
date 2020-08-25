import React from "react"

import ToggleTheme from "../helpers/ToggleTheme"

const Footer = ({ children }) => {
  return (
    <>
      <hr className="mt-5" />
      <footer className="text-center py-3">
        <ToggleTheme />
        {children}
      </footer>
    </>
  )
}

export default Footer;
