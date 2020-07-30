import React from "react"

class Donate extends React.Component {
  render () {
    return (
      <div>
        <button style={styles.action}>Donnate!</button>
      </div>
    )
  }
}

export default Donate

const styles = {
  action: {
    marginTop: "40px",
    minWidth: "100%",
  },
}
