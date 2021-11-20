const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previousOperand]');
const currentOperandTextElement = document.querySelector('[currentOperand]');


class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }//end constructor
}//end Calculator

//hook all variables to operate on the 'Calculator' object
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);



function clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined  
}//end clear()

function delete_(){

}//end del()

function appendNumber(number){
    numberButtons.forEach (button=> {
        button.addEventListener('click', () => {
            calculator.appendNumber(button.innerHTML)
            calculator.updateDisplay()
        })
    })
}//end appendNumber()

function chooseOperation(operaton){

}//end chooseOperation


function compute(){

}//end compute

function updateDisplay(){
    this.currentOperandTextElement.innerHTML = this.currentOperand
}//end updateDisplay



console.log("hidden Hello World")