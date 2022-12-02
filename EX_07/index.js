let nome = document.getElementById("nome");
let filhos = document.getElementById("filhos");
let salario = document.getElementById("salario");
let add = document.getElementById("conf");

let tabela = document.querySelector("table");

let campo_media_sal = document.getElementById("media_sal");
let campo_media_filhos = document.getElementById("media_filhos");
let campo_maior_sal = document.getElementById("maior_sal");
let campo_porc = document.getElementById("porc");
let att = document.getElementById("att");

add.addEventListener("click", adicionar);
att.addEventListener("click", atualizar);

let data = [];
let media_sal = 0;
let media_filhos = 0;
let maior_sal = 0;
let porcentagem = 0;

function adicionar(){
    let linha = document.createElement("tr");
    let dados = [];
    let info = {};

    for(var i=0; i<3; i++)
    {
        dados[i] = document.createElement("td");
    }

    if(check_valores())
    {
        nome.value = null;
        filhos.value = null;
        salario.value = null;
        return;
    }

    info.name = dados[0].innerText = nome.value;
    info.num_filhos = dados[1].innerText = Number(filhos.value);
    info.sal = dados[2].innerText = Number(salario.value);
    if(info.sal > maior_sal)
    {
        maior_sal = info.sal;
    }

    data[data.length] = info;

    for(var i=0; i<3; i++)
    {
        linha.appendChild(dados[i]);
    }

    tabela.appendChild(linha);
    atualizar();
}

function atualizar(){
    let soma_f = 0;
    let soma_s = 0;
    let quant = 0;

    for(var i=0; i<data.length; i++)
    {
        soma_f += data[i].num_filhos;
        soma_s += data[i].sal;
        if(data[i].sal < 1500)
        {
            quant += 1;
        }
    }

    media_filhos = soma_f/data.length;
    media_sal = soma_s/data.length;
    porcentagem = (quant/data.length)*100;

    campo_media_sal.innerText = `R$ ${media_sal.toFixed(2)}`;
    campo_media_filhos.innerText = `${media_filhos.toFixed(2)}`;
    campo_maior_sal.innerText = `R$ ${maior_sal.toFixed(2)}`;
    campo_porc.innerText = `${porcentagem.toFixed(2)}%`;

    nome.value = null;
    filhos.value = null;
    salario.value = null;
}

function check_valores(){
    if(nome.value == "" || nome.value == null)
    {
        alert("Por favor insira um nome válido");
        return 1;
    }

    if(Number(filhos.value) < 0)
    {
        alert("Por favor insira um numero válido");
        return 1;
    }

    if(Number(salario.value) < 0)
    {
        alert("Por favor insira um salário válido");
        return 1;
    }

    return 0;
}