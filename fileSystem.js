import fs from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function createNote(text) {
    fs.writeFileSync(path.join(__dirname, "notes.txt"), text)
}

function deleteNotes() {
    fs.unlinkSync(path.join(__dirname, "notes.txt"))
}

function readNotes() {
    console.log(fs.readFileSync(path.join(__dirname, "notes.txt"), "utf8"))
}

function addNote(text) {
    fs.appendFileSync(path.join(__dirname, "notes.txt"), text)
}

createNote("First note\n")
addNote("Second note\n")
readNotes()
deleteNotes()
