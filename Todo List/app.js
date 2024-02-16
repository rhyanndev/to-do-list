function criarLista(){

    console.log("Esta é minha função");

    let inputusuario = document.getElementById("inputusuario").value;

    var insert = document.createTextNode(inputusuario)
    document.body.appendChild(insert);


}