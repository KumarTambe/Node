import fs from 'fs'

fs.writeFileSync("notes.txt", "First note \n")

fs.appendFileSync("notes.txt", "Second note \n")

console.log(fs.readFileSync("notes.txt", "utf8"))


