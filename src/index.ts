import { Hono } from 'hono'
import data from "../data/cv-data.json" with { type: "json" };
import { cors } from 'hono/cors';

const app = new Hono()

app.use('/*', cors({
  origin: ['http://localhost:4200', 'https://cv.benschack.com'],
  allowMethods: ['GET'],
  allowHeaders: ['Content-Type'],
}))

app.get('/', (c) => {
  return c.json(data)
})

export default app
