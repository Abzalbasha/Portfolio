// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form validation for contact section (if there's a form)
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contact-form'); // assuming you add a form with this ID
    
    if (form) {
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const emailInput = document.querySelector('#email');
        const messageInput = document.querySelector('#message');
        const emailValue = emailInput.value.trim();
        const messageValue = messageInput.value.trim();
        
        if (!validateEmail(emailValue)) {
          alert('Please enter a valid email.');
          emailInput.focus();
          return;
        }
        
        if (messageValue.length < 10) {
          alert('Message should be at least 10 characters long.');
          messageInput.focus();
          return;
        }
        
        // Submit the form if validation passes
        alert('Form submitted successfully!');
        form.reset(); // Clear form after submission
      });
    }
  });
  
  // Email validation function
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  