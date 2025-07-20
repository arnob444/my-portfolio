const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passInput = document.getElementById('pass');
const msgInput = document.getElementById('msg');

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
phoneInput.addEventListener('input', validatePhone);
passInput.addEventListener('input', validatePassword);
msgInput.addEventListener('input', validateMessage);

function FormSubmit(event) {
	event.preventDefault();
	if (validateName() && validateEmail() && validatePhone() && validatePassword() && validateMessage()) {
		return true; 
	} else {
		event.preventDefault(); 
		return false;
	}
};

function validateName() {
	const name = nameInput.value.trim();
	const nameRegex = /^[A-Za-z\s]{3,50}$/;
	if (!name || !nameRegex.test(name)) {
		showError(
			nameInput,
			'ename',
			'Enter a valid name (3-50 letters and spaces only)'
		);
		return false;
	} else {
		clearError(nameInput, 'ename');
		return true;
	}
}

function validateEmail() {
	const email = emailInput.value.trim();
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!email || !emailRegex.test(email)) {
		showError(
			emailInput,
			'eemail',
			'Enter a valid email address (e.g., user@domain.com)'
		);
		return false;
	} else {
		clearError(emailInput, 'eemail');
		return true;
	}
}

function validatePhone() {
	const phone = phoneInput.value.trim();
	const phoneRegex = /^\+8801[3-9]\d{8}$/;
	if (!phone || !phoneRegex.test(phone)) {
		showError(
			phoneInput,
			'ephone',
			'Enter a valid BD phone number (e.g., +8801xxxxxxxx)'
		);
		return false;
	} else {
		clearError(phoneInput, 'ephone');
		return true;
	}
}

function validatePassword() {
	const pass = passInput.value;
	const passRegex =
		/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
	if (!pass || !passRegex.test(pass)) {
		showError(
			passInput,
			'epass',
			'Password must be 8+ chars with uppercase, lowercase, number, and special char'
		);
		return false;
	} else {
		clearError(passInput, 'epass');
		return true;
	}
}

function validateMessage() {
	const msg = msgInput.value.trim();
	if (!msg || msg.length < 10 || msg.length > 500) {
		showError(msgInput, 'emsg', 'Message must be 10-500 characters long');
		return false;
	} else {
		clearError(msgInput, 'emsg');
		return true;
	}
}

function showError(inputEl, errorId, message) {
	document.getElementById(errorId).innerHTML = message;
	document.getElementById(errorId).style.color = 'red';
	inputEl.style.border = '2px solid red';
	inputEl.style.borderRadius = '30px';
}

function clearError(inputEl, errorId) {
	document.getElementById(errorId).innerHTML = '';
	inputEl.style.border = '1px solid #ccc';
}