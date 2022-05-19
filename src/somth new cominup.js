
//buttons
var btn1 = document.getElementById("1");
var btn2 = document.getElementById("2");
var btn3 = document.getElementById("3");
var btn4 = document.getElementById("4");
var btn5 = document.getElementById("5");
var btn6 = document.getElementById("6");
var btn7 = document.getElementById("7");
var btn8 = document.getElementById("8");
var btn9 = document.getElementById("9");
var btn0 = document.getElementById("0");

//operators
var btnSqRt = document.getElementById("√")
var btnPwr = document.getElementById("^")
var btnMulti = document.getElementById("*")
var btnRt = document.getElementById("/")
var btnMinus = document.getElementById("-")
var btnPlus = document.getElementById("+")
var btnDot = document.getElementById(".")
var btnEqual = document.getElementById("=")

//Specials
var input = document.getElementById("input");
var clear = document.getElementById("CC")
var btnBack = document.getElementById("C")





var elementsApended = []





/*	${ Event.listners }$	*/





btn1.addEventListener("click", function () {
	elementsApended.push("1");
	input.innerHTML = elementsApended.join("")
});
btn2.addEventListener("click", function () {
	elementsApended.push("2");
	input.innerHTML = elementsApended.join("")
})
btn3.addEventListener("click", function () {
	elementsApended.push("3");
	input.innerHTML = elementsApended.join("")
})
btn4.addEventListener("click", function () {
	elementsApended.push("4");
	input.innerHTML = elementsApended.join("")
});
btn5.addEventListener("click", function () {
	elementsApended.push("5");
	input.innerHTML = elementsApended.join("")
})
btn6.addEventListener("click", function () {
	elementsApended.push("6");
	input.innerHTML = elementsApended.join("")
})
btn7.addEventListener("click", function () {
	elementsApended.push("7");
	input.innerHTML = elementsApended.join("")
});
btn8.addEventListener("click", function () {
	elementsApended.push("8");
	input.innerHTML = elementsApended.join("")
})
btn9.addEventListener("click", function () {
	elementsApended.push("9");
	input.innerHTML = elementsApended.join("")
})
btn0.addEventListener("click", function () {
	elementsApended.push("0");
	input.innerHTML = elementsApended.join("")
})





/*	${ Power.Listners }$	*/





btnPwr.addEventListener("click", function () {
	elementsApended.push("^");
	input.innerHTML = elementsApended.join("")
})
btnSqRt.addEventListener("click", function () {
	elementsApended.push("√");
	input.innerHTML = elementsApended.join("")
});
btnMulti.addEventListener("click", function () {
	elementsApended.push("*");
	input.innerHTML = elementsApended.join("")
})
btnRt.addEventListener("click", function () {
	elementsApended.push("/");
	input.innerHTML = elementsApended.join("")
})
btnMinus.addEventListener("click", function () {
	elementsApended.push("-");
	input.innerHTML = elementsApended.join("")
})
btnPlus.addEventListener("click", function () {
	elementsApended.push("+");
	input.innerHTML = elementsApended.join("")
})
btnDot.addEventListener("click", function () {
	elementsApended.push(".");
	input.innerHTML = elementsApended.join("")
})





/*
		LOGIC 👇
*/


btnEqual.addEventListener("click", function () {
	function calculate(usrInput){

		if(usrInput.includes("^")){
			usrInput = usrInput.replace("^", "**");
		}
		if(usrInput.includes("√")){
			usrInput = usrInput.replace("√", "Math.sqrt");
		}
		if(usrInput.includes("+")){

			let arryLength = usrInput.length;
			let usrInputSplitResult = usrInput.split("+");
			let usrNums = usrInputSplitResult.join(" ")

			if(count(usrInput, "+") > 1){
				window.alert("Error: Too many + signs")
			}
			else{
				const [x, y] = usrNums.split(" ");

					console.log(x)
				console.log(y)
				let $usrInt1 = parseInt(x)
				let $usrInt2 = parseInt(y)
				input.innerHTML = $usrInt1 + $usrInt2

			
			}

		}
	}
	function count(str, find) {
		return (str.split(find)).length - 1;
	}

	function foo(usrInput){

	}

	let usrInput = elementsApended.join("")
	calculate(usrInput)

})







/* 	${ Special.Events }$   */





clear.addEventListener("click", function () {
	let clearExpr = window.prompt("Are you sure you want to clear?(Yes|No)")
	if (clearExpr === "yes") {
		elementsApended = []
		input.innerHTML = elementsApended.join("")
	}
	else if (clearExpr === "y"){
		elementsApended = []
		input.innerHTML = elementsApended.join("")
	}
	else if (clearExpr === "no"){ window.alert("aborted") }
	else if (clearExpr === "n"){ window.alert("aborted") }
	else { window.alert("Invalid input") }
})

btnBack.addEventListener("click", function () {
	elementsApended.pop();
	input.innerHTML = elementsApended.join("")
})





/* 	${ Input.Logic }$   */






input.addEventListener("click", function () {


	expression = window.prompt("Enter the expression(Operators allowed: + - /* √ ^)")
	
	clearCurrnet = window.prompt("Clear the current expression?(y/n)")
	if (clearCurrnet == "y") {
		elementsApended = []
		input.innerText = ""
		input.innerText = expression
	}
	else {
		elementsApended.push(expression)
		input.innerText = elementsApended.join("")
	}

});
