
import { Hono } from 'hono'
import { bodyLimit } from "hono/body-limit"
import { cors } from "hono/cors"
import { logger } from "hono/logger"
import { etag } from "hono/etag"
import { secureHeaders } from 'hono/secure-headers'
import { timing } from 'hono/timing'
import { connectToDatabase } from './database'
import userModel from './database/models/user.model'

const app = new Hono()

app.use(bodyLimit({ maxSize: 50_000 * 1024 })) // 50MB
app.use(cors())
app.use(logger())
app.use(etag())
app.use(secureHeaders())
app.use(timing())

await connectToDatabase()


app.get('/', (c) => {
  return c.json({
    message: 'alive'
  })
})

app.get('/health', (c) => {
  return c.json({
    message: 'alive'
  })
})
export default app
