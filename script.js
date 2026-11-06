// Add your real email address between the quotation marks before publishing.
const portfolioEmail = "rolandogonzales001@gmail.com";

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Reveal sections as they enter the screen.
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(item => revealObserver.observe(item));

// Small rotating text effect in the hero section.
const phrases = ["web experiences.", "useful applications.", "creative solutions."];
const typedText = document.getElementById("typedText");
let phraseIndex = 0;
setInterval(() => {
  phraseIndex = (phraseIndex + 1) % phrases.length;
  typedText.textContent = phrases[phraseIndex];
}, 2600);

// Contact form: opens the visitor's email app. It does not store or send data itself.
document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("visitorName").value.trim();
  const email = document.getElementById("visitorEmail").value.trim();
  const message = document.getElementById("visitorMessage").value.trim();
  const status = document.getElementById("formStatus");

  if (!name || !email || !message) {
    status.textContent = "Please complete all fields.";
    return;
  }
  if (portfolioEmail === "YOUR_EMAIL@example.com") {
    status.textContent = "Please add your email address in script.js before using this form.";
    return;
  }
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:${portfolioEmail}?subject=${subject}&body=${body}`;
  status.textContent = "Your email app should open with the message prepared.";
});

document.getElementById("year").textContent = new Date().getFullYear();
