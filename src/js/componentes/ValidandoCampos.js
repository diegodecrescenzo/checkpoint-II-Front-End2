const ValidandoCampos = (dataAtual) => {

    // Validando campo de data 
    $('#data-limite').on('blur', () => {

        const dataLimiteValue = $('#data-limite').val();
        // console.log(dataLimiteValue);

        //Formatando data inseridade
        const dataFormatada = moment(dataLimiteValue).format('DD/MM/YYYY');
        // console.log(dataFormatada);
        // console.log(dataAtual);

        
        const diff = moment(dataFormatada, "DD/MM/YYYY").diff(moment(dataAtual, "DD/MM/YYYY"));
        const diffDias = moment.duration(diff).asDays();
        // console.log(diffDias); 

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

        const descricaoValue = $('#descricao').val();
        // console.log(descricaoValue);

        if (descricaoValue == "" || descricaoValue.length < 10) {
            $('#descricao').addClass('border border-danger')
            $('#descricao').siblings('span').removeClass('d-none')
        } else {
            $('#descricao').addClass('border border-success').removeClass('border border-danger')
            $('#descricao').siblings('span').addClass('d-none')
        }

    })
}

export default ValidandoCampos;