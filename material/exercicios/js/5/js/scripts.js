//falta fazer validação de dados válidos, incompletos, etc

//aguarda documento terminar de carregar
$(document).ready(function () {
    //inicializa soma total com 0
    valor_total = 0;
    //cria ação para evento de clique no botão
    $('#botao').click(function () {
        //busca valor do elemento com ID nome
        var nome = $('#nome').val();
        //busca valor do elemento com ID produto
        var produto = $('#produto').val();
        //busca valor do elemento com ID valor e substitui ',' por '.', para não quebrar os cálculos
        var valor = $('#valor').val().replace(',', '.');
        //busca valor do elemento com ID quantidade e substitui ',' por '.', para não quebrar os cálculos
        var quantidade = $('#quantidade').val().replace(',', '.');

        //adiciona ao valor total a multiplicação do valor * quantidade do item atual
        valor_total += valor * quantidade;

        //atualiza o valor total na tela
        $('.valor_total').text(valor_total);

        //adiciona a linha com os dados digitados
        $('.header_lista').parent().append("<tr><td>" + nome + "</td><td>" + produto + "</td><td>" + valor + "</td><td>" + quantidade + "</td></tr>")

        //"limpa" o elemento de id nome, setando seu valor como uma string vazia ''
        $('#nome').val('');
        //"limpa" o elemento de id produto, setando seu valor como uma string vazia ''
        $('#produto').val('');
        //"limpa" o elemento de id valor, setando seu valor como uma string vazia ''
        $('#valor').val('');
        //"limpa" o elemento de id quantidade, setando seu valor como uma string vazia ''
        $('#quantidade').val('');

    });
});

