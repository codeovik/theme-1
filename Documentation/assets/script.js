document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuBtn');
    const sidebar = document.getElementById('sidebar');
    
    menuBtn.addEventListener('click', function() {
        sidebar.classList.toggle('show');
    });
});


// active class
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('li a');
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });
  let foundActive = false;
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
      foundActive = true;
    }
  });
  if (!foundActive) {
    const homeLink = document.querySelector('li a[href="#home"]');
    if (homeLink) homeLink.classList.add('active');
  }
});

document.querySelector("#portfolio-1").innerText = `<strong>I am Bold</strong>`
document.querySelector("#portfolio-2").innerText = `<i>I am italic</i>`
document.querySelector("#portfolio-3").innerText = `<strong><i>I am italic and bold</i></strong>`
document.querySelector("#portfolio-4").innerText = `Line 1 <br> Line 2`