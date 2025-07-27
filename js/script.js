document.getElementById("enviar").addEventListener("click", validaFormulario)

function validaFormulario(){
    if(document.getElementById("nome").value !=""&& document.getElementById("email").value !="" && document.getElementById("telefone").value !=""){
        alert("Obaaa, deu tudo certo e agora só aguardar!")
    }else{
        alert("Ops, falta preencher algum campo")
    }
}