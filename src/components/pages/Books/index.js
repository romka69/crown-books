import React from "react"
import { Helmet } from "react-helmet"

import useBooks from "../../shared/hooks/useBooks"

import Header from "./Header"
import BookList from "./BookList"

const BookContainer = () => {
  const { books } = useBooks()

  return (
    <>
      <Helmet>
        <title>All Books | Crown-Books</title>
      </Helmet>
      <Header>Books</Header>
      <BookList
        isLoading={[!books, "Books"]}
        books={books}
      />
    </>

  )
}

export default BookContainer