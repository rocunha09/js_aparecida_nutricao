//função executada quando a página é carregada
window.onload = function(){
    calculaImc()
}

function calculaImc(){
    var pacientes = document.querySelectorAll(".paciente")
    
    for(var i = 0; i < pacientes.length; i++){
        var paciente = pacientes[i]
        
        var tdPeso = paciente.querySelector(".info-peso")
        var tdAltura = paciente.querySelector(".info-altura")
        var tdImc = paciente.querySelector(".info-imc")
    
        var peso = tdPeso.textContent
        var altura = tdAltura.textContent
    
        var pesoAux = true
        var alturaAux = true
    
    
        if(peso <= 0 || peso >= 1000){
            pesoAux = false
            tdImc.textContent = 'erro'
            paciente.classList.add("paciente-invalido")
    
        }
    
        if(altura <= 0 || altura >= 3.00){
            alturaAux = false
            tdImc.textContent = 'erro'
            paciente.classList.add("paciente-invalido")
        }
    
        if(pesoAux != false && alturaAux != false){
            var imc  = peso / (altura * altura)
            tdImc.textContent = imc.toFixed(2)
    
        } 
    }
    
}
