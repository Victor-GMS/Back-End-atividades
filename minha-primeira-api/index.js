import express from 'express'

const app = express();//primeiro pillar: instancia do express


/**
 * idLivro -> indentificador / int
 * dsTitulo -> string
 * dsAutor -> string
 * fgDisponivel -> boolean
 */
let livros = [
    {idLivro: 1, dsTitulo: "as cronicas de narnia", dsAutor: " C S Lewis", fgDisponivel: true}
]
//banco de dados
//rota:
//metodo + caminho + funcao
app.get('/', (req,res) => {
    res.send("seja bem vindo a gestão de livros")
})

app.get('/livros', (req, res) => {//segundo pilar: rota
    res.json(livros);
});
app.get(`/livros/:id` , (req,res) => {
    console.log(req.params.id)
    const id = parseInt(req.params.id)
    if (isNaN(id)){
        res.status(400).json({mensagem: "o parametro presisa ser um numero valido"})
    }
});

app.listen(3000);//terceiro pillar: porta a ser ouvida

/*
cadastrar livros
    POST

buscar livros
buscar um livro pelo nome
buscar um livro pelo id
    GET

emprestar livro
devolver livro
    PUT/PATCH

deletar livro
    DELETE

*/
