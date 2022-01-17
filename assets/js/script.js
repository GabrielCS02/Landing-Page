/* JavaScript é Case Sensitive
 por Tag: getElementByTagName()
 por Id: getElementById()
 por Nome: getElementByName()
 por Classe: getElementsByClassName()
 por Seletor: querySelector()
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let mapa = document.querySelector("#mapa")
let pcd = document.querySelector("#pcd")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let pcdOk = false


nome.style.width = "100%"
email.style.width= "100%"


function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length<3){
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color= "red"
    }else{
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        nomeOk = true

    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
    
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length >= 200){
        txtAssunto.innerHTML = "Texto ultrapassa o limite de 200 caracteres."
        txtAssunto.style.color="red"
        txtAssunto.style.display = "block"
    }else{
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function pcd(){
    let txtPCD = document.querySelector("#txtPCD")
    if (document.querySelector.value[0].checked == false 
        && document.querySelector.value[1].checked == false){
        txtPCD.innerHTML = "Selecione a opção de PCD correta."
        txtPCD.style.color="red"
        txtPCD.style.display = "block"
    }else{
        txtPCD.style.display = "none"
        pcdOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true && pcdOk == true){
        alert("Formulário enviado com sucesso!")
    }else{
        alert("Preencha o formulário corretamente!") 
    }
}

function mapaZoom() {
    mapa.style.width = "700px"
    mapa.style.height= "550px"
}

function mapaNormal(){
    mapa.style.width = "600px"
    mapa.style.height= "450px"
}



