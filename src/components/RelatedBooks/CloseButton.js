import React from "react"

const CloseButton = ({ id, removeFromRelated }) => {
  return (
    <div style={styles.button}>
      <button onClick={() => removeFromRelated(id)}>X</button>
    </div>
  )
}

export default CloseButton

const styles = {
  button: {
    position: "relative",
    top: "-215px",
    right: "-125px",
  },
}