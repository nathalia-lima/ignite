import http from 'node:http'


import { json } from './middleware/json.js'
import { routes } from './routes.js'

/*
formas de enviarem informações para a api

:: os dois primeiros n devem ser utilizados para envio de infos sensiveis, pois as infos são enviadas pela url

- Query Parameters: parameters nomeados que enviamos no proprio endereço da requisição
ex http://localhost:3333/users?userId=1, o userId seria query parameter
usados qndo vc precisa ter uma url Stateful, ou seja, para filtros, paginação, busca, coisas q modificam a resposta/url, não-obrigatorio

- Route Parameters: parameters não nomeados, identificação de recurso

- Request Body: envio de infos de form, (pelo method https)
*/

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



//const users = []
//toda vez que o servidor reinicia a informação vai embora, pois é local

const server = http.createServer(async (req, res) => { //significa: request e response
    const { method, url} = req

    //console.log(method, url)

    await json (req, res)

    //console.log(body)
    //console.log(body.name)

    const route = routes.find(route => {
        return route.method == method && route.path == url 
    })

    if (route) {
        return  route.handler(req, res)
    }

    return res.writeHead(404).end()


})

server.listen(3333)
//localhost 3333

//aplicações http => APIs

// node --watch - para não precisar reinicar o servidor toda vez

