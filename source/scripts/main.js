document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("form-contatos");
    const redPhone = '<img src="./Images/redphone.png" alt="telefone vermelho"/>';

    let linhas = " "

    form.addEventListener("submit", function(e){
        e.preventDefault();
        
        criaLinha();
        inserirLinha();     
    })

    function criaLinha(){
        const inputNome = document.getElementById("nome");
        const inputTelefone = document.getElementById("telefone");
        
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value} ${redPhone}</td>`;
        linha += '</tr>';
        
        linhas += linha

        inputNome.value = " ";
        inputTelefone.value = " ";
    }

    function inserirLinha() {
        const corpoTabela = document.querySelector("tbody");
        corpoTabela.innerHTML = linhas;
    }

    //Validando formulário e aplicando máscara.
            
    $("#telefone").mask("(00) 00000-0000", {
        placeholder: "(99) 99999-9999"
    });
    
    $("form").validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true,
            }
        },
        messages: {
            nome: "Favor, preencher com nome do cliente.",
            telefone: "Este campo é obrigatório."
        },
        submitHandler: function(form){
            alert("Informações enviadas com sucesso!");
            form.reset();
        },
        invalidHandler: function (evento, validador){
            numeroDeInvalidos = validador.numberOfInvalids();
            if (numeroDeInvalidos){
                alert(`Existe(m) ${numeroDeInvalidos} campo(s) incorreto(s).`);
            }
        }
    })    
})

