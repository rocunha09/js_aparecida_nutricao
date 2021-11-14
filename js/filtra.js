var filtro = document.querySelector("#filtrar-tabela")

filtro.addEventListener("input", ()=>{
    var pacientes = document.querySelectorAll(".paciente")

    if(filtro.value.length > 0){
        pacientes.forEach((paciente)=>{
            var nome = paciente.querySelector(".info-nome").textContent
    
            if(nome != filtro.value){
                paciente.classList.add("esconde-paciente")
            } else {
                paciente.classList.remove("esconde-paciente")
            }
    
        })

    } else {
        pacientes.forEach((paciente)=>{
            paciente.classList.remove("esconde-paciente")
        })
    }

})


