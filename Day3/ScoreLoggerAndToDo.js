import fs from 'fs'

// async function saveScore(name, score) {
//     await fs.promises.writeFile("scores.txt", ` ${name}:${score} \n`)
// }

// async function addScore(name, score) {
//     await fs.promises.appendFile("scores.txt", `${name}:${score} \n`)
// }

// async function readScore() {
//     const data = await fs.promises.readFile("scores.txt", "utf8")
//     console.log(data)
// }

// async function deleteScores() {
//     await fs.promises.unlink("scores.txt")
// }

// async function main() {
//     await saveScore("Kumar", 69)
//     await addScore("Joe", 99)
//     await readScore()
//     await deleteScores()
// }

// main()

async function addTodo(task) {
    await fs.promises.appendFile("ToDo.txt", task + "\n")
}

async function readTodos() {
    const data = await fs.promises.readFile("ToDo.txt", "utf8")
    console.log(data)
}

async function deleteTodos() {
    await fs.promises.unlink("ToDo.txt")
}

async function main() {
    await addTodo("Study")
    await addTodo("Clean")
    await addTodo("Sleep")
    await readTodos()
    await deleteTodos()
}

main()