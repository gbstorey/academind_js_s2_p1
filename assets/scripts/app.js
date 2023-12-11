const defaultResult = 0;
let curResult = defaultResult;
let log = "";

function getUserNumberInput() {
	return parseInt(userInput.value);
}

function updateLog(symbol, enteredValue) {
	if (log == "") {
		log += enteredValue;
		return;
	}
	log += ` ${symbol} ${enteredValue}`;
}

function operation(type, symbol) {
	const enteredValue = getUserNumberInput();
	switch (type) {
		case "add":
			curResult += enteredValue;
			break;
		case "subtract":
			curResult -= enteredValue;
			break;
		case "multiply":
			curResult *= enteredValue;
			break;
		case "divide":
			curResult /= enteredValue;
			break;
		default:
			break;
	}
	updateLog(symbol, enteredValue);
	outputResult(curResult, log);
}

const buttons = [
	{ element: addBtn, func: () => operation("add", "+") },
	{ element: subtractBtn, func: () => operation("subtract", "-") },
	{ element: multiplyBtn, func: () => operation("multiply", "*") },
	{ element: divideBtn, func: () => operation("divide", "/") },
];

buttons.map((button) => {
	button.element.addEventListener("click", button.func);
});
