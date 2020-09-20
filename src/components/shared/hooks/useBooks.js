import React, { useState, useEffect } from "react"

import { fetchAllBooks } from "../../../data/fetchData"

const useBooks = (params) => {
  const [books, setBooks] = useState(null)

  useEffect(() => {
    setBooks(null)

    fetchAllBooks(params).then(books => {
      setBooks(books)
    })
  }, [])

  return { books }
}

export default useBooks