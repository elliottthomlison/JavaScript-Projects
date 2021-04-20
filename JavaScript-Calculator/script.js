class Calculator {
  //constructor takes all values in and will help determine where to 'place' the information
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    //creation of new calculator = erase all values and start fresh
    this.clear()
  }

  //will clear out the variables from the screen
  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

  //remove a single number
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  //what will happpen when someone pushes and adds a number to the screen
  appendNumber(number) {
    //this will tie into the updateDisplay via the variable below
    //in order to make sure that more than 1 '.' can't be added.
    if (number === '.' && this.currentOperand.includes('.')) return
    //we use toString so that the numbers wont be added together
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  //what will happen anytime a use selects an operation
  chooseOperation(operation) {
    if (this.currentOperand === '') return

    //this if statement is in case we perform one computation and then click another operator symbol
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

  //will compute to complete the mathematical question
  compute() {
    let computation 
    //previous = first, current = second 
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)

    //if the user presses equal and nothing is there we don't want the code to run
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      default:
        return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
  }

  //helper function for updateDisplay
  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

  //will update the display with the values and output of the computations
  updateDisplay() {
    this.currentOperandTextElement.innerText =
      this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
  }
}

//start by selecting all the buttons located inside the html
//when referencing the data variables in html they need to be inside square brackets
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]') 
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

//class Calculator being adjusted
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalsButton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
})