


// function tabuada(){
//     let valor = Number(prompt("Escreva um número"))
//     for(i= 0; i<= 10;i++){
//         console.log(`${i} X ${valor} = ${i * valor}`)
//     }
// }

// tabuada();




//Função de prompt

// const nome = prompt("Qual seu nome?");
// console.log(nome);

// const idade = prompt("Qual sua idade?")
// console.log(idade);



// Retornando o valor absoluto de 5
const abs= Math.abs(-5)
console.log(abs)


// Arredondar 3.5 para o inteiro mais próximo
const round= Math.round(3.5)
console.log(round)

// Retornar a raiz quadrada de 16
const sqrt = Math.sqrt(16)
console.log(sqrt)

// Elevando 2 ao cubo
const pow = Math.pow(2,3)
console.log(pow)

// Exibindo uma mensagem de aviso no console
console.warn("Atenção: está é uma mensagem de aviso.")
 
// exibindo uma mensagem de erro no console
console.error("Ocorreu um erro")
 
// exibindo uma mensagem informativa no console
console.info("Essa é uma mensagem informativa")
 
// criando um grupo de mensagem no console
console.group("Mensagem de teste")
console.log("Esta é uma mensagem")
console.log("Esta é outra mensagem de teste")
console.groupEnd()


// Continue no laço for
for(let i = 1; i <= 7; i++){
    //Pular a impressão do número 5
    if(i === 5){
        continue;
    }
    console.log(i);
}

// Function
function multiplicar(num1, num2){
    return num1 * num2
}
console.log(multiplicar(3,7))

// Arrow function
const multiplicar2 = (num1, num2)=> {
    return num1 * num2
}
console.log(multiplicar2(3,7))