
function validateForm() {
  console.log("validateForm() called");
  // Get form elements
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("message");
  
  // Validate name
  if (nameInput.value.trim() == "") {
    alert("Please enter your name");
    nameInput.focus();
    return false;
  }
  
  // Validate email
  if (emailInput.value.trim() == "") {
    alert("Please enter your email address");
    emailInput.focus();
    return false;
  }
  if (!isValidEmail(emailInput.value.trim())) {
    alert("Please enter a valid email address");
    emailInput.focus();
    return false;
  }
  
  // Validate message
  if (messageInput.value.trim() == "") {
    alert("Please enter your message");
    messageInput.focus();
    return false;
  }
  
  // Submit form
  alert("Form submitted successfully");
  return true;
}

function isValidEmail(email) {
  // Regular expression pattern to validate email
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Add event listener for form submission
document.querySelector("#contact-form").addEventListener("submit", function(event) {
  // Prevent the form from submitting
  event.preventDefault();
  
  // Validate the form
  validateForm();
});
