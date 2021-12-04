import CarregarTarefas from "./componentes/CarregarTarefas.js";
import SalvarTarefa from "./componentes/SalvarTarefa.js";
import TarefasAPI from "./componentes/TarefasAPI.js";
import ValidandoCampos from "./componentes/ValidandoCampos.js";

$('main').load('./templates/home.html');

// Buscando Tarefas da API
TarefasAPI();


// Evento que abre a página das Tarefas
$('[data-task]').on('click', (e) => {
    e.preventDefault();

    // Mudando o conteudo da pagina, simulando um SPA
    $('main').load('./templates/tarefas.html');

    
    $('.content-loader').css('display', 'flex');

    setTimeout(() => {                
        // Função que Carrega Tarefas na página
        CarregarTarefas();
        $('.content-loader').css('display', 'none');
    }, 1000);


})

// Evento que Retorna a Pagina Inicial
$('[data-home]').on('click', (e) => {
    e.preventDefault();

    // Mudando o conteudo da pagina, simulando um SPA
    $('main').load('./templates/home.html');
})


// Função que Readiciona os eventos, a cada modificação no Elemento Main
var target = document.querySelector('main');
var config = { childList: true };
var observer = new MutationObserver(handleMutationObserver);

function handleMutationObserver() {
    
    // Pegando e formatando data atual do sistema.
    const dataAtual = moment().format('DD/MM/YYYY');
    // console.log(dataAtual)
    
    // Inserindo data atual no input desativado.
    $('#data-criacao').val(dataAtual);
    
    //Abrindo a Modal
    $('#showModal').on('click', () => {
        $("#myModal").modal('show');
    })    
    
    // Função de Validar os Campos
    ValidandoCampos(dataAtual);
    
    // Salvando nova tarefa
    SalvarTarefa();

    //Fechando a Modal e limpando todos os campos preenchidos
    $('[data-dismiss]').on('click', () => {
        $('input').not(':disabled').val('').removeClass('border border-danger border-success');
        $('#data-limite').siblings('span').addClass('d-none')
        $('#descricao').siblings('span').addClass('d-none')
        $("#myModal").modal('hide');
    })    
}


observer.observe(target, config);

