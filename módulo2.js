function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert( nome.value + ', os seus dados foram encaminhados com sucesso!');
    }

}

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