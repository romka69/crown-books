import React from "react"

class Summary extends React.Component {
  render () {
    return (
      <div style={styles.info}>{this.props.children}</div>
    )
  }
}

export default Summary

const styles = {
  info: {
    marginTop: "25px",
    fontSize: "14px",
  },
}
