var form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Add basic form validation 
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all required fields!');
    return;  // Exit function if validation fails
  }

  // After successful submission 
  alert('Your message has been sent! Thank you for contacting us.');
  form.reset();  // Reset form after successful submission
});
