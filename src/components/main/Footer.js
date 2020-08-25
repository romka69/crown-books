import React from "react"

import ToggleTheme from "../helpers/ToggleTheme"

const Footer = ({ children }) => {
  return (
    <footer style={styles.footer}>
      {children}
        <ToggleTheme />
    </footer>
  )
}

export default Footer;

const styles = {
  footer: {
    padding: "0 10%",
    marginTop: "50px",
  },
}
