import React from "react"

class NameRow extends React.Component {
  render () {
    return (
      <div style={styles.author}>{this.props.children}</div>
    )
  }
}

export default NameRow

const styles = {
  author: {
    marginTop: "15px",
    marginBottom: "3px",
    fontSize: "20px",
    fontWeight: "600",
  },
}
