/*
===========================================
📘 Exercícios de Funções em JavaScript
💡 Nível: Iniciante
🎯 Objetivo:
Praticar a criação e o uso de funções em JavaScript,
utilizando a palavra-chave 'function' e a declaração de variáveis com 'var'.

🚀 Bons estudos!

1 - Converter Celsius para Fahrenheit
Crie uma função converterParaFahrenheit que receba a temperatura em Celsius e retorne o valor em Fahrenheit usando a fórmula:
F = (C × 1.8) + 32
*/
function converterParaFahrenheit(c) { 
 var result = (c * 1.8 + 32)
 console.log("a fahrenheit é : " + result +" f°")
}


converterParaFahrenheit(4)

/*2- Calcular média de 3 notas
Crie uma função mediaNotas que receba três números e retorne a média.
*/
function médiaNotas(a,b,c){
var result =(a+b+c) /3
console.log("a sua média é de: " + result)
}
médiaNotas(2,5,56)
/*3 - Quadrado de um número
Crie uma função quadrado que receba um número e retorne o número ao quadrado.
*/
function quadrado(a){
var result= (a*a)
console.log(result)
}
quadrado(4)


/*4 - Converter minutos em segundos
Crie uma função minutosParaSegundos que receba um número de minutos e retorne quantos segundos tem.
segundos = minutos * 60
*/
function minutosParaSegundos(m){
    var result=(m*60)
    console.log(result + " segundos")
}
minutosParaSegundos(3)

/*5 - Converter horas em minutos
Crie uma função horasParaMinutos que receba um número de horas e retorne o total em minutos.
minutos = horas * 60
*/
function horasParaMinutos(h){
    var result = (h*60)
    console.log(result +" minutos")
}
horasParaMinutos(5)

/*6 - Verificar se dois nomes são iguais
Crie uma função nomesIguais que receba dois nomes e exiba "Iguais" se forem iguais, e "Diferentes" caso contrário.
*/
function nomesIguais(a,b){
 if  (a==b) {
    console.log("iguais")
 } else {
    console.log("diferentes")
 }
}
nomesIguais("lucas","lucas")
/*
===========================================
*/
