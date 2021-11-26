
function calcular() {
    let select = parseInt(document.getElementById('seleciona-temperatura').value);
    // console.log(select);  
    let temperatura = document.getElementById('temperatura').value;
    let FormulaF = (parseInt(temperatura) * 1.8) + 32;
    let formulaK = parseInt(temperatura) + 273;
    let resultado = document.getElementById('resultado');
    // if(select == 0){
    //         resultado.innerHTML = (`${temperatura}°C em kelvin é ${formulaK}K`);
    // } else if(select == 1){
    //     resultado.innerHTML = (`${temperatura}°C em Fahrenheit é ${FormulaF}°F`)
    // }
// resultado.innerHTML = ('O valor convertido é:'+ calculo + "°F");


switch(select){
    case 0:
        resultado.innerHTML = (`${temperatura}°C em kelvin é ${formulaK}`);
        break;
        case 1:
            resultado.innerHTML = (`${temperatura}°C em fahrenheit é ${FormulaF}`)
            break;
            default:
                resultado.innerHTML = ('Erro');
          break;                   
}
console.log(temperatura);
    resultado.innerHTML = (`${temperatura}°C em fahrenheit é ${calculo}?f`);
}