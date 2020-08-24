import React from "react"

import UserInfo from "./UserInfo"
import ToggleTheme from "../../helpers/ToggleTheme"


const Header = ({ children }) => {
  return (
    <header style={styles.header}>
      {children}

      <UserInfo />
      <ToggleTheme />
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
