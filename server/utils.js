import axios from 'axios'
import https from 'https'

export const fetch = axios.create({
  baseURL: 'https://qa-interview-test.qa.splytech.io',
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
})

fetch.interceptors.response.use((res) => res.data, (err) => Promise.reject(err))
