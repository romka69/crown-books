import React from "react"

import BookCard from "./index"
import RelatedBooks from "../RelatedBooks"

import Books from "../../data/relatedBooks.json"

import { fetchBookById, fetchRelatedBooks } from "../../data/fetchData"

class BookContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      apiBook: null,
      apiRelatedBooks: null,
    }
  }

  componentDidMount () {
    this.getBook()
  }

  render () {
    const { apiBook, apiRelatedBooks } = this.state

    return (
      <>
        {
          apiBook ? (
            <>
              <BookCard book={apiBook} />
              <RelatedBooks books={Books} />
            </>
          ) : (
              <div>Loading...</div>
            )
        }
      </>
    )
  }

  getBook () {
    fetchBookById("rechou1YPRb0takuM")
      .then(apiBook => {
        this.setState({
          apiBook
        })
        this.getRelatedBooks(apiBook.RelatedBooks)
      })
  }

  getRelatedBooks (ids) {
    fetchRelatedBooks(ids)
      .then(apiRelatedBooks => {
        this.setState({
          apiRelatedBooks
        })
      })
  }
}

export default BookContainer