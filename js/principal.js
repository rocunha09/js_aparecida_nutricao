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


var botaoAdicionar = document.querySelector("#adicionar-paciente")

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault()
    var form = document.querySelector("#form-adiciona")
    var nome = form.nome.value
    var peso = form.peso.value
    var altura = form.altura.value
    var gordura = form.gordura.value

    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")
    var nomeTd = document.createElement("td")
    nomeTd.classList.add("info-nome")
    var pesoTd = document.createElement("td")
    pesoTd.classList.add("info-peso")
    var alturaTd = document.createElement("td")
    alturaTd.classList.add("info-altura")
    var gorduraTd = document.createElement("td")
    gorduraTd.classList.add("info-gordura")
    var imcTd = document.createElement("td")
    imcTd.classList.add("info-imc")

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)
    
    calculaImc()
})