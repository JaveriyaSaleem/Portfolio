  // Array of words to cycle through
  var words = ['Web Developer', 'Web Designer', 'Freelancer'];

  // Initialize Typed.js
  var typed = new Typed('#typed-text', {
    strings: words,
    typeSpeed: 100, // Typing speed in milliseconds
    backSpeed: 60, // Backspacing speed in milliseconds
    loop: true // Loop the animation indefinitely
  });
