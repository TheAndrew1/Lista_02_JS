let usuario = document.getElementById("user");
let senha = document.getElementById("senha");
let botao = document.getElementById("conf");
let limpar = document.getElementById("limpar");

let mensagem_user = document.getElementById("msg_user");
let mensagem_senha = document.getElementById("msg_senha");
let acessar = document.getElementById("acessar");

const login = "1234";
const password = "9999";

usuario.addEventListener("change", check_user);
senha.addEventListener("change", check_senha);
botao.addEventListener("click", liberar_acesso);
limpar.addEventListener("click", limpa_valor);

function check_user(){
    if(usuario.value != login)
    {
        mensagem_user.innerText = "Usuário inválido!"
        senha.setAttribute("disabled", "disabled");
    }
}

function check_senha(){
    if(senha.value != password)
    {
        mensagem_senha.innerText = "Senha incorreta"
    }
}

function liberar_acesso(){
    if(usuario.value == login && senha.value == password)
    {
        acessar.style.display = "block"
    }
}

function limpa_valor(){
    mensagem_user.innerText = "";
    mensagem_senha.innerText = "";
    acessar.style.display = "none"
    senha.removeAttribute("disabled");
}