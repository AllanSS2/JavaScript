// object literals
const objetoPessoa = {
    nome: "João",
    idade: 30
};

console.log(objetoPessoa.nome)
console.log(objetoPessoa)
console.log(typeof objetoPessoa)

// Removendo uma propriedade do objeto
const pessoa = {
    nome: "Morgana",
    idade: 40
}; 

console.log(pessoa);
delete pessoa.idade;
console.log(pessoa);

// Adicionando uma propriedade ao objeto
const funcionario={
    nome: "Luis",
    matricula: 334567
}

console.log(funcionario)
funcionario.sobrenome = "Santana";
console.log(funcionario)


// método assign
const objeto1 = {
    nome:"João",
    idade:25
}

const objeto2 = {
    altura: 1.80,
    gênero: "masculino"
}

const objetoDestino = {

};
Object.assign(objetoDestino, objeto1, objeto2);

console.log(objetoDestino)

// método Keys
const objeto = {
    nome: "Joaquim",
    idade:21
}

const chaves = Object.keys(objeto);
console.log(chaves);

// mutação - atribuição
const hospede = {
    nome: "Alberto"
};

hospede.nome = "Junior"
console.log(hospede)
// mutação - inserção
hospede.sobrenome = "Lima"
console.log(hospede)

// mutação - operador de adição
const hospedeNovo = {
    nome: "Mariana",
    idade:56
}

hospedeNovo.idade += 2;
console.log(hospedeNovo.idade)

// mutação - deletar
delete hospedeNovo.nome;
console.log(hospedeNovo);

// método string: trim
const textoEspacado= "   Essa é uma string com espaços em branco       "
const textoSemEspacos = textoEspacado.trim();
console.log(textoSemEspacos)

// padStart
const numero = "1234";
// preencher com zeros para atingir 8 caracteres
const numeroFormatado = numero.padStart(8, "0");
console.log(numeroFormatado);

const codigo = "ABC"
// Preencher com traços para atingir 5 caracteres
const codigoPreenchido = codigo.padStart(5, "-");
console.log(codigoPreenchido);

// split
const texto = "Essa é uma string com espaços em branco";
// divide a string em um array de letras usando espaços como separadores
const letras = texto.split("")
console.log(letras);
// divide a string em um array de números usando vírgulas como separadores
const numeros2 = "1,2,3,4,5".split("");
console.log(numeros2);

// divide a string em uma array de 8 elementos, usando espaços como separadores
const partes = texto.split(" ",8)
console.log(partes)

// join 
const numerosJoin = [1,2,3,4,5];
// transforma o array em uma string, acrescentando a vírgula
const listaNumeros = numerosJoin.join();
console.log(numerosJoin)
console.log(listaNumeros)
console.log(typeof listaNumeros)


// junta os números com traços como separador
const listaNumerosTracos = numerosJoin.join("-");
console.log(listaNumerosTracos)


// 
const frutas = ["maçã","banana","laranja"]
const textoFrutas = frutas.join(" e ")
console.log(textoFrutas)

// repeat
const testandoRepeat = " Olá";
// repetindo a string 3 vezes
const textoRepetido = testandoRepeat.repeat(3)
console.log(textoRepetido)

// repetindo a string 0 vezes
const textoVazio = testandoRepeat.repeat(0)
console.log(textoVazio)

// rest operator
function minhaFuncao(a,b, ...args){
    console.log(a)
    console.log(b)
    console.log(args)
}

minhaFuncao(1,2,3,4,5,6)


// iterando sobre um array
const frutasA = ["maçã","uva","melância"]

for(const fruta of frutasA){
    console.log(fruta);
}

// desestruturando objetos
const usuario = {
    primeiroNome: "José",
    sobrenome:"Xavier",
    profissao:"Pedreiro"
}
console.log(usuario)

const[primeiroNome,sobrenome,profissao] = Object.values(usuario);
console.log(primeiroNome, sobrenome, profissao);

// desestruturando array
const array = ["João","Maria","Pedro"];

const[primeiro, segundo, terceiro ] = array;
console.log(primeiro)
console.log(segundo)
console.log(terceiro)


