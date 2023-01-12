// leftOperand, operator, rightOperand
// 10000000         +         20000      = 3

const display = document.querySelector('#display');
const equals = document.querySelector('.equals');
const decimal = document.querySelector('.decimal');

const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');

const operation = [];
const operatorsArray = [ '+', '-', '*', '/' ];

const addToDisplay = e => {
    operation.push(e.target.value)
    display.innerText += e.target.value
}

decimal.addEventListener('click', addToDisplay);
numbers.forEach( number => number.addEventListener( 'click', addToDisplay ) );
operators.forEach( operator => operator.addEventListener( 'click', addToDisplay ) );

equals.addEventListener(
    'click',
    () => {
        let operatorIndex;
        let result;

        for( let operator of operatorsArray ) {
            const index = operation.indexOf(operator);
            if( index > -1 ) {
                operatorIndex = index;
                break;
            }
        }
        // [ 4, 5, 1, -, 9, 9 ], operatorIndex = 3
        // leftNumber = 451 rightNumber = 99
        const left = operation.slice(0, operatorIndex); // [4, 5, 1] , 451
        const right = operation.slice(operatorIndex + 1); // [9, 9] , 99
        const leftNumber = parseFloat( left.join('') ); // Number 451
        const rightNumber = parseFloat( right.join('') ); // Number 99
        const operator = operation[operatorIndex]; // -

        switch(operator) {
            case '+':
                result = leftNumber + rightNumber;
                break;

            case '-':
                result = leftNumber - rightNumber;
                break;

            case '*':
                result = leftNumber * rightNumber;
                break;

            case '/':
                result = leftNumber / rightNumber;
                break;
        }

        display.innerText = result;
        operation.length = 0;
        operation.push(result);

    }
)