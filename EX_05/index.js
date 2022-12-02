let prod = document.getElementById("prod");
let quant = document.getElementById("quant");
let v_unit = document.getElementById("valor_unit");
let botao = document.getElementById("conf");

let v_total = document.getElementById("total");
let desc = document.getElementById("desc");
let v_pagar = document.getElementById("pagar"); 

botao.addEventListener("click", escrever_valor);

function escrever_valor(){
    let quantidade = Number(quant.value);
    let total = quantidade * Number(v_unit.value);
    let desconto;
    let pagar;

    if(quantidade <= 5)
    {
        desconto = 0.02;
    }else if(quantidade > 10)
    {
        desconto = 0.05;
    }else
    {
        desconto = 0.03;
    }
    desconto = total * desconto;

    pagar = total - desconto;

    v_total.innerText = `R$ ${total}`;
    desc.innerText = `R$ ${desconto}`;
    v_pagar.innerText = `R$ ${pagar}`;
}