const http = require("http")

const server = http.createServer((req, res) => {
    console.log(req.url)

    if(req.url == "/users" && req.method == "GET"){
        res.end("User api")
    }

    else if(req.url == '/users' && req.method == "DELETE"){
        res.end("Users 2")
    }

    else if(req.url == "/about"){
        res.writeHead(200, { 'Content-Type' : 'text/html' })
        res.end("<h1>Hello Server Side </h1>")
    }

    else {
        res.end("404 -> Not Found")
    }
})

server.listen(8080, () => {
    console.log("Server is Runing...")
})