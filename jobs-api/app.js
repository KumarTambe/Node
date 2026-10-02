import express from 'express'
import jobRouter from './routes/jobRoutes.js'
import authRouter from './routes/authRoutes.js'

const app = express()
app.use(express.json())

app.use('/api/jobs', jobRouter)
app.use('/api/auth', authRouter)

export default app