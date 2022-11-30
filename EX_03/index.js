let campo_hora = document.getElementById("hrs_trab");
let campo_sal = document.getElementById("salario_hora");
let valor = document.getElementById("valor");
let botao = document.getElementById("conf"); 

botao.addEventListener("click", escrever_valor);

const horas_jornada = 40;

function escrever_valor(){
    let extra = 0;
    let valor_extra = Number(campo_sal.value)*1.5;
    let salario;

    if(Number(campo_hora.value) > horas_jornada)
    {
        extra = campo_hora.value - horas_jornada;
    }

    salario = (Number(campo_hora.value)*Number(campo_sal.value)) + (valor_extra*extra);
    valor.innerText = `R$ ${salario}`;
}