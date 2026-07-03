import http from 'http'

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({ name: "Kumar", age: 21 }))
})

server.listen(3000, () => {
    console.log("Server running on port 3000")
})