import React from "react"

import UserInfo from "./Header/UserInfo"

class Header extends React.Component {
  render () {
    return (
      <header style={styles.header}>
        {this.props.children}

        <UserInfo />
      </header>
    )
  }
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
