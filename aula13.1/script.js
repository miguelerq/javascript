var agora = new Date();          
var HORA = agora.getHours();
//var hora = Number(HORA.value);
//var HORA = '18';
hora.innerHTML = `Son las ${HORA}h`;         
var img = window.document.getElementById('imagem')
if(HORA>6 && 18>HORA){
hora.innerHTML +='</br>es de dia';
}  
else{
hora.innerHTML +='</br>es de noche';
img.src = 'noche.png';
document.body.style.background='#233543';
cabeza.style.color='white';
pie.style.color='white';
}