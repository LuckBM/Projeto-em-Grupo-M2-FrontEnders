$("#cep").focusout(function(){
    $.ajax({
        url: 'https://viacep.com.br/ws/'+$(this).val()+'/json/unicode/',
        dataType: 'json',
        success: function(resposta){
            $("uf").val(resposta.uf);
            $("#cidade").val(resposta.localidade);
            $("#bairro").val(resposta.bairro);
            $("#rua").val(resposta.rua);
            $("#numero").focus(resposta.numero);
            $("#complemento").val(resposta.complemento);
        }
    });
});