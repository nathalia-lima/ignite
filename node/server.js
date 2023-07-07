import http from 'node:http'

// para habilitar o uso das importações utilizando o ESModules adicione no arquivo package.json a propriedade "type" com o valor de "module"

const server = http.createServer((req, res) => { //significa: request e response
    return res.end('Hello World')
})

server.listen(3333)
//localhost 3333

//aplicações http => APIs

// node --watch - para não precisar reinicar o servidor toda vez

