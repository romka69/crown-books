import { backend } from "../api"

function createBook (fields) {
  return backend.books.create({
    records: [
      {
        fields
      }
    ]
  })
    .then(result => result.data)
}

export { createBook }
