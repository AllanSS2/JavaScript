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

