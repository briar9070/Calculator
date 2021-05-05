let additionFunction = function ( a , b ) {
    return (a + b);
}
let subtractionFunction = function ( a, b ) {
    return (a - b);
}
 let multiplicationFunction = function ( a, b ) {
     return (a * b);
 }
 let divisionFunction = function ( a , b ) {
     return (a / b);
 }

 function operatorCommand(a, operator, b) {
     if (operator === "add"){
        return additionFunction(a,b);
     }
     else if (operator === "subtract") {
         return subtractionFunction(a,b);
     }
     else if (operator === "multiply") {
         return multiplicationFunction (a,b);
     }
     else if (operator === "divide") {
         return divisionFunction (a,b);
     }
 }

 const numberPressed = document.querySelectorAll(".numberButton");
 for (const button of numberPressed){
    addEventListener('click', function(e) {
         console.log(e.originalTarget.id);
    });
    }