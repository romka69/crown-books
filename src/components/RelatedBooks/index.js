import React from "react"

import PropTypes from "prop-types"

import Header from "./Header"
import BookCard from "./BookCard"

class RelatedBooks extends React.Component {
  render () {
    const { books } = this.props

    return (
      <>
        <Header>Related books</Header>

        <div style={styles.books}>
          {
            books.map(book => (
              <BookCard key={book.Id} book={book} />
            ))
          }
        </div>
      </>
    )
  }
}

RelatedBooks.propTypes = {
  books: PropTypes.array,
}

export default RelatedBooks;

const styles = {
  books: {
    display: "flex",
  },
}