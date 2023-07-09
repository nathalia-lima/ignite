import http from 'node:http'

// rotas http = caminhos na api

/* HTTP Status Code: códigos (números de tres digitos) uqe trazem info a respeito de como foi sua requisição, se deu tudo certo, aconteceu algo etc
*/

/*
HTTP
    - metodo http
    - URL 

Metodos mais comuns: 
    GET: buscar recurso do backend
    POST: criar recurso
    PUT: editar /atualizar recurso (atualizando muitos recursos de uma vez)
    PATCH: atualiar info unica especifica de um recurso (atualizando info especifica)
    DELETE: deletar um recurso

o conjunto do metodo http e o recurso (url) é oq da a rota
exemplo:
get /users = buscando um usuario no backend

*/

// Stateful: aplicação onde a informação sendo guardada em memoria, localmente
//Stateless: não salva em memoria, salva em coisas externas, como banco de dados 

// para habilitar o uso das importações utilizando o ESModules adicione no arquivo package.json a propriedade "type" com o valor de "module"

//cabeçalhos (requisição/resposta) = metadados ---- Metadados da requisição HTTP que podem incluir informações adicionais da requisição e resposta

const users = []
//toda vez que o servidor reinicia a informação vai embora, pois é local

const server = http.createServer((req, res) => { //significa: request e response
    const { method, url} = req

    //console.log(method, url)

    if (method == 'GET' && url == '/users'){
        return res
        .setHeader('Content-Type', 'application/json')
        .end(JSON.stringify(users))
    }

    if (method == 'POST' && url == '/users'){
        users.push({
            id: 1,
            name: 'Nath',
            email: 'nath@exemplo.com'
        })
        return res.writeHead(201).end()
    }

    return res.writeHead(404).end()


})

server.listen(3333)
//localhost 3333

//aplicações http => APIs

// node --watch - para não precisar reinicar o servidor toda vez

