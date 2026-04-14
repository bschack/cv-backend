import { Hono } from 'hono'
import data from "../data/cv-data.json" with { type: "json" };
import { cors } from 'hono/cors';

const app = new Hono()

// enable CORS
app.use(cors())

app.get('/', (c) => {
  return c.json(data)
})

export default app
