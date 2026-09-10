import express from 'express'

const app = express();//primeiro pillar: instancia do express


/**
 * idLivro -> indentificador / int
 * dsTitulo -> string
 * dsAutor -> string
 * fgDisponivel -> boolean
 */
let livros = []//banco de dados
//rota:
//metodo + caminho + funcao
app.get('/', (req,res) => {
    res.send("seja bem vindo a gestão de livros")
})

app.get('/livros', (req, res) => {//segundo pilar: rota
    res.send("Hello world");
    console.log('Victor chamando servidor na /livros')
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
