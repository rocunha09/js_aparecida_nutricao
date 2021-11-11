var botaoAdicionar = document.querySelector("#adicionar-paciente")

botaoAdicionar.addEventListener("click", function(event){
    //prevenindo refresh
    event.preventDefault()
    
    //pega dados do form
    var form = document.querySelector("#form-adiciona")
    
    //cria paciente
    var paciente = pegaDadosDoForm(form)

    //cria tr paciente
    var pacienteTr = criaTrPaciente(paciente)

    var pacienteValido = validaPaciente(paciente.peso, paciente.altura)
    
    if(!pacienteValido){
        alert('Campos preenchidos incorretamente, paciente Inválido!')
        return

    } else {
        //adiciona nova linha na tabela
        var tabela = document.querySelector("#tabela-pacientes")
        tabela.appendChild(pacienteTr)

        //limpa form
        form.reset()
    }
    
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