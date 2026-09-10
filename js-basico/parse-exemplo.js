let meu_texto = "10";
console.log(typeof meu_texto); //string
let meu_valor_numerico = parseInt(meu_texto); //conversão para int
console.log(typeof meu_valor_numerico);//int
let meu_valor_flutuante = parseFloat("1.23");//conversâo para float
console.log(typeof meu_valor_flutuante);//float

let = meu_nome = "angelo";
console.log("Meu nome e do tipo: " + typeof meu_nome);

let meu_nome_em_numero = parseInt(meu_nome);
console.log("Meu nome agora é do tipo: " + meu_nome_em_numero);
console.log("Deu boa a conversão? -> " + !isNaN(meu_nome_em_numero));


let meu_numero = 123;
console.log(typeof meu_numero);

//"123"

let meu_numero_em_texto = String(meu_numero);
console.log(typeof meu_numero_em_texto);

console.log(meu_numero);
console.log(meu_numero_em_texto);


let teste = false;
console.log(typeof teste); //boolean

let teste_to_string = String(true);
console.log(typeof teste_to_string);