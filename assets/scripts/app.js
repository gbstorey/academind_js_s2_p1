const defaultResult = 0;
let curResult = defaultResult;

function add() {
	curResult = curResult + userInput.value;
	outputResult(curResult, "");
}

addBtn.addEventListener("click", add);
