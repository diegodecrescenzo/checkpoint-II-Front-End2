import CarregarTarefas from "./CarregarTarefas.js";

const BotaoExcluir = () =>{

    let idCard;
    

    // Abrindo a Modal
    $('[data-excluir]').on('click', (e) =>{
        e.preventDefault();

        $('#modalExcluir').modal('show');

        idCard = $(e.target).parents('.card-head').next('.circle').children().text();
        // console.log(idCard)

    })

    // console.log(idCard)

    // Excluindo Tarefa da Tela e do LocalStorage
    $('[data-confirmar]').on('click', (e) =>{
        
        localStorage.removeItem(idCard);

        $('#modalExcluir').modal('hide');

        CarregarTarefas();

    })

    // Fechando a Modal
    $('[data-dismiss]').on('click',(e) =>{
        e.preventDefault();

        $('#modalExcluir').modal('hide');
    })

}

export default BotaoExcluir;