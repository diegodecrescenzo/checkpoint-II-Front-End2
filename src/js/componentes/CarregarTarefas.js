import BotaoConcluir from "./BotaoConcluir.js";
import BotaoExcluir from "./BotaoExcluir.js";

const CarregarTarefas = () =>{

     // Mostrando todas as tarefas salvas na tela
     const tarefas = []
     const tarefasKeys = Object.keys(localStorage);
     // console.log(tarefasKeys)

     // Array com Tarefas ordenadas
     const keysOrdenadas = tarefasKeys.sort((a, b) => a - b)
     
     keysOrdenadas.map( key =>{
         tarefas.push(JSON.parse(localStorage[key]))
     })   

    // Selecionando elemento que irá conter as tarefas.
     const conteudo = document.querySelector('#conteudo');

     // Limpando todo o conteúdo pra deixar sempre atualizado
     conteudo.innerHTML = "";

     let templateCard = "";
 
     tarefas.forEach( tarefa =>{

         templateCard = `<div class="card">
                            <div class="card-head">
                                <div class="check" data-concluir title="Concluir"></div>
                                <i class="bi bi-trash" data-excluir title="Excluir"></i>
                            </div>
                            <div class="circle">
                                <h2>${tarefa.id}</h2>
                            </div>
                            ${tarefa.completed ? `<p class="content concluida">${tarefa.title}</p>` : 
                            `<p class="content">${tarefa.title}</p>`}
                        </div>`

         conteudo.innerHTML += templateCard;
     })

     // Chamando Funções de Concluir e Excluir Tarefas
    BotaoConcluir();
    BotaoExcluir();
}

export default CarregarTarefas;