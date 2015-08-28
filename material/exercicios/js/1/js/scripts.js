//espera documento carregar
$(document).ready(function () {
    //"captura" clique do botão
    $('#btn-calcula').click(function () {
        //encontra valor do elemento com o ID valor
        var valor_do_elemento = $('#valor').val()
        //se "é não é um numero", exibe mensagem de erro
        if (isNaN(valor_do_elemento)) {
            $('#resultado').html('<span class="red">BURRO! Bota um número!</span>')
        } else {
            //se é numero, força inteiro
            var valor_inteiro = parseInt(valor_do_elemento)

            //inicializa soma com 0
            var soma = 0;

            //itera até 0, somando
            for (var i = valor_inteiro; i > 0; i--) {
                soma += i;
            }

            //exibe resultado
            $('#resultado').text(soma)
        }
    })
});


