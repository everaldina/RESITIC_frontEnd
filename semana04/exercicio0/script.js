let carregandoDados = function () {
    let lista = document.getElementById("lista_tarefas");
    let tarefas = localStorage.getItem("lista");
    if (tarefas != null) {
        tarefas = JSON.parse(tarefas);
        tarefas.forEach(tarefa => {
            let item = document.createElement("li");
            item.innerHTML = tarefa.nomeTarefa;
            lista.appendChild(item);
        });
    }
}

carregandoDados();
let submit = document.getElementById("btn_add");
submit.addEventListener("click", adicionaTarefa())

let adicionaTarefaDOM = function (tarefa) {
    let lista = document.getElementById("lista_tarefas");
    let item = document.createElement("li");
    item.innerHTML = tarefa.nomeTarefa;
    lista.appendChild(item);
}

let adicionaTarefaNoStorage = function (tarefa) {
    let tarefas = localStorage.getItem["lista"];
    if (tarefas == null)
        tarefas = [tarefa.nomeTarefa];
    else
        localStorage.setItem("lista", localStorage["lista"].push(JSON.stringify(tarefa)));
}

class Tarefa {

    constructor(nomeTarefa) {
        this.nomeTarefa = nomeTarefa;
    }

}

function adicionaTarefa() {
    let nomeTarefa = document.getElementById("input_tarefa").value;
    let tarefa = new Tarefa(nomeTarefa);
    adicionaTarefaNoStorage(tarefa);
    adicionaTarefaDOM(tarefa);
}