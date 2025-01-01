// 1. Smooth Scroll to Signup Section
function scrollToSignup() {
    const signupSection = document.getElementById('signup');
    signupSection.scrollIntoView({ behavior: 'smooth' });
  }
  
  // 2. Handle Form Submission
  const signupForm = document.getElementById('signupForm');
  
  signupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form from submitting normally
  
    // Collect form data
    const nameValue = document.getElementById('name').value.trim();
    const emailValue = document.getElementById('email').value.trim();
    const programValue = document.getElementById('programSelect').value;
  
    // Simple validation
    if (!nameValue || !emailValue) {
      alert('Please fill in all required fields.');
      return;
    }
  
    // Simulate sending data to server
    console.log('Form Data:', {
      name: nameValue,
      email: emailValue,
      program: programValue
    });
  
    // Provide user feedback
    alert(`Thank you, ${nameValue}! You've successfully subscribed to ${programValue} for £30/month.`);
  
    // Reset form
    signupForm.reset();
  });

  // Change Header Background on Scroll
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('transparent');
  } else {
    header.classList.remove('transparent');
  }
});

  // Select the circle
const circle = document.querySelector('.background-circle');

// Listen for scroll events
window.addEventListener('scroll', () => {
  // Measure how far down the page is scrolled
  const scrollY = window.scrollY;
  
  // Calculate a new size based on scroll. Adjust the multiplier as you like.
  const newSize = 100 + scrollY * 0.3;
  
  // Apply the new width and height
  circle.style.width = `${newSize}px`;
  circle.style.height = `${newSize}px`;
});

const ring = document.querySelector('.background-ring');

// Listen for scroll events
window.addEventListener('scroll', () => {
  // Measure how far down the page is scrolled
  const scrollY = window.scrollY;
  
  // Calculate a new size based on scroll (adjust multiplier as needed)
  const newSize = 100 + scrollY * 0.3;
  
  // Update the ring’s width and height
  ring.style.width = `${newSize}px`;
  ring.style.height = `${newSize}px`;
});