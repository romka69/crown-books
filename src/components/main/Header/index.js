import React from "react"

import UserInfo from "./UserInfo"


const Header = ({ children }) => {
  return (
    <header style={styles.header}>
      {children}

      <UserInfo />
    </header>
  )
}

export default Header;

const styles = {
  header: {
    backgroundColor: "#222222",
    color: "#fff",
    minHeight: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
}
