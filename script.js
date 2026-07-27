window.onerror = function(message, source, line){
    alert("Error: " + message + "\nLine: " + line);
};
// ===============================
// ReelCreator AI - script.js
// Part 1
// ===============================

// Theme Toggle
const themeBtn = document.querySelector(".theme-btn");

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    themeBtn.textContent =
      document.body.classList.contains("light-mode") ? "☀️" : "🌙";
  });
}

// Scroll Animation
const cards = document.querySelectorAll(".tool-card, .feature");

if (cards.length > 0) {
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
}

// ===============================
// Caption Generator
// ===============================

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

    let caption = "";

    if (language === "Hindi") {
      caption =
        "✨ सपनों का पीछा करो, क्योंकि मेहनत कभी बेकार नहीं जाती। ❤️🚀";
    } else {
      caption =
        "✨ Chase your dreams. Hard work always pays off. ❤️🚀";
    }

    result.innerHTML = `
      <h3>✨ AI Caption</h3>
      <p><b>Topic:</b> ${topic}</p>
      <p><b>Mood:</b> ${mood}</p>
      <br>
      <p>${caption}</p>
    `;
  });
}

// Copy Caption
const copyCaptionBtn = document.getElementById("copyCaptionBtn");

if (copyCaptionBtn) {
  copyCaptionBtn.addEventListener("click", () => {

    const text = document.getElementById("result").innerText;

    navigator.clipboard.writeText(text);

    alert("✅ Caption Copied!");

  });
}
// ===============================
// Part 2
// Username + Bio + Font Generator
// ===============================

// Username Generator
const usernameBtn = document.getElementById("usernameBtn");

if (usernameBtn) {
  usernameBtn.addEventListener("click", () => {

    const name = document.getElementById("name").value.trim();
    const output = document.getElementById("output");

    if (!name) {
      output.innerHTML = "⚠️ Please enter your name.";
      return;
    }

    output.innerHTML = `
      <h3>✨ Username Ideas</h3>
      <p>@${name}_official</p>
      <p>@its_${name}</p>
      <p>@real_${name}</p>
      <p>@${name}_creator</p>
      <p>@${name}_007</p>
      <p>@the_${name}</p>
      <p>@${name}_yt</p>
      <p>@${name}_ff</p>
    `;
  });
}

// Bio Generator
const bioBtn = document.getElementById("bioBtn");

if (bioBtn) {
  bioBtn.addEventListener("click", () => {

    const category = document.getElementById("category").value;
    const language = document.getElementById("language").value;
    const output = document.getElementById("output");

    output.innerHTML = `
      <h3>✨ Instagram Bio</h3>
      <p>🔥 ${category}</p>
      <p>❤️ Dream Big</p>
      <p>🚀 Create Daily</p>
      <p>📩 DM For Collaboration</p>
      <p>🌍 ${language}</p>
    `;
  });
}

// ===============================
// Stylish Font Generator
// ===============================

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

      <p>𝐁𝐨𝐥𝐝 ➜ ${text}</p>
      <p>𝑰𝒕𝒂𝒍𝒊𝒄 ➜ ${text}</p>
      <p>𝕭𝖑𝖆𝖈𝖐 ➜ ${text}</p>
      <p>𝓢𝓬𝓻𝓲𝓹𝓽 ➜ ${text}</p>
      <p>𝒞𝓊𝓇𝓈𝒾𝓋𝑒 ➜ ${text}</p>
      <p>🅑🅤🅑🅑🅛🅔 ➜ ${text}</p>
      <p>ⓒⓘⓡⓒⓛⓔ ➜ ${text}</p>
      <p>Ｓｔｙｌｉｓｈ ➜ ${text}</p>
      <p>★彡 ${text} 彡★</p>
      <p>꧁ ${text} ꧂</p>
      <p>『 ${text} 』</p>
      <p>✦ ${text} ✦</p>
      <p>➳ ${text} ♡</p>
      <p>✿ ${text} ✿</
      // ===============================
// Part 3
// Hashtag + Best Time + Color
// ===============================

// ===============================
// Hashtag Generator
// ===============================

const hashtagBtn = document.getElementById("hashtagBtn");

if (hashtagBtn) {

  hashtagBtn.addEventListener("click", () => {

    const keyword = document.getElementById("hashtagInput").value.trim();
    const output = document.getElementById("hashtagOutput");

    if (!keyword) {
      output.innerHTML = "⚠️ Please enter a keyword.";
      return;
    }

    output.innerHTML = `
      <h3>🔥 Trending Hashtags</h3>

      #${keyword}
      #${keyword}reels
      #${keyword}viral
      #${keyword}video
      #${keyword}edit
      #instagram
      #reels
      #viral
      #explore
      #explorepage
      #trending
      #fyp
      #india
      #creator
      #contentcreator
    `;
  });

}

// ===============================
// Best Time
// ===============================

const bestTimeBtn = document.getElementById("bestTimeBtn");

if (bestTimeBtn) {

  bestTimeBtn.addEventListener("click", () => {

    const result = document.getElementById("bestTimeOutput");

    result.innerHTML = `
      <h3>📈 Best Time To Post</h3>

      🌅 Morning : 8 AM - 10 AM<br><br>

      🌞 Afternoon : 12 PM - 2 PM<br><br>

      🌙 Evening : 6 PM - 9 PM<br><br>

      ⭐ Best Time : 7:30 PM
    `;
  });

}

// ===============================
// Color Picker
// ===============================

const colorInput = document.getElementById("colorPicker");

if (colorInput) {

  colorInput.addEventListener("input", () => {

    const value = colorInput.value;

    const preview = document.getElementById("colorCode");

    if (preview) {
      preview.innerHTML = value;
    }

  });

}

console.log("✅ ReelCreator AI Loaded Successfully");
alert("script.js loaded");

const fontBtn = document.getElementById("fontBtn");

if (fontBtn) {
  alert("Font button found");

  fontBtn.onclick = function () {
    alert("Button Clicked");

    document.getElementById("fontOutput").innerHTML =
      "<h3>✅ Working Successfully</h3>";
  };
}
