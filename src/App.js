import React from "react"

import BookCard from "./BookCard"
import AuthorCard from "./AuthorCard"

class App extends React.Component {
  render () {
    return (
      <>
        <header style={styles.header}>Crown-Books</header>
        <main style={styles.main}>
          <BookCard book={this.props.book} />
          <AuthorCard author={this.props.book.Author} />
        </main>
        <footer style={styles.footer}>
          <div>&copy; Books crowdfunding, {new Date().getFullYear()}</div>
          <div>Training project from TN. <a href="https://github.com/romka69/crown-books" target="_blank">GitHub</a></div>
        </footer>
      </>
    )
  }
}

export default App;

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
  main: {
    margin: "0 auto",
    maxWidth: "910px",
  },
  footer: {
    padding: "0 10%",
    marginTop: "50px",
  },
}
