import React from "react"

class Header extends React.Component {
  render () {
    return (
      <header style={styles.header}>
        {this.props.children}
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
