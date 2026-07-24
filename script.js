document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const serviceInput = document.getElementById('service');
    const messageInput = document.getElementById('message');
    const formSuccess = document.getElementById('formSuccess');

    const setError = (element, message) => {
        element.classList.add('error');
        const errorDisplay = document.getElementById(`${element.id}Error`);
        errorDisplay.innerText = message;
    };

    const setSuccess = (element) => {
        element.classList.remove('error');
        const errorDisplay = document.getElementById(`${element.id}Error`);
        errorDisplay.innerText = '';
    };

    const isValidEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.[a-zA-Z]{2,})))$/;
        return re.test(String(email).toLowerCase());
    };

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        if (nameInput.value.trim() === '') {
            setError(nameInput, 'Full name is required');
            isValid = false;
        } else {
            setSuccess(nameInput);
        }

        if (emailInput.value.trim() === '') {
            setError(emailInput, 'Email address is required');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            setError(emailInput, 'Please provide a valid email address');
            isValid = false;
        } else {
            setSuccess(emailInput);
        }

        if (serviceInput.value === '') {
            setError(serviceInput, 'Please select a service');
            isValid = false;
        } else {
            setSuccess(serviceInput);
        }

        if (messageInput.value.trim() === '') {
            setError(messageInput, 'Project details are required');
            isValid = false;
        } else if (messageInput.value.trim().length < 10) {
            setError(messageInput, 'Please provide at least 10 characters');
            isValid = false;
        } else {
            setSuccess(messageInput);
        }

        if (isValid) {
            formSuccess.classList.remove('hidden');
            contactForm.reset();
            setTimeout(() => {
                formSuccess.classList.add('hidden');
            }, 5000);
        }
    });
});