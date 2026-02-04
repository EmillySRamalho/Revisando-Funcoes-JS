# 📘 JavaScript Functions

Este repositório contém exemplos práticos de **funções em JavaScript**, explorando diferentes formas de escrita e conceitos importantes como **escopo**, **closures**, **IIFE**, **factory functions** e **imutabilidade**.

É um material voltado para **aprendizado e prática**, ideal para quem está estudando JavaScript moderno.

---

## 🧮 Function Expression

Exemplo de uma função atribuída a uma variável:

```javascript
const somar = function(a, b) {
  return a + b;
};

console.log(somar(4, 2));
```

📌 Muito usada quando queremos controlar melhor o escopo da função.

---

## ⚡ Arrow Function

Sintaxe mais curta e moderna para criar funções:

```javascript
const somar2 = (a, b) => a + b;
console.log(somar2(9, 2));

const quadrado = a => a * a;
console.log(quadrado(4));
```

📌 Arrow functions não criam seu próprio `this`.

---

## 🔒 IIFE (Immediately Invoked Function Expression)

Função que é executada imediatamente após ser criada:

```javascript
var instrumento = 'Violão';

(function() {
  var instrumento = 'Guitarra';
  console.log(instrumento);
})();

console.log(instrumento);
```

📌 Muito usada para **evitar poluir o escopo global**.

---

## 🧠 Variáveis Privadas (Closures)

Uso de closures para criar variáveis privadas:

```javascript
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
  };
}
```

📌 `nomeCompleto` não pode ser acessado diretamente de fora da função.

---

## 🏭 Factory Function + Object.freeze

Criação de objetos imutáveis usando **Factory Functions**:

```javascript
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
```

📌 `Object.freeze()` impede alterações no objeto.

---

## 🚀 Tecnologias Utilizadas

* JavaScript (ES6+)

---

## 🎯 Objetivo

* Praticar diferentes formas de criar funções
* Entender escopo e closures
* Aprender padrões comuns em JavaScript
* Escrever código mais organizado e seguro


Só me dizer 💙
