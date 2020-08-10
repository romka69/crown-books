import React from "react"

import BookCard from "./index"
import RelatedBooks from "../RelatedBooks"
import AuthorList from "../AuthorList"

import { fetchBookById, fetchAuthors, fetchBooks } from "../../data/fetchData"

class BookContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      book: null,
      authorsData: null,
      relatedBooks: null,
    }
  }

  componentDidMount () {
    this.getData()
  }

  render () {
    const { book, authorsData, relatedBooks } = this.state

    return (
      <>
        {
          book && authorsData && relatedBooks ? (
            <>
              <BookCard book={book} />
              <RelatedBooks books={relatedBooks} />
              <AuthorList authors={authorsData} />
            </>
          ) : (
              <div>Loading...</div>
            )
        }
      </>
    )
  }

  getData () {
    fetchBookById("rechou1YPRb0takuM")
      .then(book => {
        this.setState({
          book
        })
        this.getAuthors(book.Authors)
        this.getRelatedBooks(book.RelatedBooks)
      })
  }

  getAuthors (ids) {
    fetchAuthors(ids)
      .then(authorsData => {
        this.setState({
          authorsData
        })
      })
  }

  getRelatedBooks (ids) {
    fetchBooks(ids)
      .then(relatedBooks => {
        this.setState({
          relatedBooks
        })
      })
  }
}

export default BookContainer