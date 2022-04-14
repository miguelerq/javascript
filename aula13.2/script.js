function calc(){
    //window.alert('we on my G!');//test de function
    var data = new Date();
    var cano = data.getFullYear();
    var fano = window.document.getElementById ('txtano');
    if (fano.value < 0 || fano.value>cano || fano.value.length ==0){
        window.alert('Revise os dados inseridos e tente novamente')
    }
    else{
    var idade = cano - fano.value;
    var fsex = document.getElementsByName('radsex');
    var sexo = ''
    var img = document.createElement('img');
    img.setAttribute('id','foto')
    if(fsex[1].checked){
        sexo= 'Mulher';
        img.setAttribute('src','woman.png');
    }
    else if (fsex[0].checked){
        sexo='Homen'
        img.setAttribute('src','man.png');
    }
    else if(fsex[2].checked)
    {
      sexo='Pessoa';
      img.setAttribute('src','person.png');
    }
     res.innerHTML = `${sexo} com ${idade} anos </br>`;
     res.appendChild(img);
    }
}
