const form = document.getElementById('form');
const message = document.getElementById('message');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const age = document.getElementById('age').value.trim();

    if (!name || !lname || !phone || !email || !password) {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        message.textContent = 'Please enter a valid 10-digit phone number.';
        message.style.color = 'red';
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        message.textContent = 'Please enter a valid email address.';
        message.style.color = 'red';
        return;
    }

    if (age) {
        const birthDate = new Date(age);
        const today = new Date();
        const ageDiff = today.getFullYear() - birthDate.getFullYear();
        if (ageDiff < 18 || (ageDiff === 18 && today < new Date(birthDate.setFullYear(birthDate.getFullYear() + 18)))) {
            message.textContent = 'You must be at least 18 years old to register.';
            message.style.color = 'red';
            return;
        }
    }

    if (password.length < 12) {
        message.textContent = 'Password must be at least 12 characters long.';
        message.style.color = 'red';
        return;
    }

    message.textContent = 'Form submitted successfully!';
    message.style.color = 'green';
}); 