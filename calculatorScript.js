let totalCalculated = "";
let operator = "";
let addedValueToCaluculate = "";




let additionFunction = function ( a , b ) {
    return (parseInt(a) + parseInt(b));
}
let subtractionFunction = function ( a, b ) {
    return (parseInt(a) - parseInt(b));
}
 let multiplicationFunction = function ( a, b ) {
     return (parseInt(a) * parseInt(b));
 }
 let divisionFunction = function ( a , b ) {
     return (parseInt(a) / parseInt(b));
 }

 function operatorCommand(a, operator, b) {
     if (operator === "+"){
        return additionFunction(a,b);
     }
     else if (operator === "-") {
         return subtractionFunction(a,b);
     }
     else if (operator === "*") {
         return multiplicationFunction (a,b);
     }
     else if (operator === "÷") {
         return divisionFunction (a,b);
     }
 }

 //Update formula bar
    function updateFormulaBar (){
        forumlaTextBox = document.querySelector("#formulaDisplay");
        forumlaTextBox.textContent = `${totalCalculated}` + " " + `${operator}` + " " + `${addedValueToCaluculate}`;
    }
    function clearAllItems () {
        displayValue.textContent = "";
        totalCalculated = "";
        operator = "";
        addedValueToCaluculate = "";
    }

    function addingValueToFormuala (userOperatorChoice) {
        if (totalCalculated == "" ) {
            totalCalculated = displayValue.innerHTML;
            displayValue.textContent = "";
            operator = userOperatorChoice;
            return [totalCalculated, displayValue];
        }
        else if (totalCalculated !== "") {
            addedValueToCaluculate = displayValue.innerHTML;
            operator = userOperatorChoice;
            displayValue.textContent = "";
            return [addedValueToCaluculate, operator];
        }
    }

    let displayValue = document.querySelector("#calculatorDisplay");
     document.querySelectorAll(".numberButton").forEach(numberPressed => 
        numberPressed.addEventListener('click', function (e){
            console.log(e.originalTarget.id);
            displayValue.textContent += parseInt(e.originalTarget.id);
            return displayValue;
            }));
           
    document.querySelectorAll(".operatorButton").forEach(operatorPressed => 
        operatorPressed.addEventListener('click', function(e){
            userOperatorChoice = e.originalTarget.id;
            addingValueToFormuala(userOperatorChoice);
            updateFormulaBar();
            return [totalCalculated, operator, addedValueToCaluculate];
        }));

    equalsPressed = document.querySelector(".equalsButton");
    equalsPressed.addEventListener('click', function(e){
        addedValueToCaluculate = displayValue.innerHTML;
        let calculation = operatorCommand(totalCalculated,operator,addedValueToCaluculate);
        updateFormulaBar();
        displayValue.textContent = calculation;
          console.log(calculation);  
        }); //issue is that the equals formula does not have access to the updated values of totalCalculated,operator, and 

    clearButton = document.querySelector(".clearButton");
    clearButton.addEventListener('click', function(){
       clearAllItems(); 
    })
    /* document.querySelectorAll(".operatorButton").forEach(operatorPressed => 
        operatorPressed.addEventListener('click', function(e){
            userOperator = e.originalTarget.id; //assinging the operator user has clicked to the variable userOperator
            //console.log(operatorCommand(totalCalculated,userOperator,displayValue.innerHTML));
            newNumber = parseInt(displayValue.innerHTML);
            totalCalculated= operatorCommand(totalCalculated,userOperator,newNumber);
            parseInt(totalCalculated);
            console.log(totalCalculated);
            displayValue.textContent = 0;
            return displayValue, totalCalculated;
        })) */
        // Above works but in wrong order and can be simplified surely

       /* document.querySelectorAll(".operatorButton").forEach(operatorPressed => 
            operatorPressed.addEventListener('click', function(e){
                operator = e.originalTarget.id; //assinging the operator user has clicked to the variable Operator
                //function. if display value.innerHTML == "" then
                addedValueToCaluculate = parseInt(displayValue.innerHTML);
                totalCalculated= operatorCommand(totalCalculated,operator,addedValueToCaluculate);
                parseInt(totalCalculated);
                console.log(totalCalculated);
                

                updateFormulaBar();
                resetDisplayValue();
                return displayValue, totalCalculated;
            }))
    */
