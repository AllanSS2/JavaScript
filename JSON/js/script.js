// objeto de Javascript
const pessoa = {
    nome:"Maria",
    idade:52,
    profissao:"Desenvolvedora de Sistemas"
}

// transformando em JSON
const stringJSON = JSON.stringify(pessoa);
console.log(stringJSON)

// converter de volta para objeto
const pessoa2 = JSON.parse(stringJSON);
console.log(pessoa2)

// JSON
const meuJSON = '{"nome": "Junior","idade":21, "skills": ["HTML","CSS", "Javascript"]}';
console.log(meuJSON);
console.log(typeof meuJSON);

// JSON para objeto e objeto para JSON
const meuObjeto = JSON.parse(meuJSON);
console.log(meuObjeto)

console.log(meuObjeto.nome)
console.log(typeof meuObjeto)


// JSON inválido 
const invalidoJSON = '{"nome": Junior, "idade":21}';

const novoinvalidoJSON = JSON.parse(invalidoJSON)