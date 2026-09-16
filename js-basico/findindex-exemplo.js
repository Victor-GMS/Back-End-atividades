const lista_de_carros = [
    {modelo: "Civic", marca: "Honda", hp: 155},
    {modelo: "Corolla", marca: "Toyota", hp: 177},
    {modelo: "Mustang", marca: "Ford", hp: 450},
    {modelo: "Onix", marca: "Chevrolet", hp: 116},
    {modelo: "Jetta", marca: "Volkswagen", hp: 230},
    {modelo: "Supra", marca: "Toyota", hp: 382}
];

for (i = 0; i < lista_de_carros.length; i++) {
    let carro_da_vez = lista_de_carros[i];
    if (carro_da_vez.hp >= 200) {
        console.log("Carro potente encontrado: " + carro_da_vez.modelo);
        break;
    }
};

// const carroPotente = lista_de_carros.find((carro) => carro.hp >= 200);
// console.log(carroPotente);

const posicao_do_carro_potente = lista_de_carros.findIndex((carro) => carro.hp >= 200);
console.log("O carro potente está na posição: " + posicao_do_carro_potente);

const carro_potente = lista_de_carros[posicao_do_carro_potente];
console.log("O carro potente é: " + carro_potente.modelo);
