import React from "react"
import { Helmet } from "react-helmet"

import useAuthors from "../../shared/hooks/useAuthors"

import Header from "./Header"
import AddBookForm from "./AddBookFrom"

const NewBook = () => {
  const { authors } = useAuthors()

  return (
    <>
      <Helmet>
        <title>Add New Book | Crown-Books</title>
      </Helmet>
      <Header>Add New Book</Header>
      <AddBookForm
        authors={authors}
      />
    </>
  )
}

export default NewBook