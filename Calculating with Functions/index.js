const handler = (number, operator) => (operator ? operator(number) : number);

const zero = operator => handler(0, operator);
const one = operator => handler(1, operator);
const two = operator => handler(2, operator);
const three = operator => handler(3, operator);
const four = operator => handler(4, operator);
const five = operator => handler(5, operator);
const six = operator => handler(6, operator);
const seven = operator => handler(7, operator);
const eight = operator => handler(8, operator);
const nine = operator => handler(9, operator);

const plus = rightOperator => leftOperator => leftOperator + rightOperator;
const minus = rightOperator => leftOperator => leftOperator - rightOperator;
const times = rightOperator => leftOperator => leftOperator * rightOperator;
const dividedBy = rightOperator => leftOperator => leftOperator / rightOperator;
