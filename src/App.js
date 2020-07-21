import React from "react"

import BookCard from "./BookCard"
import AuthorCard from "./AuthorCard"

class App extends React.Component {
  render () {
    return (
      <div style={styles.container}>
        <BookCard book={this.props.book} />
        <AuthorCard author={this.props.book.Author} />
      </div>
    )
  }
}

export default App;

const styles = {
  container: {
    margin: "0 auto",
    maxWidth: "910px",
  }
}
