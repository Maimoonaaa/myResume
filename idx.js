function validateForm() {
  
  const name = document.getElementById('name');
  const email = document.getElementById('mail');
  const message = document.getElementById('message');

  const nameVal = name.value.trim();
  const emailVal = email.value.trim();
  const messageVal = message.value.trim();

  
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  let isValid = true;

  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';

  
  if (nameVal === '') {
    nameError.textContent = 'Name is required';
    isValid = false;
  }

  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailVal === '') {
    emailError.textContent = 'Email is required';
    isValid = false;
  } else if (!emailRegex.test(emailVal)) {
    emailError.textContent = 'Please enter a valid email address';
    isValid = false;
  }

  // Message validation
  if (messageVal === '') {
    messageError.textContent = 'Message is required';
    isValid = false;
  }

  return isValid; // if false, form submission is prevented
}