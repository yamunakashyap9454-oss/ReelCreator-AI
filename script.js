// ======================================
// ReelCreator AI - script.js (Part 1)
// Theme + Caption Generator
// ======================================

// Theme Toggle
const themeBtn = document.querySelector(".theme-btn");

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    themeBtn.textContent =
      document.body.classList.contains("light-mode") ? "☀️" : "🌙";
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

      caption = `✨ ${topic} पर हर दिन एक नई कहानी लिखो।
❤️ कभी हार मत मानो।
🚀 सपने पूरे होंगे।`;

    } else if (language === "Hinglish") {

      caption = `✨ ${topic} ke saath apni journey continue rakho.
❤️ Never Give Up.
🚀 Keep Growing.`;

    } else {

      caption = `✨ Believe in yourself.
❤️ Keep creating content about ${topic}.
🚀 Success will come.`;

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

console.log("✅ Part 1 Loaded");
// ======================================
// Part 2
// Username + Bio + Stylish Fonts
// ======================================

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
      <p>@the_${name}</p>
      <p>@${name}_007</p>
      <p>@${name}_yt</p>
      <p>@official_${name}</p>
    `;

  });

}

// ===============================
// Bio Generator
// ===============================

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
// Stylish Fonts Generator
// ===============================
// ===============================
// Stylish Fonts Generator
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
      <p>ⓒⓘⓡⓒⓛⓔ ➜ ${text}</p>
      <p>Ｓｔｙｌｉｓｈ ➜ ${text}</p>
      <p>★彡 ${text} 彡★</p>
      <p>꧁ ${text} ꧂</p>
      <p>『 ${text} 』</p>
      <p>✦ ${text} ✦</p>
    `;

  });

}
// Part 3
// Hashtag + Best Time + Color Picker
// ======================================

// ===============================
// Hashtag Generator
// ===============================

const hashtagBtn = document.getElementById("hashtagBtn");

if (hashtagBtn) {

  hashtagBtn.addEventListener("click", () => {

    const topic = document.getElementById("topic").value.trim();
    const output = document.getElementById("output");

    if (!topic) {
      output.innerHTML = "⚠️ Please enter a topic.";
      return;
    }

    output.innerHTML = `
      <h3>🔥 Trending Hashtags</h3>

      <p>
      #${topic}<br>
      #${topic}Reels<br>
      #${topic}Video<br>
      #${topic}Creator<br>
      #viral<br>
      #reels<br>
      #instagram<br>
      #explore<br>
      #explorepage<br>
      #trending<br>
      #fyp<br>
      #india
      </p>
    `;

  });

}

// ===============================
// Best Time Generator
// ===============================

const bestTimeBtn = document.getElementById("bestTimeBtn");

if (bestTimeBtn) {

  bestTimeBtn.addEventListener("click", () => {

    const output = document.getElementById("bestTimeOutput");

    output.innerHTML = `
      <h3>📅 Best Time To Post</h3>

      <p>🌅 Morning : 8:00 AM - 10:00 AM</p>

      <p>🌞 Afternoon : 12:00 PM - 2:00 PM</p>

      <p>🌙 Evening : 6:00 PM - 9:00 PM</p>

      <p>⭐ Best Time : 7:30 PM</p>
    `;

  });

}

// ===============================
// Color Picker
// ===============================

const colorPicker = document.getElementById("colorPicker");

if (colorPicker) {

  colorPicker.addEventListener("input", () => {

    const colorCode = document.getElementById("colorCode");

    if (colorCode) {
      colorCode.textContent = colorPicker.value;
    }

  });

}

console.log("✅ ReelCreator AI Loaded Successfully");
// ===============================
// Copy Hashtags
// ===============================

const copyHashtagBtn = document.getElementById("copyHashtagBtn");

if (copyHashtagBtn) {

  copyHashtagBtn.addEventListener("click", () => {

    const text = document.getElementById("hashtagOutput").innerText;

    navigator.clipboard.writeText(text);

    alert("✅ Hashtags Copied!");

  });

}
// ===============================
// Copy Usernames
// ===============================

const copyUsernameBtn = document.getElementById("copyUsernameBtn");

if (copyUsernameBtn) {

  copyUsernameBtn.addEventListener("click", () => {

    const text = document.getElementById("output").innerText;

    navigator.clipboard.writeText(text);

    alert("✅ Usernames Copied!");

  });

}
// ===============================
// Copy Bio
// ===============================

const copyBioBtn = document.getElementById("copyBioBtn");

if (copyBioBtn) {

  copyBioBtn.addEventListener("click", () => {

    const text = document.getElementById("output").innerText;

    navigator.clipboard.writeText(text);

    alert("✅ Bio Copied!");

  });

}
// ===============================
// Copy Fonts
// ===============================

const copyFontBtn = document.getElementById("copyFontBtn");

if (copyFontBtn) {

  copyFontBtn.addEventListener("click", () => {

    const text = document.getElementById("fontOutput").innerText;

    navigator.clipboard.writeText(text);

    alert("✅ Fonts Copied!");

  });

}
// ===============================
// Color Picker
// ===============================

const colorPicker = document.getElementById("colorPicker");
const colorPreview = document.getElementById("colorPreview");
const colorCode = document.getElementById("colorCode");
const copyColorBtn = document.getElementById("copyColorBtn");

if (colorPicker) {

  colorPicker.addEventListener("input", () => {

    colorPreview.style.background = colorPicker.value;

    colorCode.textContent = colorPicker.value.toUpperCase();

  });

}

if (copyColorBtn) {

  copyColorBtn.addEventListener("click", () => {

    navigator.clipboard.writeText(colorPicker.value.toUpperCase());

    alert("✅ HEX Color Copied!");

  });

}
// ===============================
// Best Time Generator
// ===============================

const bestTimeBtn = document.getElementById("bestTimeBtn");

if (bestTimeBtn) {

  bestTimeBtn.addEventListener("click", () => {

    const platform = document.getElementById("platform").value;
    const day = document.getElementById("day").value;
    const output = document.getElementById("bestTimeOutput");

    output.innerHTML = `
      <h3>📅 Recommended Time</h3>

      <p><strong>Platform:</strong> ${platform}</p>
      <p><strong>Day:</strong> ${day}</p>

      <br>

      <p>🌅 Morning: 8:00 AM – 10:00 AM</p>
      <p>🌞 Afternoon: 12:00 PM – 2:00 PM</p>
      <p>🌙 Evening: 6:00 PM – 9:00 PM</p>

      <br>

      <h3>⭐ Best Time: 7:30 PM</h3>
    `;

  });

}
// ===============================
// Reel Script Generator
// ===============================

const scriptBtn = document.getElementById("scriptBtn");

if (scriptBtn) {

  scriptBtn.addEventListener("click", () => {

    const topic = document.getElementById("scriptTopic").value.trim();
    const mood = document.getElementById("scriptMood").value;
    const duration = document.getElementById("scriptDuration").value;
    const output = document.getElementById("scriptOutput");

    if (!topic) {
      output.innerHTML = "⚠️ Please enter a reel topic.";
      return;
    }

    output.innerHTML = `
      <h3>🎬 AI Reel Script</h3>

      <p><strong>📌 Topic:</strong> ${topic}</p>
      <p><strong>😊 Mood:</strong> ${mood}</p>
      <p><strong>⏱ Duration:</strong> ${duration}</p>

      <br>

      <p><strong>🎯 Hook:</strong><br>
      "Stop scrolling! This can change your mindset."</p>

      <br>

      <p><strong>📖 Script:</strong><br>
      Today we'll talk about <b>${topic}</b>.<br>
      Stay consistent, keep improving every day, and never give up.<br>
      Small daily actions create big results.</p>

      <br>

      <p><strong>🚀 Ending:</strong><br>
      Follow for more amazing content ❤️</p>
    `;

  });

}

// ===============================
// Copy Reel Script
// ===============================

const copyScriptBtn = document.getElementById("copyScriptBtn");

if (copyScriptBtn) {

  copyScriptBtn.addEventListener("click", () => {

    const text = document.getElementById("scriptOutput").innerText;

    navigator.clipboard.writeText(text);

    alert("✅ Reel Script Copied!");

  });

}
