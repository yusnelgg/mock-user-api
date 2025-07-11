import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/fake-user', (_req, res) => {
  res.json({
    name: 'John Doe',
    age: 30,
    occupation: 'Software Engineer'
  })
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})
