import React from "react"
import { Helmet } from "react-helmet"

import Header from "./Header"
import AddBookForm from "./AddBookFrom"

const NewBook = () => (
  <>
    <Helmet>
      <title>Add New Book | Crown-Books</title>
    </Helmet>
    <Header>Add New Book</Header>
    <AddBookForm />
  </>
)

export default NewBook