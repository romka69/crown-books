import React from "react"

import useBooks from "../../shared/hooks/useBooks"

import Header from "./Header"
import BookList from "./BookList"

const BookContainer = () => {
  const { books } = useBooks()

  return (
    <>
      <Header>Books</Header>
      <BookList
        isLoading={[!books, "Books"]}
        books={books}
      />
    </>

  )
}

export default BookContainer