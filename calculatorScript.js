let totalCalculated = 0;
let operator = "";
let addedValueToCaluculate = 0;




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
 let displayValue = document.querySelector("#calculatorDisplay");
 
    document.querySelectorAll(".numberButton").forEach(numberPressed => 
        numberPressed.addEventListener('click', function (e){
            console.log(e.originalTarget.id);
            displayValue.textContent += e.originalTarget.id;
            return displayValue;
            }));
    
  

    document.querySelectorAll(".operatorButton").forEach(operatorPressed => 
        operatorPressed.addEventListener('click', function(e){
            userOperator = e.originalTarget.id; //assinging the operator user has clicked to the variable userOperator
            //console.log(operatorCommand(totalCalculated,userOperator,displayValue.innerHTML));
            newNumber = parseInt(displayValue.innerHTML);
            totalCalculated= operatorCommand(totalCalculated,userOperator,newNumber);
            parseInt(totalCalculated);
            console.log(totalCalculated);
            displayValue.textContent = 0;
            return displayValue, totalCalculated;
        }))
