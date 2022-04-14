var ini =window.document.querySelector('input#fnum');
let lista =window.document.querySelector('select#flista');
let valores = []

function rep(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    }
    else{
        return false
    }
}

function add() {
    if (!rep(ini.value,valores) && ini.value.length !=0){

        valores.push(Number(ini.value))
        let dado = document.createElement('option');
        dado.text = `numero ${ini.value}`;
        lista.appendChild(dado);
        //res.innerHTML=''
    }
    else{
    window.alert ('Numero com erro ou ja na lista')
    }
    /*if(ini.value.length==0){
        window.alert('Digite um numero')
    }
    else {
        valores.push(Number(ini.value))
        let dado = document.createElement('option');
        dado.text = `numero ${ini.value}`;
        lista.appendChild(dado);
        }*/
    ini.value='';
    ini.focus(); //eses 2 agregan interactividade
    res.innerHTML=''
    }

function calc(){
if(valores.length ==0){
    window.alert('Adicione valores')
}
else{
let may = valores[0];
let men = valores [0];
    for(let pos in valores){
        if(valores[pos] > may)
        may = valores[pos]
        else(valores[pos] < men)
        men = valores[pos]
    }

res.innerHTML += `<p>Os numeros inseridos sao ${valores.sort()} (em orden)</p>`;
res.innerHTML += `<p>Maior valor=${may}</p>`;
res.innerHTML += `<p>Menor valor=${men}</p>`;
    }}