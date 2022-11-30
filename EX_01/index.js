let campo_t = document.getElementById("num_eleitores");
let campo_b = document.getElementById("v_brancos");
let campo_n = document.getElementById("v_nulos");
let campo_v = document.getElementById("v_validos");
let botao = document.getElementById("conf"); 

botao.addEventListener("click", escrever_valor);

function escrever_valor(){
    let quant = Number(campo_t.value);
    document.getElementById("t%").innerText = `100%`;
    let branco = Number(campo_b.value);
    branco = (branco/quant)*100;
    let nulo = Number(campo_n.value);
    nulo = (nulo/quant)*100;
    let valido = Number(campo_v.value);
    valido = (valido/quant)*100;
    document.getElementById("b%").innerText = `${branco}%`;
    document.getElementById("n%").innerText = `${nulo}%`;
    document.getElementById("v%").innerText = `${valido}%`;
}