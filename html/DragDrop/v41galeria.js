//JavaScript Document

window.addEventListener("load", comenzar, false);


var imagenes;
var elem_destino;
  
function comenzar(){
    imagenes=document.querySelectorAll("#cajaimagenes img");

    for (var i=0;i<imagenes.length;i++){
        imagenes[i].addEventListener("dragstart", comenzando_arrastrar,
        false);
        if(i!=1){
        imagenes[i].addEventListener("dragend", terminado,
        false);}
        }

    elem_destino=document.getElementById("zonadestino");

    elem_destino.addEventListener("dragenter", entrando,false);

    elem_destino.addEventListener("dragover", function(e){
        e.preventDefault();
    },false);

    elem_destino.addEventListener("drop", soltado, false);

    elem_destino.addEventListener("dragleave", saliendo, false);
}

function comenzando_arrastrar(e){
    var elemento=e.target;
    elemento.dataTransfer.setData("text", elemento.getAttribute("id"));
}

function soltado(e){
    e.preventDefault();
    var id=e.dataTransfer.getData("text");

    //alert("esta id es " + id);

    if(id!="imagen2"){   
    var src=document.getElementById(id).src;
    elem_destino.innerHTML="<img src='" + src + "'>";
    }else{
        elem_destino.innerHTML="La imagen no es admitida";
        elem_destino.style.background="red";
    }


}

function entrando(e){
    e.preventDefault();
    var id=e.dataTransfer.getData("Text");
    if(id!="imagen2"){
    elem_destino.style.background="rgba(8,252,25,.8)";
    }else{
        elem_destino.style.background="#fa0d29";
    }
}

function saliendo(e){
    e.preventDefault();
    elem_destino.style.background="white";
}

function terminado(e){
    var elemento=e.target;
    elemento.style.visibility="hidden";
}