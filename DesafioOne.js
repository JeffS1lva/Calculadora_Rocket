let namePerson = prompt('Qual é o seu nome?')
alert(`${namePerson} vamos fazer um cálculo!`)

const numberOne = prompt('Digite o primeiro número:')
const numberTwo = prompt('Digite o segundo número:')
let result = Number(numberOne) + Number(numberTwo) 
result .toFixed(2)




let sum = Number(numberOne) + Number(numberTwo)
let sub = Number(numberOne) - Number(numberTwo)
let multi = Number(numberOne) * Number(numberTwo)
let div = Number(numberOne) / Number(numberTwo)
let restDiv = Number(numberOne) % Number(numberTwo)

alert('Resultado da soma: ' + sum)
alert('Resultado da subtração: ' + sub)
alert('Resultado da multiplicação: ' + multi)
alert('Resultado da divisão: ' + div)
alert('Resultado do Resto da Divisão: ' + restDiv)



if (result % 2 === 0) {
  alert(`O resultado dos dois números é par: ${result}`)
} else {
  alert("O  resultado dos dois números é impar")
}

if(Number(numberOne) != Number(numberTwo) ){
  alert(`Os números inseridos são diferentes: 

Primeiro número inserido: ${Number(numberOne)} 
Segundo número inserido: ${Number(numberTwo)}`)
} else {
  alert(`Os números são iguais: 

Primeiro número inserido ${Number(numberOne)} 
Segundo número inserido${Number(numberTwo)}`)
}