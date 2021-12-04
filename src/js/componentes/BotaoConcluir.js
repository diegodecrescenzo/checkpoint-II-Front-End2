const BotaoConcluir = () => {


    let check = document.querySelectorAll(".check");

    // colocando o check na conclusão da tarefa
    check.forEach(item => {

        item.addEventListener("click", () => {


            if ($(item).html() == "") {
                $(item).html('<i class="bi bi-check"></i>');
                $(item).css('background', 'black');
                $(item).parents('.card-head').siblings('p').addClass('concluida');
            } else {
                $(item).html("");
                $(item).css('background', 'yellow');
                $(item).parents('.card-head').siblings('p').removeClass('concluida');
            }

            let idCard = $(item).parents('.card-head').next('.circle').children().text();
            console.log(idCard);


            const tarefa = JSON.parse(localStorage.getItem(idCard));
            tarefa.completed = !tarefa.completed;

            // Atualizando a Tarefa no LocalStorage com o novo valor.
            localStorage.setItem(idCard, JSON.stringify(tarefa));

        })



    })
}

export default BotaoConcluir;