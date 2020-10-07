const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#passwordConfirm");

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

// Username validation
const validateUsername = (username) => {
	username.value.length < 3
		? showError(username, "Username must be at least three characters")
		: showSuccess(username);
};

const validateEmail = (email) => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	re.test(String(email.value).toLowerCase())
		? showSuccess(email)
		: showError(email, "Please enter a valid email address");
};

const handleSubmit = (event) => {
	event.preventDefault();
	validateUsername(username);
	validateEmail(email);
};

form.addEventListener("submit", handleSubmit);
