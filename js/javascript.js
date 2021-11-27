
function calcular() {
    let select1 = parseInt(document.getElementById('seleciona-temperatura1').value);
    let select2 = parseInt(document.getElementById('seleciona-temperatura2').value);
    // console.log(select);
    
    let temperatura = document.getElementById('temperatura').value;
    let FormulaF = (parseInt(temperatura) * 1.8) + 32;
    let formulaK = parseInt(temperatura) + 273;
    let resultado = document.getElementById('resultado');
    if(select1 === 0 && select2 === 0 || select1 === 1 && select2 === 1 || select1 === 2 && select2 === 2){
        switch (select1 || select2){
            case 0:
                resultado.innerHTML = (`A temperatura em kelvin é ${temperatura}`)
                break;
            case 1:
                resultado.innerHTML = (`A temperatura em °Fahrenheit é ${temperatura}`)
                break;
            case 2:
                resultado.innerHTML = (`A temperatura em °celsius é ${temperatura}`)
                 break;  
        }
    }else if(select1 === 0 && select2 === 1){
            let FormulaF = temperatura - 459.67;
            resultado.innerHTML = (`${temperatura}K em fahrenheit é ${FormulaF}°fahrenheit`)
        } else if(select1 === 0 && select2 === 2){
            let formulaF = temperatura - 272.15;
            resultado.innerHTML = (`${temperatura}k em celsius é ${formulaF}°Celsius`)
        } 
    

    
     
    }



// switch(select){
//     case 0:
//         resultado.innerHTML = (`${temperatura}°C em kelvin é ${formulaK}`);
//         break;
//         case 1:
//             resultado.innerHTML = (`${temperatura}°C em fahrenheit é ${FormulaF}`)
//             break;
//             default:
//                 resultado.innerHTML = ('Erro');
//           break;                   
// }
// console.log(temperatura);
//     resultado.innerHTML = (`${temperatura}°C em fahrenheit é ${calculo}?f`);
// }