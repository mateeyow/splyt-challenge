import express from 'express'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import cors from 'cors'
import { fetch } from './utils'

const app = express()
const BAD_REQUEST = 'BadRequest'

app.use(morgan('short'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors({ origin: 'http://localhost:3000' }))

app.get('/drivers', async (req, res, next) => {
  const { lat, long, count = 10 } = req.query

  if (!lat || !long) {
    res.status(400)
    return res.json({ code: BAD_REQUEST, message: 'Request must contain latitude and longitude' })
  }

  if (count > 50) {
    res.status(400)
    return res.json({ code: BAD_REQUEST, message: 'Count should not be more than 50' })
  }

  const url = `/api/drivers?latitude=${lat}&longitude=${long}&count=${count}`

  try {
    const response = await fetch.get(url)
    return res.json(response)
  } catch (err) {
    return next(err)
  }
})

module.exports = app
