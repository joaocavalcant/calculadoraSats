let valorFinal = document.getElementById('valorFinal')

function calculoSats(a, b) {    
    return "R$ " + (b / 10000) * a
}

const calcular = () => {
    let valorA = document.getElementById("quantidadeSats").value;
    let valorB = document.getElementById("valor10MilSats").value;
    
     let a = parseFloat(valorA);
     let b = parseFloat(valorB);

    valorFinal.innerHTML = calculoSats(a, b);
}

