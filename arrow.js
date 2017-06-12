var addStatement = (a, b) => {
   return a + b;
}

var addExpression = (a, b) => a + b;

console.log(addStatement(2, 3));
console.log(addStatement(1, -1));
console.log(addExpression(2, 3));
console.log(addExpression(1, -1));