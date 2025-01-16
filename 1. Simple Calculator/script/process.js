//default value of the input
const defaultValue = 0;
let currentValue = defaultValue;

//process of converting string to int
function getInputNumber() {
  return parseInt(numberInput.value);
}

//output processing
function outputProcess(operator, firstNumber, secondNumber) {
  const calculateDescription = `${firstNumber} ${operator} ${secondNumber}`;
  outputResult(currentValue, calculateDescription);
}

// //operator function
function operatorBtn(operator) {
  const numbers = getInputNumber();
  const initialResult = currentValue;

  //operator process
  switch (operator) {
    case "+":
      currentValue += numbers;
      break;
    case "-":
      currentValue -= numbers;
      break;
    case "*":
      currentValue *= numbers;
      break;
    case "/":
      currentValue /= numbers;
      break;
  }
  outputProcess(operator, initialResult, numbers)
}

//operator function 2nd version
function add(){
  calculateResult('add')
}

function subtract(){
  calculateResult('sub')
}

function multiply(){
  calculateResult('mul')
}

function divide(){
  calculateResult('div')
}


//function of each operator button
addBtn.addEventListener('click', () => operatorBtn("+"))
subBtn.addEventListener('click', () => operatorBtn("-"))
mulBtn.addEventListener('click', () => operatorBtn("*"))
divBtn.addEventListener('click', () => operatorBtn("/"))
