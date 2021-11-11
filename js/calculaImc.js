var pacientes = document.querySelectorAll(".paciente")

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i]
    
    var tdPeso = paciente.querySelector(".info-peso")
    var tdAltura = paciente.querySelector(".info-altura")
    var tdImc = paciente.querySelector(".info-imc")

    var peso = tdPeso.textContent
    var altura = tdAltura.textContent

    var pacienteValido = validaPaciente(peso, altura)

    if(pacienteValido){
        var imc  = calculaImc(peso, altura)
        tdImc.textContent = imc
    
    } else {
        tdImc.textContent = 'erro'
        paciente.classList.add("paciente-invalido")
    }
}

function calculaImc(peso, altura){
    var imc = 0
    var imc  = peso / (altura * altura)
 
    return imc.toFixed(2)
}
    

