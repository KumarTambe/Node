import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const filePath = path.join(__dirname, '..', '.env')

dotenv.config({ path: filePath })
console.log(process.env.PORT)
console.log(process.env.DB_NAME)

