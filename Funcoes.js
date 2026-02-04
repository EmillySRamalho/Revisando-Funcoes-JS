//Function Expression 

const somar = function(a,b) {
  return a + b;
}

console.log(somar(4,2)); 

//Arrow Function 

const somar2 = (a, b) => a + b;
console.log(somar(9,2));

const quadrado = a => a * a;
console.log(quadrado(4)); 

//IIFE

var instrumento = 'Violão';

(function() {
  var instrumento = 'Guitarra';
  console.log(instrumento); 
})();

console.log(instrumento); 

//Variáveis privadas

function criarPessoa(nome, sobrenome) {
  const nomeCompleto = `${nome} ${sobrenome}`;

  function andar() {
    return `${nomeCompleto} andou`;
  }
  function nadar() {
    return `${nomeCompleto} nadou`;
  }
  return {
    nome,
    sobrenome,
    andar,
    nadar,
  }
}

const designer = criarPessoa('André', 'Rafael');
console.log(designer)
console.log(designer.andar())
console.log(designer.nadar())

// Ice Factory

'use strict';

function criarAnimal(nome, sobrenome) {
  const nomeCompleto = `${nome} ${sobrenome}`;
  function andar() {
    return `${nomeCompleto} andou`;
  }
  return Object.freeze({
    nome,
    sobrenome,
    andar,
  });
}

const fornecendoNome = criarAnimal('Bolinha','Pit');
console.log(fornecendoNome)
console.log(fornecendoNome.andar())
