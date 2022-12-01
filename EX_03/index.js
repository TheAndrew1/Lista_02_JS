let campo_saldo = document.getElementById("saldo");
let campo_deb = document.getElementById("debito");
let campo_crd = document.getElementById("credito");
let situacao = document.getElementById("situacao");

let valor = document.getElementById("valor");
let botao = document.getElementById("conf"); 

botao.addEventListener("click", escrever_valor);

function escrever_valor(){
    let saldo_atual = Number(campo_saldo.value) - Number(campo_deb.value) + Number(campo_crd.value);
    let estado;

    if(saldo_atual >= 0)
    {
        estado = "positivo";
    }
    else
    {
        estado = "negativo";
    }

    valor.innerText = `R$ ${saldo_atual}`;
    situacao.innerText = `Saldo ${estado}`;
}