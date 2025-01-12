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

const headerone = document.getElementById('mainHeader');

window.addEventListener('scroll', () => {
  // how far we've scrolled in pixels
  const scrollY = window.scrollY; 
  
  // change 300 to any value you like to control how quickly it fades in
  let alpha = scrollY / 900;

  // limit alpha to a max of 1 so it doesn't exceed full opacity
  if (alpha > 1) alpha = 1;

  // adjust header background with new alpha
  header.style.backgroundColor = `rgba(155, 155, 155, ${alpha})`;
});


document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("testimonial-container");
  const track = document.getElementById("testimonial-track");

  // 1. Measure widths
  const containerWidth = container.offsetWidth;
  // We'll measure the width of just the FIRST half of the items (the original set).
  // Suppose your original set is 3 items; measure them alone or just half of total track.
  // For simplicity, let's measure the total track width and divide by 2:
  const totalWidth = track.scrollWidth;
  const halfWidth = totalWidth / 2; 
  // (assuming your duplicated set is exactly the same length as the original set)

  // 2. Starting position (at left = 0)
  let position = 0; 
  const speed = 1; // px per frame (increase for faster, decrease for slower)

  function animate() {
    position -= speed; 
    // If we've scrolled beyond the first set, reset to 0
    if (position <= -halfWidth) {
      position = 0; 
    }

    track.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }

  // 3. Start the animation
  animate();
});

document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("navToggle");
  const navbar = document.getElementById("navbar");

  navToggle.addEventListener("click", function () {
    navbar.classList.toggle("expanded");
    navbar.classList.toggle("collapsed");
  });
});


