var pacientes = document.querySelectorAll(".paciente")

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i]
    var tdPeso = paciente.querySelector(".info-peso")
    var tdAltura = paciente.querySelector(".info-altura")
    var tdGordura = paciente.querySelector(".info-gordura")
    var tdImc = paciente.querySelector(".info-imc")

    var peso = tdPeso.textContent
    var altura = tdAltura.textContent
    var gordura = tdGordura.textContent

    if(!validaPeso(peso)){
        tdImc.textContent = 'peso inválido!'
        paciente.classList.add("paciente-invalido")
       
    } else if(!validaAltura(altura)) {
        tdImc.textContent = 'altura inválida!'
        paciente.classList.add("paciente-invalido")

    } else {
        var imc  = calculaImc(peso, altura)
        tdImc.textContent = imc
    }
}

function calculaImc(peso, altura){
    var imc = 0
    var imc  = peso / (altura * altura)
 
    return imc.toFixed(2)
}


function validaPeso(peso){
    if((peso <= 0 || peso >= 1000) || (isNaN(peso))){
        return false
    } else {
        return true
    }
}

function validaAltura(altura){
    if((altura <= 0 || altura > 3) ||  (isNaN(altura))){
        return false
    } else {
        return true
    }
}

function validaGordura(gordura){
    if((gordura <= 0 || gordura > 100) ||  (isNaN(gordura))){
        return false
    } else {
        return true
    }
}

