import { backend } from "../api"

function fetchBookById (id) {
  return backend.books.show(id)
    .then(({ data }) => prepareBook(data))
    .then(data => {
      return data
    })
}

function fetchRelatedBooks (ids) {
  let books = []

  ids.map(
    id => {
      fetchBookById(id)
        .then(data => {
          books.push(data)
        })
    }
  )

  return books
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
    Authors: data.fields.Authors,
    MinPrice: data.fields.MinPrice,
    DesiredPrice: data.fields.DesiredPrice,
    CurrentSum: data.fields.CurrentSum,
    ExpectedPrice: data.fields.ExpectedPrice,
    RelatedBooks: data.fields.RelatedBooks,
  }
}

export { fetchBookById, fetchRelatedBooks }