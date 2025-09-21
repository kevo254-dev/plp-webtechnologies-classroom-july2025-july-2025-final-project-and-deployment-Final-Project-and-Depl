// script.js - vanilla JS for nav, testimonials, forms, year

document.addEventListener('DOMContentLoaded', () => {
  // set year
  const yEl = document.getElementById('year');
  if (yEl) yEl.textContent = new Date().getFullYear();

  // mobile nav toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');
  if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => navList.classList.toggle('showing'));
  }

  // testimonials slider
  const testimonials = Array.from(document.querySelectorAll('.testimonial'));
  if (testimonials.length) {
    let idx = testimonials.findIndex(t => t.classList.contains('active'));
    if (idx < 0) idx = 0;
    function show(i) {
      testimonials.forEach((t, j) => t.classList.toggle('active', i === j));
    }
    show(idx);
    setInterval(() => {
      idx = (idx + 1) % testimonials.length;
      show(idx);
    }, 4000);
  }

  // quote form handling (client side)
  const quoteForm = document.getElementById('quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('q-name').value.trim();
      const email = document.getElementById('q-email').value.trim();
      const phone = document.getElementById('q-phone').value.trim();
      const status = document.getElementById('quote-status');
      const fileInput = document.getElementById('q-file');

      if (!name || !email || !phone) {
        if (status) status.textContent = 'Please provide your name, email and phone.';
        return;
      }

      // file size validation (20MB)
      if (fileInput && fileInput.files.length) {
        const f = fileInput.files[0];
        if (f.size > 20 * 1024 * 1024) {
          if (status) status.textContent = 'File too large. Maximum allowed is 20MB.';
          return;
        }
      }

      if (status) status.textContent = 'Submitting... (simulated)';
      // simulate upload
      setTimeout(() => {
        if (status) status.textContent = 'Request submitted. We will contact you shortly.';
        quoteForm.reset();
      }, 1000);
    });
  }

  // employee login demo
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = document.getElementById('emp-user').value.trim();
      const pass = document.getElementById('emp-pass').value.trim();
      const loginStatus = document.getElementById('login-status');
      if (!user || !pass) {
        if (loginStatus) loginStatus.textContent = 'Enter username and password.';
        return;
      }
      // demo credentials (remove in production)
      if (user === 'admin' && pass === 'password123') {
        if (loginStatus) loginStatus.textContent = 'Login successful (demo).';
      } else {
        if (loginStatus) loginStatus.textContent = 'Invalid credentials (demo).';
      }
    });
  }

});
