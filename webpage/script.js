//  js for sign in page
document.addEventListener("DOMContentLoaded", function () {
  const signinForm = document.getElementById("signin");
  const signupForm = document.getElementById("signup");
  const signinLink = document.getElementById("signin-link");
  const signupLink = document.getElementById("signup-link");

  signinLink.addEventListener("click", function (e) {
    e.preventDefault();
    signinForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
  });

  signupLink.addEventListener("click", function (e) {
    e.preventDefault();
    signupForm.classList.remove("hidden");
    signinForm.classList.add("hidden");
  });
});

// JavaScript for menu-strip functionality
document.addEventListener("DOMContentLoaded", function () {
  const strip = document.querySelector(".strip-active");
  const navigationDrop = document.getElementById("navigation-drop");
  const crossline = document.querySelector(".crossline");

  strip.addEventListener("click", function () {
    navigationDrop.classList.toggle("active");
  });

  crossline.addEventListener("click", function () {
    navigationDrop.classList.remove("active");
  });
});

// scroller
const scroller = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scroller.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerinner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerinner.children);

    scrollerContent.forEach((item) => {
      const duplicateItem = item.cloneNode(true);
      console.log(duplicateItem);
      duplicateItem.setAttribute("aria-hidden", true);
      scrollerinner.appendChild(duplicateItem);
    });
  });
}

// Contact US JS
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".home__contact__input");
  const submitBtn = document.getElementById("submitBtn");

  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (validateForm()) {
      // Form is valid, submit it
      alert("Form submitted successfully!");
      form.reset(); // Clear form fields after submission
    }
  });

  function validateForm() {
    const name = document.getElementById("User_Name").value.trim();
    const email = document.getElementById("email").value.trim();
    const feedback = document.getElementById("feedback").value.trim();

    if (name === "" || email === "" || feedback === "") {
      alert("Please fill in all fields.");
      return false;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    return true;
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
