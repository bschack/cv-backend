import { Hono } from 'hono'
import data from "../data/cv-data.json" with { type: "json" };

const app = new Hono()

app.get('/', (c) => {
  return c.json(data)
})

export default app
