import React, { useState, useEffect } from "react"

import { fetchBookById, fetchAuthors, fetchBooks } from "../../../data/fetchData"

const useBook = (bookId) => {
  const [book, setBook] = useState(null)
  const [relatedBooks, setRelatedBooks] = useState(null)
  const [authorsData, setAuthorsData] = useState(null)

  useEffect(() => {
    setBook(null)
    setRelatedBooks(null)
    setAuthorsData(null)

    fetchBookById(bookId).then(book => {
      setBook(book)

      fetchBooks(book.RelatedBooks).then(relatedBooks => {
        setRelatedBooks(relatedBooks)
      })

      fetchAuthors(book.Authors).then(authorsData => {
        setAuthorsData(authorsData)
      })
    })
  }, [])

  return { book, relatedBooks, authorsData }
}

export default useBook