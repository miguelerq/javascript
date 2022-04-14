var agora = new Date()
var diaSem = agora.getDay()
var hora = agora.getHours()
/*console.log(diaSem)
var diaSem = 9*/
switch(diaSem){
    case 0 : console.log('Domingo')
    break
    case 1 : console.log('Segunda')
    break
    case 2 : console.log('Terca')
    break
    case 3 : console.log('Quarta')
    break
    case 4 : console.log('Quinta')
    break
    case 5 : console.log('Sabado')
    break
    case 6 : console.log('Domingo')
    break
    default: console.log('ERROR - Dia invalido')
}
console.log(hora)