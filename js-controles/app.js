document.addEventListener("DOMContentLoaded",function(){
    //console.log(document.getElementById("txt_nombre").value);
    //console.log(document.getElementById("txt_apellido").value);
});
const btn_mostrar=document.getElementById("btn_mostrar");
btn_mostrar.addEventListener("click",function(){
    //alert("hola");
    const nombres = document.getElementById("txt_nombre").value;
    const apellido = document.getElementById("txt_apellido").value;
    const cedula = document.getElementById("txt_cedula").value;
    const direccion = document.getElementById("txt_direccion").value;
    console.log('nombres: ' +nombres+ ', apellidos: ' +apellido+ ', cedula: ' + cedula+ ', direccion: ' + direccion);
    alert('nombres: ' +nombres+ ', apellidos: ' +apellido+ ', cedula: ' + cedula+ ', direccion: ' + direccion);
});

function hol(nombre,apellido){
    console.log(nombre,apellido);
};