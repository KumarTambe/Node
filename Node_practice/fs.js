import fs from 'fs'

async function main() {
    // await fs.promises.writeFile('diary.txt', 'Day 1: started learning Node', 'utf8')

    // await fs.promises.appendFile('diary.txt', '\nDay 2: learning fs module', 'utf8')

    // const content = await fs.promises.readFile('diary.txt', 'utf8')
    // console.log(content)

    // await fs.promises.unlink('diary.txt')

    await fs.promises.writeFile('scores.txt', 'Alice : 90')
    await fs.promises.appendFile('scores.txt', '\nBob:85')
    await fs.promises.appendFile('scores.txt', '\nCharlie:92')
    const content = await fs.promises.readFile('scores.txt', 'utf8')
    console.log(content)
    await fs.promises.unlink('scores.txt')

}

main()

