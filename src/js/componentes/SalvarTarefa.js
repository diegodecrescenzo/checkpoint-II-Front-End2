const SalvarTarefa = () => {
    // Criando um objeto vazio, que irá conter a Tarefa Criada
    const tarefa = {};
    
    $('#salvar').on('click', (e) =>{

        e.preventDefault();

        // Validação e feedback visual caso haja erros.
        if($('#data-limite').val() == "" || $('#descricao').val() == ""){

            $('[data-alert]').removeClass('d-none').addClass('alerta-danger').text('Erro ao salvar tarefa!');
            return;
        }

        // Buscando o número total de keys presentes no localStorage, para poder criar um Id diferente dos presentes.
        let id = Object.keys(localStorage).length + 1
        
        // Inserindo os dados no objeto.
        tarefa.id = id;
        tarefa.data = $('#data-limite').val();
        tarefa.title = $('#descricao').val();
        tarefa.completed = false;

        // Salvando Tarefa no localStorage
        localStorage.setItem(tarefa.id, JSON.stringify(tarefa))
        // console.log(Object.keys(localStorage).length + 1)

        // Limpando os dados
        $('input').not(':disabled').val('').removeClass('border border-danger border-success');

        // Mostrando feedback positivo de Tarefa Salva
        $('[data-alert]').removeClass('d-none alerta-danger').addClass('alerta-success').text('Sua tarefa foi salva com sucesso!');


    })
}

export default SalvarTarefa;