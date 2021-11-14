var botaoAdicionar = document.querySelector("#adicionar-paciente")

botaoAdicionar.addEventListener("click", function(event){
    //prevenindo refresh
    event.preventDefault()
    
    //pega dados do form
    var form = document.querySelector("#form-adiciona")
    
    //cria paciente
    var paciente = pegaDadosDoForm(form)

    var erros = validaPaciente(paciente)
    var mensagemErro = document.querySelector("#mensagem-erro")
    
    if(erros.length > 0){
        exibeMensagensDeErro(erros, mensagemErro)
        return;
    } 

    adicionaPacienteNaTabela(paciente)
    
    form.reset()
    
    mensagemErro.textContent=""

})

function pegaDadosDoForm(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente
}

function criaTrPaciente(paciente){
    //cria elementos da proxima linha da tabela, define classe, popula com dados do paciente    
    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")
    
    //adiciona elementos na nova linha
    pacienteTr.appendChild(criaTdsPaciente(paciente.nome, "info-nome"))
    pacienteTr.appendChild(criaTdsPaciente(paciente.peso, "info-peso"))
    pacienteTr.appendChild(criaTdsPaciente(paciente.altura, "info-altura"))
    pacienteTr.appendChild(criaTdsPaciente(paciente.gordura, "info-gordura"))
    pacienteTr.appendChild(criaTdsPaciente(paciente.imc, "info-imc"))

    return pacienteTr
}

function criaTdsPaciente(dado, classe){
    var td = document.createElement("td")
    td.textContent = dado;
    td.classList.add(classe)

    return td
}

function adicionaPacienteNaTabela(paciente){
    //cria tr paciente
    var pacienteTr = criaTrPaciente(paciente)

    //adiciona nova linha na tabela
    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)
}

function validaPaciente(paciente){
    var erros = []

    if(!validaPeso(paciente.peso)){
        erros.push("Peso inválido")
    } 

    if(!validaAltura(paciente.altura)){
        erros.push("Altura inválida")
    } 

    if(!validaGordura(paciente.gordura)){
        erros.push("Gordura inválida")
    }

    if(paciente.nome.length == 0){
        erros.push("Campo Nome não pode ser em branco")
    }

    if(paciente.gordura.length == 0){
        erros.push("Campo Gordura não pode ser em branco")
    }

    if(paciente.peso.length == 0){
        erros.push("Campo Peso não pode ser em branco")
    }

    if(paciente.altura.length == 0){
        erros.push("Campo Altura não pode ser em branco")
    }

    return erros
}

function exibeMensagensDeErro(erros, mensagemErro){
    
    mensagemErro.innerHTML = ""

    erros.forEach(function(erro){
        var li = document.createElement("li")
        li.textContent = erro
        mensagemErro.appendChild(li)
    })
}