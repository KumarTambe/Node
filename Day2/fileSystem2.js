import fs from 'fs'

async function createNote(text) {
    await fs.promises.writeFile("notes.txt", text)
}

async function readNote() {
    const data = await fs.promises.readFile("notes.txt", "utf8")
    console.log(data)
}

async function addNote(text) {
    await fs.promises.appendFile("notes.txt", text)
}

async function deleteNote() {
    await fs.promises.unlink("notes.txt")
}

async function main() {
    await createNote("heheheHa")
    await addNote("second heheheHa")
    await readNote()
    await deleteNote()
}

main()
