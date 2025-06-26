document.addEventListener('input', function() {
    form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', validateForm);
    }
});

function validateForm(event) {
    event.preventDefault();
    let valid = true;

    let name = document.getElementById('name').value.trim();
    let nameRegex = /^[A-Za-z\s]{3,50}$/;
    if (!name || !nameRegex.test(name)) {
        document.getElementById('ename').innerHTML = 'Enter a valid name (3-50 letters and spaces only)';
        document.getElementById('ename').style.color = 'red';
        document.getElementById('name').style.border = '2px solid red';
        document.getElementById('name').style.borderRadius = '30px';
        valid = false;
    } else {
        document.getElementById('ename').innerHTML = '';
        document.getElementById('name').style.border = '1px solid #ccc';
    }

    let email = document.getElementById('email').value.trim();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        document.getElementById('eemail').innerHTML = 'Enter a valid email address (e.g., user@domain.com)';
        document.getElementById('eemail').style.color = 'red';
        document.getElementById('email').style.border = '2px solid red';
        document.getElementById('email').style.borderRadius = '30px';
        valid = false;
    } else {
        document.getElementById('eemail').innerHTML = '';
        document.getElementById('email').style.border = '1px solid #ccc';
    }

    let phone = document.getElementById('phone').value.trim();
    let phoneRegex = /^\+8801[3-9]\d{8}$/;
    if (!phone || !phoneRegex.test(phone)) {
        document.getElementById('ephone').innerHTML = 'Enter a valid BD phone number (e.g., +8801xxxxxxxx)';
        document.getElementById('ephone').style.color = 'red';
        document.getElementById('phone').style.border = '2px solid red';
        document.getElementById('phone').style.borderRadius = '30px';
        valid = false;
    } else {
        document.getElementById('ephone').innerHTML = '';
        document.getElementById('phone').style.border = '1px solid #ccc';
    }

    let pass = document.getElementById('pass').value;
    let passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!pass || !passRegex.test(pass)) {
        document.getElementById('epass').innerHTML = 'Password must be 8+ chars with uppercase, lowercase, number, and special char';
        document.getElementById('epass').style.color = 'red';
        document.getElementById('pass').style.border = '2px solid red';
        document.getElementById('pass').style.borderRadius = '30px';
        valid = false;
    } else {
        document.getElementById('epass').innerHTML = '';
        document.getElementById('pass').style.border = '1px solid #ccc';
    }

    let msg = document.getElementById('msg').value.trim();
    if (!msg || msg.length < 10 || msg.length > 500) {
        document.getElementById('emsg').innerHTML = 'Message must be 10-500 characters long';
        document.getElementById('emsg').style.color = 'red';
        document.getElementById('msg').style.border = '2px solid red';
        document.getElementById('msg').style.borderRadius = '30px';
        valid = false;
    } else {
        document.getElementById('emsg').innerHTML = '';
        document.getElementById('msg').style.border = '1px solid #ccc';
    }

    if (valid) {
        alert('Form is valid and ready to submit');
    }
}