import axios from 'axios'

export const fetch = axios.create({
  baseURL: 'http://localhost:8080',
})

fetch.interceptors.response.use(
  (res) => res.data,
  (err) => Promise.reject(err)
)
