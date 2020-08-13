import React from "react"

const withLoader = EnhancedComponent => (
  function withLoader (props) {
    return (
      props.isLoading[0]
        ? <div>Loading {props.isLoading[1]}</div>
        : <EnhancedComponent {...props} />
    )
  }
)

export default withLoader