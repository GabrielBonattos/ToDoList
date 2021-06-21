function editar(id, txtTarefa)
{
    let form = document.createElement("form");
    form.action = "tarefaController.php?acao=atualizar";
    form.method= "post";
    form.className = "row"

    let input = document.createElement("input");
    input.type = "text";
    input.name = "tarefa";
    input.className = "form-control col-md-9";
    input.value = txtTarefa;

    let inputHidden = document.createElement("input")
    inputHidden.type = "hidden";
    inputHidden.name = "id";
    inputHidden.value = id;

    let btn = document.createElement("button");
    btn.type = "submit";
    btn.className = "btn btn-info col-md-2 ml-2";
    btn.innerHTML = "Atualizar";

    form.appendChild(input);
    form.appendChild(inputHidden);
    form.appendChild(btn);

    let tarefa = document.getElementById(`tarefa_${id}`);

    //limpar o conteudo interno
    tarefa.innerHTML = "";

    tarefa.insertBefore(form, tarefa[0]);

}

function remover(id)
{
    location.href= "todas_tarefas.php?acao=remover&id=" + id;
}

function finalizarTarefa(id)
{
    location.href= "todas_tarefas.php?acao=finalizar&id=" + id;
}