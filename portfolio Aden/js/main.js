/* ===============================
   Typing Effect
================================ */
const texts = [
  "Full Stack Developer",
  "Software Engineer",
  "Open for Jobs & Freelance"
];

let textIndex = 0;
let charIndex = 0;

function typingEffect() {
  const typingElement = document.getElementById("typing");
  if (!typingElement) return;

  typingElement.textContent =
    texts[textIndex].slice(0, ++charIndex);

  if (charIndex === texts[textIndex].length) {
    setTimeout(() => {
      charIndex = 0;
      textIndex = (textIndex + 1) % texts.length;
    }, 1500);
  }

  setTimeout(typingEffect, 120);
}

typingEffect();

/* ===============================
   Scroll Reveal Animation
================================ */
function revealOnScroll() {
  document.querySelectorAll(".reveal").forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ===============================
   Dark Mode Toggle (Optional)
================================ */
const toggle = document.getElementById("theme-toggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  });

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
}
