//crie um array de objetos
//encontre, usando um FOR um unico registro, de acordo com hma condição

//depois, encontre o mesmo registro usando um find


let filmes = [
    {id: 1, nome: "Batman: O Cavaleiro das Trevas", duracao_minutos: 164},
    {id: 2, nome: "Homem-Aranha: Sem Volta Para Casa", duracao_minutos: 148},
    {id: 3, nome: "Vingadores: Ultimato", duracao_minutos: 181},
    {id: 4, nome: "Interestelar", duracao_minutos: 169},
    {id: 5, nome: "O Senhor dos Anéis: A Sociedade do Anel", duracao_minutos: 178},
    {id: 6, nome: "Harry Potter e a Pedra Filosofal", duracao_minutos: 152},
    {id: 7, nome: "Jurassic Park", duracao_minutos: 127},
    {id: 8, nome: "Toy Story", duracao_minutos: 81},
    {id: 9, nome: "O Rei Leão", duracao_minutos: 88},
    {id: 10, nome: "Matrix", duracao_minutos: 136}
];



// for (i = 0; i < filmes.length; i++) {
//     let filme = filmes[i]
//     if (filme.id ===5) {
//         console.log("----filme encontrado----")
//         console.log(filmes[i]);
//         break;
//     }
// };





const filme_encontrado = filmes.find((f) => {
    console.log("filme encontrado")
    return true

    
});

console.log(filme_encontrado)