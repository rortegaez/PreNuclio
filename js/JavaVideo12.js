// JavaScript document

function ejecuta(){
   /* for(var i=0; i<3; i++){
   document.getElementsByTagName("p")[i].onclick=saludo;
   document.getElementById("importante").onclick=saludo;
    }
    var z=document.getElementsByClassName("importante")[0].onclick=saludo;*/

    /*document.querySelector(".importante").onclick=saludo;*/
    /* onclick=evento
    saludo=función
    document. =estamos nombrando al documento linkado
    querySelector() = estamos diciendo el primer elemento que coincida con el selector*/

    /*var elementos=document.querySelectorAll("#principal p")[0].onclick=saludo;*/
    /*esta última función es para seleccionar el primer elemento #principal p*/

    /*for(var i=0;i<4;i++){
        var elementos=document.querySelectorAll("#principal p");
        elementos[i].onclick=saludo;
    }*/

    var elementos=document.querySelectorAll("#principal p");
    for(var i=0;i<document.length;i++){
        elementos[i].onclick=saludo;
    }
    /* "i<document.length" nos esta indicando que i debe de ser menor que el tamaño de document*/
}

function saludo (){
alert('Que hay de nuevo?');
}

window.onload=ejecuta;
s