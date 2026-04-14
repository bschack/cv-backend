import { Hono } from 'hono'
import data from "../data/cv-data.json" with { type: "json" };
import { cors } from 'hono/cors';

type Bindings = {
  FRONTEND_URL: string
  ENVIRONMENT: string
}

const app = new Hono<{ Bindings: Bindings }>()

app.use('/*', (c, next) => {
  return cors({
    origin: [c.env.FRONTEND_URL],
    allowMethods: ['GET'],
    allowHeaders: ['Content-Type'],
  })(c, next)
})

app.get('/', (c) => {
  return c.json(data)
})

export default app
