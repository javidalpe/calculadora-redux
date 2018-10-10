export const clear = () => ({
	type: "CLEAR"
});

export const calculateResult = () => ({
	type: 'CALCULATE_RESULT',
});

export const numberClick = num => ({
	type: "NUMBER_CLICK",
	num: num
});

export const operatorClick = op => ({
	type: "OPERATOR_CLICK",
	op: op
});

export const updateInput1 = numberString => ({
	type: "UPDATE_INPUT_1",
	number: numberString
});

export const updateInput2 = numberString => ({
	type: "UPDATE_INPUT_2",
	number: numberString
});


function calculate(input1, input2, operator) {
	let numA = parseInt(input1);
	let numB = parseInt(input2);
	switch (operator) {
		case '+':
			return numA + numB;
		case '-':
			return numA - numB;
		case '*':
			return numA * numB;
		case '/':
			return numA / numB;
		default:
			return 0;
	}
}

export const calculatorReducer = (state = {}, action) => {
	switch (action.type) {
		case "CLEAR":
			return {};
		case "UPDATE_INPUT_1":
			return {...state, input1: action.number};
		case "UPDATE_INPUT_2":
			return {...state, input2: action.number};
		case "OPERATOR_CLICK":
			return {...state, operator: action.op};
		case "NUMBER_CLICK":
			if (state.operator) {
				return {...state, input2: state.input2 + action.number};
			} else {
				return {...state, input1: state.input1 + action.number};
			}
		case "CALCULATE_RESULT":
			return {...state, result: calculate(state.input1, state.input2, state.operator)};
		default:
			return state;
	}
}
