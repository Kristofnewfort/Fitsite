// Smooth Scroll to Signup Section
function scrollToSignup() {
  const signupSection = document.getElementById('signup');
  signupSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSignup() {
  const about = document.getElementById('about');
  about.scrollIntoView({ behavior: 'smooth' });
}

// Change Header Background on Scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('transparent');
  } else {
    header.classList.remove('transparent');
  }
});

// Background Ring Animation
const ring = document.querySelector('.background-ring');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const newSize = 500 + scrollY * 0.2;
  ring.style.width = `${newSize}px`;
  ring.style.height = `${newSize}px`;
});

