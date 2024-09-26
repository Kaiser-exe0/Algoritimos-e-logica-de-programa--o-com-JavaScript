let username = (prompt("Bem vindx alunx, insira seu nome"))

alert('Olá, ' + username + '! vamos calcular sua média?')

let nota1 = (prompt('Insira a primeira nota'))
let nota2 = (prompt('Insira a segunda nota'))
let nota3 = (prompt('Insira a terceira nota'))

nota1 = Number(nota1)
nota2 = Number(nota2)
nota3 = Number(nota3)

const calc = (nota1 + nota2 + nota3)/3

if (calc > 19){
    alert('parabens, ' + username + ', você passou com a média de: ' + calc)
    alert('Continue assim!')
    
} else{
    alert('Que pena, você foi tão burro que sua média foi apenas ' + calc)
    alert('continue dando o seu melhor!')
}