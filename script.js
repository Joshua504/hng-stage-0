const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const successMessage = document.querySelector(
	'[data-testid="test-contact-success"]'
);
const toggle = document.querySelector('.toggle');
const gridWrapper = document.querySelector('.grid-wrapper');

function updateTime() {
	const timeElement = document.querySelector('.time');
	if (timeElement) {
		timeElement.textContent = Date.now() + 'ms';
	}
}
updateTime();
setInterval(updateTime, 1000);

if (toggle && gridWrapper) {
	toggle.addEventListener('click', () => {
		gridWrapper.classList.toggle('show');
	});
}

if (
	form &&
	nameInput &&
	emailInput &&
	subjectInput &&
	messageInput &&
	successMessage
) {
	function validateName() {
		const nameError = document.getElementById('nameError');
		if (nameInput.value.trim() === '') {
			nameInput.classList.add('error');
			nameError.classList.add('active');
			return false;
		} else {
			nameInput.classList.remove('error');
			nameError.classList.remove('active');
			return true;
		}
	}

	function validateEmail() {
		const emailError = document.getElementById('emailError');
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (
			emailInput.value.trim() === '' ||
			!emailRegex.test(emailInput.value.trim())
		) {
			emailInput.classList.add('error');
			emailError.classList.add('active');
			return false;
		} else {
			emailInput.classList.remove('error');
			emailError.classList.remove('active');
			return true;
		}
	}

	function validateSubject() {
		const subjectError = document.getElementById('subjectError');
		if (subjectInput.value.trim() === '') {
			subjectInput.classList.add('error');
			subjectError.classList.add('active');
			return false;
		} else {
			subjectInput.classList.remove('error');
			subjectError.classList.remove('active');
			return true;
		}
	}

	function validateMessage() {
		const messageError = document.getElementById('messageError');
		if (messageInput.value.trim().length < 10) {
			messageInput.classList.add('error');
			messageError.classList.add('active');
			return false;
		} else {
			messageInput.classList.remove('error');
			messageError.classList.remove('active');
			return true;
		}
	}

	nameInput.addEventListener('blur', validateName);
	emailInput.addEventListener('blur', validateEmail);
	subjectInput.addEventListener('blur', validateSubject);
	messageInput.addEventListener('blur', validateMessage);

	// Form submission
	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const isNameValid = validateName();
		const isEmailValid = validateEmail();
		const isSubjectValid = validateSubject();
		const isMessageValid = validateMessage();

		if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
			successMessage.classList.add('active');
			form.reset();

			document
				.querySelectorAll('.error')
				.forEach((el) => el.classList.remove('error'));

			successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

			setTimeout(() => {
				successMessage.classList.remove('active');
			}, 3000);
		}
	});

	const closeBtn = document.querySelector('.close-btn');
	if (closeBtn) {
		closeBtn.addEventListener('click', () => {
			successMessage.classList.remove('active');
		});
	}

	function resetContactForm() {
		form.reset();
		successMessage.classList.remove('active');
		document
			.querySelectorAll('.error')
			.forEach((el) => el.classList.remove('error'));
		document
			.querySelectorAll('.error-message')
			.forEach((el) => el.classList.remove('active'));
	}
}
