import React from "react"

import { fetchBookById, fetchAuthors, fetchBooks } from "../../data/fetchData"

const withBook = EnhancedComponent => class withBook extends React.Component {
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
        <EnhancedComponent
          bookData={{ book, authorsData, relatedBooks }}
        />
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

export default withBook