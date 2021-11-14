var botaoAdicionar = document.querySelector("#buscar-pacientes")

botaoAdicionar.addEventListener("click", (event)=>{
    event.preventDefault
    
    var mensagemErro = document.querySelector("#mensagem-erro")
    mensagemErro.textContent=""
    
    //cria uma requisição
    var request = new XMLHttpRequest();

    request.open("GET", "http://api-pacientes.herokuapp.com/pacientes")
    //armazene a resposta que for carregada
    request.addEventListener("load", ()=>{

        if(request.status === 200){
            
            var response = request.responseText
            var listaPacientesImportados = JSON.parse(response)
    
            listaPacientesImportados.forEach((paciente)=>{
                adicionaPacienteNaTabela(paciente)
            })

        } else {
            var erros = []
            erros.push("Erro ao importar pacientes, tente novamente mais tarde [status: " +request.status+ "]")
            
            exibeMensagensDeErro(erros, mensagemErro)
        }

    })
    
    request.send()

})
