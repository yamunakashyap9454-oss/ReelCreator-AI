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

const bioBtn = document.getElementById("bioBtn");

if (bioBtn) {
  bioBtn.addEventListener("click", () => {
    const category = document.getElementById("category").value;
    const language = document.getElementById("language").value;
    const output = document.getElementById("output");

    output.innerHTML = `
    <h3>✨ Demo Bio</h3>
    <p><b>Category:</b> ${category}</p>
    <p><b>Language:</b> ${language}</p>
    <br>
    <p>🚀 Dream Big | Create Daily</p>
    <p>❤️ Believe in Yourself</p>
    <p>📩 DM for Collaboration</p>
    `;
  });
}
const usernameBtn = document.getElementById("usernameBtn");

if (usernameBtn) {
  usernameBtn.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const output = document.getElementById("output");

    output.innerHTML = `
    <h3>✨ Username Ideas</h3>
    <p>@${name}_official</p>
    <p>@its_${name}</p>
    <p>@real_${name}</p>
    <p>@${name}_creator</p>
    <p>@${name}_007</p>
    `;
  });
}
const generateBtn = document.getElementById("generateBtn");

if (generateBtn) {

  generateBtn.addEventListener("click", () => {

    const topic = document.getElementById("topic").value.trim();
    const mood = document.getElementById("mood").value;
    const language = document.getElementById("language").value;
    const result = document.getElementById("result");

    if (!topic) {
      result.innerHTML = "⚠️ Please enter a topic.";
      return;
    }

    result.innerHTML = `
      <h3>✨ AI Caption</h3>
      <p><b>Topic:</b> ${topic}</p>
      <p><b>Mood:</b> ${mood}</p>
      <p><b>Language:</b> ${language}</p>

      <br>

      <p>
      🌟 Every journey begins with one step.
      Keep creating, keep believing and never stop chasing your dreams. 🚀✨
      </p>
    `;

  });

}

const copyCaptionBtn = document.getElementById("copyCaptionBtn");

if (copyCaptionBtn) {

  copyCaptionBtn.addEventListener("click", () => {

    const text = document.getElementById("result").innerText;

    navigator.clipboard.writeText(text);

    alert("✅ Caption copied!");

  });

}
const fontBtn = document.getElementById("fontBtn");

if (fontBtn) {

fontBtn.addEventListener("click", () => {

const text = document.getElementById("fontInput").value.trim();

const output = document.getElementById("fontOutput");

if (!text) {
output.innerHTML = "⚠️ Please enter text.";
return;
}

output.innerHTML = `
<h3>🔤 Stylish Fonts</h3>

<p>𝐁𝐨𝐥𝐝 → ${text}</p>

<p>𝑰𝒕𝒂𝒍𝒊𝒄 → ${text}</p>

<p>𝕯𝖆𝖗𝖐 → ${text}</p>

<p>🅑🅤🅑🅑🅛🅔 → ${text}</p>

<p>Ｓｔｙｌｉｓｈ → ${text}</p>

<p>ⓒⓘⓡⓒⓛⓔ → ${text}</p>

<p>★彡 ${text} 彡★</p>

<p>꧁ ${text} ꧂</p>

<p>『 ${text} 』</p>

<p>✦ ${text} ✦</p>
`;

});

}
.result-box{
margin-top:20px;
padding:15px;
background:#151b2e;
border:1px solid #7c4dff;
border-radius:12px;
color:#fff;
line-height:2;
word-break:break-word;
font-size:18px;
}
