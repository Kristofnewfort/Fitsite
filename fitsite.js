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

const ring = document.querySelector('.background-ring');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  
  // Increase the ring’s size
  const newSize = 500 + scrollY * 0.2;
  ring.style.width = `${newSize}px`;
  ring.style.height = `${newSize}px`;
  
  // Fade it out (down to 0 opacity)
  const newOpacity = Math.max(1 - scrollY / 2000, 0);
  ring.style.opacity = newOpacity;
  
  // Optional: blur to mimic particle “spread”
  const blurValue = scrollY * 0.01;
  ring.style.filter = `blur(${blurValue}px)`;
});

