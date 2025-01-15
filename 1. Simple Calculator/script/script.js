//Input Buttons & Text
const numberInput = document.getElementById('num-input')
const addBtn = document.getElementById('add-btn')
const subBtn = document.getElementById('sub-btn')
const mulBtn = document.getElementById('mul-btn')
const divBtn = document.getElementById('div-btn')

//outputs
const currentOutputInitial = document.getElementById('currentCalculate')
const currentOutputResult = document.getElementById('currentResult')

//processing output function
function outputResult(result, text){
    currentOutputResult.textContent = result
    currentOutputInitial.textContent = text
}