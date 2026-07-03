import http from 'http'

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json")
    if (req.url == "/user") {
        res.end(JSON.stringify({ name: "Kumar", age: 21 }))
    } else if (req.url == "/products") {
        res.end(JSON.stringify({ product: "Laptop", price: 50000 }))
    } else {
        res.end(JSON.stringify({ error: "404 Not Found" }))
    }
})

server.listen(1234, () => {
    console.log("Hello there")
})


