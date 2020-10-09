const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirmation");

// If error, show error message
const showError = (input, message) => {
	const formControl = input.parentElement;
	formControl.className = "form-control error";

	const small = formControl.querySelector("small");
	small.innerText = message;
};

// If success, show success indication
const showSuccess = (input) => {
	const formControl = input.parentElement;
	formControl.className = "form-control success";
};

// Check required fields

const checkRequired = (inputArr) => {
	inputArr.forEach((input) => {
		if (input.value.trim() === "") {
			showError(input, `${toSentenceCase(input)} is required`);
		} else {
			showSuccess(input);
		}
	});
};

// Make sure that the error message is always displayed with a capital first letter
const toSentenceCase = (input) => {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

// Check input length
const checkLength = (input, min, max) => {
	inputLength = input.value.length;
	if (inputLength >= min && inputLength <= max) {
		showSuccess(input);
	} else {
		showError(
			input,
			`${toSentenceCase(
				input
			)} needs to be between ${min} and ${max} characters.`
		);
	}
};

const checkEmail = (input) => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	re.test(String(input.value).toLowerCase())
		? showSuccess(input)
		: showError(input, "Please enter a valid email address");
};

const checkPasswordMatch = (input1, input2) => {
	console.log(input1.value, input2);
	if (input1.value !== input2.value) {
		showError(input1, "Passwords don't match!");
		showError(input2, "Passwords don't match!");
	}
};

const handleSubmit = (event) => {
	event.preventDefault();
	const fields = [username, email, password, passwordConfirm];

	checkRequired(fields);
	checkLength(username, 3, 32);
	checkLength(password, 6, 64);
	checkEmail(email);
	checkPasswordMatch(password, passwordConfirm);
};

form.addEventListener("submit", handleSubmit);

// Username validation
const validateUsername = (username) => {
	username.value.length < 3
		? showError(username, "Username must be at least three characters")
		: showSuccess(username);
};
