// Smooth scroll to section when navigation links are clicked
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop - 50, // Adjust for the fixed header
        behavior: 'smooth',
      });
    });
  });
  
  // Form validation
  const form = document.getElementById('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
  
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
  
    // Simple email validation regex
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    alert('Message sent successfully!');
    form.reset();
  });
  
  // Responsive navigation (for small screens)
  const navBar = document.querySelector('.navBar');
  const navLinks = document.querySelector('nav ul');
  
  navBar.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });
  
  // Close the menu when a link is clicked
  navLinks.addEventListener('click', function () {
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
  