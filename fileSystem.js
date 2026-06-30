import fs from 'fs'

import path from 'path'
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
fs.writeFileSync(path.join(__dirname, "notes.txt"), "First note \n")

fs.appendFileSync(path.join(__dirname, "notes.txt"), "Second note \n")

console.log(fs.readFileSync(path.join(__dirname, "notes.txt"), "utf8"))


