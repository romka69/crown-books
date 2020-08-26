import React from "react"

import ToggleTheme from "../helpers/ToggleTheme"

const Footer = ({ children }) => {
  return (
    <>
      <hr className="mt-5" />
      <footer className="text-center py-3">
        <ToggleTheme />
        <div>
          {children}
        </div>
        <div>
          Training project from Thinknetica.
          <a
            className="underline text-accent pl-2"
            href="https://github.com/romka69/crown-books"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer;
