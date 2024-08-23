
import { Hono } from 'hono'
import { bodyLimit } from "hono/body-limit"
import { cors } from "hono/cors"
import { logger } from "hono/logger"
import { etag } from "hono/etag"
import { secureHeaders } from 'hono/secure-headers'
import { timing } from 'hono/timing'
import { connectToDatabase } from './database'
import userRouter from './routes/user.router'

const app = new Hono().basePath('/api')

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

app.all('/health', (c) => {
  return c.json({
    message: 'alive'
  })
})

app.route('/', userRouter)

export default app
