const inputElement = document.getElementById('validation-input');

inputElement.addEventListener('blur', function() {
  const expectedLength = inputElement.getAttribute('data-length');
  const enteredValue = inputElement.value;

  if (enteredValue.length === parseInt(expectedLength)) {
    inputElement.classList.remove('invalid');
    inputElement.classList.add('valid');
  } else {
    inputElement.classList.remove('valid');
    inputElement.classList.add('invalid');
  }
});