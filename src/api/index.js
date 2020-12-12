import axios from "axios"

const adapter = axios.create({
  baseURL: "https://api.airtable.com/v0/appbNWnZd34DqnhSz",
  timeout: 1000,
  headers: {
    "Authorization": `Bearer ${process.env.REACT_APP_API_TOKEN_AIRTABLE}`
  }
})

const backend = {
  books: {
    index: (params) => adapter.get("/Books", params),
    show: (id) => adapter.get(`/Books/${id}`),
    create: (params) => adapter.post("/Books", params)
  },
  authors: {
    index: (params) => adapter.get("/Authors", params),
    show: (id) => adapter.get(`/Authors/${id}`),
  },
}

export { backend }