/*
    Importing elements!
*/
var Number1 = document.getElementById("Num1");
var Number2 = document.getElementById("Num2");
var Result1 = document.getElementById("result");
var Oper = document.getElementById("Oper");
var calculate = document.getElementById("calc");

//Global opertaors!
let GlobalScopeOper = "";
let num1Int = 1
let num2Int = 2

/*
    Creating the event listerns for the elements
*/
Number1.addEventListener("click", function () {
    Num1 = window.prompt("Enter the 1st Number: ");
    num1Int = parseInt(Num1, 10);
    
    
    console.log(num1Int);
});

Number2.addEventListener("click", function () {
    Num2 = window.prompt("Enter the 2nd Number: ");
    num2Int = parseInt(Num2, 10);

    console.log(num2Int);
});



Oper.addEventListener("click", function () {
    Operator = window.prompt(
        "Enter the Operator to use with number1 and number2: "
    );

    //checking for the operator
    if (Operator.toLowerCase() == "+") {
      GlobalScopeOper = "+";
    } else if (Operator.toLowerCase() == "-") {
      GlobalScopeOper = "-";
    } else if (Operator.toLowerCase() == "/") {
      GlobalScopeOper = "/";
    } else if (Operator.toLowerCase() == "*") {
      GlobalScopeOper = "*";
    } else if (Operator.toLowerCase() == "sqrt") {
      GlobalScopeOper = "sqrt";
    } else if (Operator.toLowerCase() == "^") {
      GlobalScopeOper = "^";
    } else if (Operator.toLowerCase() == "help") {
      console.log("Operators: +, -, /, *, sqrt and ^");
    }

    console.log(GlobalScopeOper);
});

calculate.addEventListener("click", function ()  {
    if(GlobalScopeOper == "+"){
        //checking if nums are """NaN"""
        if(num1Int == NaN)  { console.log("Number1 is NaN"); }
        else if(num2Int == NaN)  { console.log("Number2 is NaN"); }

        else {
            //$<var>  <--  means disposable var
            let $sum = num2Int + num1Int;
            window.alert(num2Int + num1Int)
            Result1.innerText = $sum 
        }
    }
});
console.log(GlobalScopeOper);
