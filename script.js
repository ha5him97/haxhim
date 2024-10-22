document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting to the server
  
    // Show the popup after form submission
    const popup = document.getElementById('popup');
    popup.classList.add('show');
  
    // Clear the form fields
    this.reset();
  });
  
  // Close the popup when the "Close" button is clicked
  document.getElementById('closePopup').addEventListener('click', function() {
    const popup = document.getElementById('popup');
    popup.classList.remove('show');
  });
  