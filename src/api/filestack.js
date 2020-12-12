import axios from "axios"

const adapter = axios.create({
  baseURL: "https://www.filestackapi.com/api",
  tileout: 5000
})

const uploadFile = (file) => {
  return (
    adapter.post("/store/S3", file, {
      params: {
        key: process.env.REACT_APP_API_TOKEN_FILESTACK
      }
    }).then(res => { return res.data })
  )
}

export { uploadFile }