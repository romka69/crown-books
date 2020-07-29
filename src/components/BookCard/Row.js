import React from "react"

class Row extends React.Component {
  render () {
    return (
      <div style={styles.character}>{this.props.children}</div>
    )
  }
}

export default Row

const styles = {
  character: {
    marginTop: "10px",
    fontSize: "18px",
    fontWeight: "600",
  },
}
