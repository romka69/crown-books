import React from "react"

import BookCard from "./index"
import RelatedBooks from "../RelatedBooks"
import AuthorList from "../AuthorList"

import withBook from "../HOC/withBook"

class BookContainer extends React.Component {
  render () {
    const { bookData: { book, authorsData, relatedBooks } } = this.props

    return (
      <>
        <BookCard isLoading={[!book, "Book"]} book={book} />

        <RelatedBooks isLoading={[!relatedBooks, "Related books"]} books={relatedBooks} />

        <AuthorList isLoading={[!authorsData, "Authors"]} authors={authorsData} />
      </>
    )
  }
}

export default withBook(BookContainer)