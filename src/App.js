import React from "react"

import PropTypes from "prop-types"

import Header from "./components/main/Header"
import BookCard from "./components/BookCard"
import RelatedBooks from "./components/RelatedBooks"
import AuthorList from "./components/AuthorList"
import Form from "./components/Form"
import Footer from "./components/main/Footer"

import Books from "./data/relatedBooks.json"

class App extends React.Component {
  render () {
    const { book, book: { Authors } } = this.props

    return (
      <>
        <Header>Crown-Books</Header>

        <main style={styles.main}>
          <BookCard book={book} />
          <RelatedBooks books={Books} />
          <AuthorList authors={Authors} />
          <Form />
        </main>

        <Footer>
          <div>&copy; Books crowdfunding, {new Date().getFullYear()}</div>
          <div>Training project from TN. <a href="https://github.com/romka69/crown-books" target="_blank">GitHub</a></div>
        </Footer>
      </>
    )
  }
}

App.propTypes = {
  book: PropTypes.object,
  books: PropTypes.array,
  Authors: PropTypes.object,
}

export default App;

const styles = {
  main: {
    margin: "0 auto",
    maxWidth: "910px",
  },
}
