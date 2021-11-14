var pacientes = document.querySelectorAll(".paciente")
var tabela = document.querySelector("#tabela-pacientes")

tabela.addEventListener("dblclick", (event)=>{
    var td = event.target // a célula que recebeu o evento
    var tr = td.parentNode //a linha responsável pela célula que recebeu o evento

    var apagar = confirm("deseja remover o paciente selecionado? ")
    
    if(apagar){
        tr.classList.add("fadeOut")
        setTimeout(()=>{
            tr.remove()

        }, 1500)
        alert("paciente removido com sucesso!")
    }
    
})