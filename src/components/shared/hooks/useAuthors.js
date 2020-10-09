import React, { useState, useEffect } from "react"

import { fetchAllAuthors } from "../../../data/fetchData"

const useAuthors = (params) => {
  const [authors, setAuthors] = useState(null)

  useEffect(() => {
    setAuthors(null)

    fetchAllAuthors(params).then(authors => {
      setAuthors(authors)
    })
  }, [])

  return { authors }
}

export default useAuthors