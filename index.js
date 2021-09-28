const BTN = document.getElementById('start');
const PRODUCT_VALUE = document.getElementById('product-value');
const IVA_RESULT = document.getElementById('iva');
const RESULT = document.getElementById('result');
const OPTION = {style : 'currency', currency: 'COP'}; //Especifica el formato.
const MONEY_FORMAT = new Intl.NumberFormat('es-CO', OPTION); // Da el formato para el dinero.

// El valor del  IVA seria del 19%
const IVA = 0.19;

/**
 * This function ask a product price and validate the usesr's input be ok.
 */
function askValue(){
  let value = prompt('Por favor ingrese el valor de su producto:');

  if(value === null || !value){
    return;
  }

  if(isNaN(value)){
    alert(`Por favor ingrese el precio de su producto. ${value} no es una opcion valida.`);
    return;
  } else{
    value = parseInt(value)
  }

  return value
}

function productTotal(value){
  return  (value * IVA) + value;
}

function printResults(productValue, valueTotal){

  if(isNaN(productValue)){
    return;
  } else{
    PRODUCT_VALUE.innerHTML = `Valor del producto sin IVA: ${MONEY_FORMAT.format(productValue)}`;
    IVA_RESULT.innerHTML = `El valor del IVA (19%) de su producto es de: ${MONEY_FORMAT.format(productValue * IVA)}`;
    RESULT.innerHTML = `El total de su producto con IVA es de: ${MONEY_FORMAT.format(valueTotal)}`;
  }

}

BTN.addEventListener('click', () => {
  let productValue = askValue();
  let valueTotal = productTotal(productValue);
  printResults(productValue, valueTotal);

});