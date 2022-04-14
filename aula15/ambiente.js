let num = [2,4,9,6,3];
num.push(1);//puts 1 on last position
/*num.sort();//sort number
console.log(num);
console.log(`O valor na primeira posicao e ${num[0]} `);
for(var pos=0 ;pos <= num.length;pos++ ) {
    console.log(`O valor na posicao ${pos} e ${num[pos]}`)
}*/
for(var pos in num){ //forma simples
    console.log(`O valor na posicao ${pos} e ${num[pos]}`)
}
let q = num.indexOf(4) //busca en un array y devuelve la posicion
console.log(`O valor esta na posicao ${q}`)
