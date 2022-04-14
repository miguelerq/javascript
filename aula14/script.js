function calc(){
    var ini =window.document.getElementById('txtini');
    let tab =window.document.getElementById('seltab');
     
    let n = Number(ini.value)
    if(ini.value.length==0){
        window.alert('Digite um numero')
    }
    else {
        for(let c=0 ; c <= 10 ; c++ ){
           //mul=Number(ini.value)*c
           let item = document.createElement('option')
           item.text= `${n} x ${c} = ${c*n}`;
           tab.appendChild(item);
        }
    }      

}
