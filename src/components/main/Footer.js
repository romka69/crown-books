import React from "react"

const Footer = ({ children }) => {
  return (
    <footer style={styles.footer}>
      {children}
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
