function validaPaciente(peso, altura){
    if(!validaPeso(peso) || !validaAltura(altura)){
        return false

    } else {
        return true
    }
}

function validaPeso(peso){
    return peso <= 0 || peso >= 1000 ? false : true
}

function validaAltura(altura){
    return altura <= 0 || altura >= 3 ? false : true
}