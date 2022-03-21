//JavaScript Document

//inicio de javaScript
window.addEventListener("load", comenzar, false);

//declaracion de variables
var imagenes;
var elem_destino;

//en función comenzar, reconocemos cada elemento y en que función actuan
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

//Que sucede cuando comenzamos a mover el objeto(dragstart)
function comenzando_arrastrar(e){
    //si declaramos la variable "elemento" da error
    //var elemento=e.target;
    e.dataTransfer.setData("Text", e.target.getAttribute("id"));
}

//cuando soltamos el objeto(drop)
function soltado(e){
    e.preventDefault();
    var id=e.dataTransfer.getData("Text");

    if(id!="imagen2"){   
    var src=document.getElementById(id).src;
    elem_destino.innerHTML="<img src='" + src + "'>";
    }else{
        elem_destino.innerHTML="La imagen no es admitida";
        elem_destino.style.background="red";
    }
}

//cuando se entra en zona de dejado (dragenter)
function entrando(e){
    e.preventDefault();
    var id=e.dataTransfer.getData("Text");
    if(id!="imagen2"){
    elem_destino.style.background="rgba(8,252,25,.8)";
    }else{
        elem_destino.style.background="#fa0d29";
    }
}

//cuando salimos de zona de dejado (dragleave)
function saliendo(e){
    e.preventDefault();
    elem_destino.style.background="white";
}

//Cuando soltamos botón izquierdo (dragend)
function terminado(e){
    var elemento=e.target;
    elemento.style.visibility="hidden";
}