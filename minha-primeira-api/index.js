import express from 'express'

const app = express();//primeiro pillar: instancia do express

app.get('/', (req,res) => {
    res.send("seja bem vindo a gestão de livros")
})

app.get('/livros', (req, res) => {//segundo pilar: rota
    res.send("Hello world");
    console.log('Victor chamando servidor na /livros')
});

app.listen(3000);//terceiro pillar: porta a ser ouvida
