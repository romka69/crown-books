import axios from "axios"

import dotenv from 'dotenv'

axios.defaults.headers.common["Authorization"] = `Bearer ${process.env.REACT_APP_API_TOKEN_AIRTABLE}`

const adapter = axios.create({
  baseURL: "https://api.airtable.com/v0/appbNWnZd34DqnhSz",
  timeout: 1000,
})

const backend = {
  books: {
    index: (params) => adapter.get("/Books", params),
    show: (id) => adapter.get(`/Books/${id}`),
  },
  authors: {
    index: (params) => adapter.get("/Authors", params),
    show: (id) => adapter.get(`/Authors/${id}`),
  },
}

export { backend }