
let nome = prompt("Informe o seu nome:");
let sobrenome = prompt("Informe o seu sobrenome:");
let campoDeEstudo = prompt("Informe o seu campo de estudo:");
let anoDeNascimento = parseFloat(prompt("Informe sua data de nascimento:"));
let idade = 2025 - anoDeNascimento;


console.log("Olá, " + nome + " " + sobrenome + " vocé tem " + idade + " anos e estuda " + campoDeEstudo);