import express from 'express'
import cors from 'cors'
import fake_user from './routes/fake_user'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/fakeUser', fake_user)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})
