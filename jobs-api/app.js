import express from 'express'
import router from './routes/jobRoutes.js'

const app = express()
app.use(express.json())

app.use('/api/jobs', router)

export default app