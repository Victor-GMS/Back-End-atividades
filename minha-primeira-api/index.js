import express from "express";




function validaParametro( parametro_a_ser_validado){
  const numero = parseInt(parametro_a_ser_validado)
  return isNaN(numero);
}
const app = express();//Primeiro pilar: instancia do express
app.use(express.json())
const PORT = 3000;

let ultimo_id = 1
let livros = [
  { id: 1, dsTitulo: "As cronicas de narnia", dsAutor: "C.S. Lewis", fgDisponivel: true },
]; // banco de dados

// metodos + caminhos + funcção
app.get("/", (req, res) => {
  res.send("rota raiz");
});

app.get("/livros", (req, res) => {
  res.json(livros);
});

app.get("/livros/:id", (req, res) => {
  if (!validaParametro(id)) {
    return res
      .status(400)
      .json({ mensagem: "o parametro deve ser um numero valido" });
  }
console.log(livros)
  //find
  let livro = livros.find((livro)=>{
    return livro.id === id;
  });

  if (!livro){
    return res.status(404).send()
  }

  res.json(livro);
});

app.post("/livros", (req,res) => {
    let autor_enviado = req.body.dsautor
    let titulo_enviado = req.body.dstitulo


    if (!autor_enviado || !titulo_enviado) {
        return res.status(400)
        .json({mensagem: "dados faltando, verifique autor e titulo"})
    }

    let id_novo = ultimo_id +1;
    ultimo_id++;


    let novo_livro = {
        id: id_novo,
        fgDisponivel: true,
        dsTitulo: titulo_enviado,
        dsAutor: autor_enviado,
    };
    livros.push(novo_livro)// eu adicionei um novo livro ao banco de dados

    res.status(201).json(novo_livro)
})

app.patch('/livros/:id', (req,res) =>{
  const id = parseInt(req.params.id)
  const novo_titulo = req.body.dsTitulo;
  const novo_autor = req.body.dsAutor;


  if(isNaN(id)) {
    return res
    .status(400)
    .json({mensagem: "indentificador presisa ser um numero valido"})
  }

  let index_livro = livros.findIndex((livro)=> {
    return livro.id === id;
  })

  if (index_livro ===-1) {
    return res.sendStatus(404);
  }

  let livro_a_ser_atualizado = livros[index_livro];
  console.log("Livro antes de atualizar")
  console.log(livro_a_ser_atualizado)

  if (novo_autor !==undefined ) livro_a_ser_atualizado.dsAutor = novo_autor;
  if (novo_titulo !==undefined) livro_a_ser_atualizado.dsTitulo = novo_titulo;
  res.json(livro_a_ser_atualizado);
  console.log("Livro depois de atuaizar")
  console.log(livro_a_ser_atualizado)
});


app.listen(PORT); // porta a ser ouvida

/* 
cadastrarm livros
post

buscar todos livros
get

buscar um livro pelo nome
get

buscar um livro pelo id
get

emprestar livros
put/patch

devolver livros
put/patch

deletar livros
delete
*/
