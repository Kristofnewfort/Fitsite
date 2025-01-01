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

  