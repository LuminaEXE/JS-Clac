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
