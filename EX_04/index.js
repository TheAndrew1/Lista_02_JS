let idade_d = document.getElementById("idade_d");
let idade_gab = document.getElementById("idade_gab");
let idade_gra = document.getElementById("idade_gra");
let idade_a = document.getElementById("idade_a");

let homens = [{nome: "Diego", idade: 0}, {nome: "Gabriel", idade: 0}];
let mulheres = [{nome: "Grazi", idade: 0}, {nome: "Amanda", idade: 0}];

let soma = document.getElementById("soma");
let multi = document.getElementById("multi");
let botao = document.getElementById("conf"); 

botao.addEventListener("click", escrever_valor);

function escrever_valor(){
    let ref = {};

    homens[0].idade = Number(idade_d.value);
    homens[1].idade = Number(idade_gab.value);
    if(homens[0].idade < homens[1].idade)
    {
        ref = homens[0];
        homens[0] = homens[1];
        homens[1] = ref
    }

    mulheres[0].idade = Number(idade_gra.value);
    mulheres[1].idade = Number(idade_a.value);
    if(mulheres[0].idade < mulheres[1].idade)
    {
        ref = mulheres[0];
        mulheres[0] = mulheres[1];
        mulheres[1] = ref
    }

    if(mulheres[0].idade == mulheres[1].idade || homens[0].idade == homens[1].idade)
    {
        soma.innerText = `Por favor, insira idades diferentes`;
        return;
    }

    soma.innerText = `Idade do ${homens[0].nome} + ${mulheres[1].nome} = ${homens[0].idade + mulheres[1].idade}`
    multi.innerText = `Idade do ${homens[1].nome} x ${mulheres[0].nome} = ${homens[1].idade * mulheres[0].idade}`
}