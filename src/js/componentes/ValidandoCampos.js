const ValidandoCampos = (dataAtual) => {

    let dataLimiteValue;
    let diffDias;
    let descricaoValue;

    
    $('#data-limite').on('blur', () => {

        // Pegando valor inserido no campo Data
        dataLimiteValue = $('#data-limite').val();
        // console.log(dataLimiteValue);
    
        //Formatando data inseridade
        const dataFormatada = moment(dataLimiteValue).format('DD/MM/YYYY');
        // console.log(dataFormatada);
        // console.log(dataAtual);
    
        
        const diff = moment(dataFormatada, "DD/MM/YYYY").diff(moment(dataAtual, "DD/MM/YYYY"));
        diffDias = moment.duration(diff).asDays();
        // console.log(diffDias); 


        // Validando visualmente dados inseridos
        if (dataLimiteValue == "" || diffDias < 0) {
            $('#data-limite').addClass('border border-danger');
            $('#data-limite').siblings('span').removeClass('d-none');
        } else {
            $('#data-limite').addClass('border border-success').removeClass('border border-danger');
            $('#data-limite').siblings('span').addClass('d-none');
        }
    })

    
    // Validando campo de descrição
    $('#descricao').on('blur', () => {
        
        // Pegando valor inserido no campo Descrição
        descricaoValue = $('#descricao').val();
        // console.log(descricaoValue);

        // Validando visualmente dados inseridos
        if (descricaoValue == "" || descricaoValue.length < 10) {
            $('#descricao').addClass('border border-danger')
            $('#descricao').siblings('span').removeClass('d-none')
        } else {
            $('#descricao').addClass('border border-success').removeClass('border border-danger')
            $('#descricao').siblings('span').addClass('d-none')
        }

    })


    
    // Criando um objeto vazio, que irá conter a Tarefa Criada
    const tarefa = {};
    
    // Validação todos os dados antes de salvar nova Tarefa
    $('#salvar').on('click', (e) =>{
    
        e.preventDefault();
    
        // Validação e feedback antes de salvar Nova Tarefa
        if($('#data-limite').val() == "" || $('#descricao').val() == "" || descricaoValue.length < 10 || diffDias < 0){
    
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

export default ValidandoCampos;