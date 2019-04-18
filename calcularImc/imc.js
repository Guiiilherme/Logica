/**
 * Cálculo IMC
 * @author Thiago
 */

function calcularImc() {
    let altura, peso, imc // variaveis do mesmo tipo
    /*
        parseFloat converte a String da caixa de texto 
        do formulario para um numerico.
        Float (numeros reais, casas decimais)
        Int (numeros inteiros)
        .replace (",",";") (troca um caractere por outro)
    */
    peso = parseFloat(frmImc.txtPeso.value.replace(",", "."))
    altura = parseFloat(frmImc.txtAltura.value.replace(",", "."))
    imc = peso / (altura * altura)
    //toFixed(2) -> formatar o resultado em 2 casas decimais
    frmImc.txtImc.value = imc.toFixed(2)

    if (imc < 17) {
        frmImc.txtStatus.value = "Muito abaixo do peso"
        status = 1
    }
    else if (imc >= 17 && imc <= 18.49) {
        frmImc.txtStatus.value = "Abaixo do peso"
        status = 2
    }
    else if (imc >= 18.5 && imc <= 24.99) {
        frmImc.txtStatus.value = "Peso normal"
        status = 3
    } else if (imc >= 25 && imc <= 29.99) {
        frmImc.txtStatus.value = "Acima do peso"
        status = 4
    } else if (imc >= 30 && imc <= 34.99) {
        frmImc.txtStatus.value = "Obesidade I"
        status = 5
    } else if (imc >= 35 && imc <= 39.99) {
        frmImc.txtStatus.value = "Obesidade II (severa)"
        status = 6

    } else {
        frmImc.txtStatus.value = "Obesidade III (mórbida)"
        status = 7

    }

    switch (status) {
        case 1:
            document.getElementById("Imc22").src = "imc2.png"
            break
    }
    switch (status) {
        case 2:
            document.getElementById("Imc22").src = "imc3.png"
            break
    }
    switch (status) {
        case 3:
            document.getElementById("Imc22").src = "imc4.png"
            break
    }
    switch (status) {
        case 4:
            document.getElementById("Imc22").src = "imc5.png"
            break
    }
    switch (status) {
        case 5:
            document.getElementById("Imc22").src = "imc6.png"
            break
    }
    switch (status) {
        case 6:
            document.getElementById("Imc22").src = "imc7.png"
            break
    }
    switch (status) {
        case 7:
            document.getElementById("Imc22").src = "imc8.png"
            break
    }        
}