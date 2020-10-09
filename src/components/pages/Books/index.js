import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"

import useBooks from "../../shared/hooks/useBooks"

import Header from "./Header"
import BookList from "./BookList"
import { newBookPath } from "../../shared/helpers/routes"

const BookContainer = () => {
  const { books } = useBooks()

  return (
    <>
      <Helmet>
        <title>All Books | Crown-Books</title>
      </Helmet>
      <Link
        to={newBookPath}
        className="relative w-40 shadow bg-secondary text-secondary font-bold py-2 px-4 rounded text-center"
        style={styles.addButton}
      >
        Add Book
      </Link>
      <Header>Books</Header>
      <BookList
        isLoading={[!books, "Books"]}
        books={books}
      />
    </>

  )
}

export default BookContainer

const styles = {
  addButton: {
    top: "-13px",
  },
}