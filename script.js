let numberOne = prompt("Digite um número:")
let numberTwo = prompt("Digite outro número:")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo
alert("Soma: " + sum)
alert("Subtração: " + sub)
alert("Multiplicação: " + mult)
alert("Divisão: " + div)
alert("Resto: " + restDiv)

if(sum % 2 == 0){
    alert("O número " + sum + " é par")
} else {
    alert("O número " + sum + " é impar")
}

if (numberOne == numberTwo){
    alert("Os números informados são iguais")
} else {
    alert("Os números informados são diferentes")
}