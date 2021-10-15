function ingresar()  
{

var usuario="manuel"
var contraseña="examen"; 

if (document.frmingreso.txtusuario.value==usuario &&
    document.frmingreso.txtcontraseña.value==contraseña)   
{
    document.location="./html/inicio1.html"
}
else
{
    alert("ingrese usuario y contraseña correctamente")
}

}