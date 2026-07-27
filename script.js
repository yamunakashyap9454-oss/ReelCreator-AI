// ===============================
// ReelCreator AI - script.js
// ===============================

// Theme Toggle
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
});

// Smooth Animation
const cards = document.querySelectorAll(".tool-card, .feature");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s ease";
    observer.observe(card);
});
/* ===== Light Mode ===== */

body.light-mode{
background:#f8fafc;
color:#111827;
}

body.light-mode .navbar,
body.light-mode footer{
background:#ffffff;
}

body.light-mode .tool-card,
body.light-mode .feature{
background:#ffffff;
color:#111827;
border:1px solid #e5e7eb;
}

body.light-mode p{
color:#475569;
}

body.light-mode a{
color:#111827;
}
