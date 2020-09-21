import { backend } from "../api"

function fetchBookById (id) {
  return backend.books.show(id)
    .then(({ data }) => prepareBook(data))
    .then(data => {
      return data
    })
}

function fetchBooks (ids) {
  return Promise.all(
    ids.map(
      id => {
        return fetchBookById(id)
      }
    )
  )
}

function fetchAllBooks (params) {
  return backend.books.index(params)
    .then(({ data }) => prepareBooks(data))
    .then(data => {
      return data
    })
}

function fetchAuthorById (id) {
  return backend.authors.show(id)
    .then(({ data }) => prepareAuthor(data))
    .then(data => {
      return data
    })
}

function fetchAllAuthors (params) {
  return backend.authors.index(params)
    .then(({ data }) => prepareAuthors(data))
    .then(data => {
      return data
    })
}

function fetchAuthors (ids) {
  return Promise.all(
    ids.map(
      id => {
        return fetchAuthorById(id)
      }
    )
  )
}

function prepareBook (data) {
  return {
    Id: data.id,
    Title: data.fields.Title,
    Annotation: data.fields.Annotation,
    Pages: data.fields.Pages,
    Language: data.fields.Language,
    ProgressPercent: data.fields.ProgressPercent,
    Feeds: data.fields.Feeds,
    Cover: data.fields.Cover[0].thumbnails.large.url,
    MinPrice: data.fields.MinPrice,
    DesiredPrice: data.fields.DesiredPrice,
    CurrentSum: data.fields.CurrentSum,
    ExpectedPrice: data.fields.ExpectedPrice,
    RelatedBooks: data.fields.RelatedBooks,
    Authors: data.fields.Authors,
    Author: {
      Id: data.fields.Authors[0],
      Name: data.fields["Name (from Authors)"][0],
      Email: data.fields["Email (from Authors)"][0],
      AvatarURL: data.fields["AvatarURL (from Authors)"][0],
    }
  }
}

function prepareBooks (data) {
  let books = []

  data.records.map(record => {
    books.push(prepareBook(record))
  })

  return books
}

function prepareAuthor (data) {
  return {
    Id: data.id,
    Name: data.fields.Name,
    Email: data.fields.Email,
    AvatarURL: data.fields.AvatarURL,
    Info: data.fields.Info,
  }
}

function prepareAuthors (data) {
  let authors = []

  data.records.map(record => {
    authors.push(prepareAuthor(record))
  })

  return authors
}

export { fetchBookById, fetchBooks, fetchAllBooks, fetchAuthors, fetchAllAuthors }