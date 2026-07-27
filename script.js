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
// ===============================
// Viral Reel Ideas Generator
// ===============================

const ideaBtn = document.getElementById("ideaBtn");

if (ideaBtn) {

  ideaBtn.addEventListener("click", () => {

    const category = document.getElementById("ideaCategory").value;
    const mood = document.getElementById("ideaMood").value;
    const output = document.getElementById("ideaOutput");

    output.innerHTML = `
      <h3>💡 Viral Reel Ideas</h3>

      <p><strong>Category:</strong> ${category}</p>
      <p><strong>Mood:</strong> ${mood}</p>

      <br>

      <p>1️⃣ 5 mistakes people make in ${category}</p>
      <p>2️⃣ Before vs After in ${category}</p>
      <p>3️⃣ Things nobody tells you about ${category}</p>
      <p>4️⃣ My biggest lesson in ${category}</p>
      <p>5️⃣ Try this ${category} challenge today!</p>
    `;

  });

}

// ===============================
// Copy Viral Ideas
// ===============================

const copyIdeaBtn = document.getElementById("copyIdeaBtn");

if (copyIdeaBtn) {

  copyIdeaBtn.addEventListener("click", () => {

    const text = document.getElementById("ideaOutput").innerText;

    navigator.clipboard.writeText(text);

    alert("✅ Viral Ideas Copied!");

  });

}
// ===============================
// Viral Hooks Generator
// ===============================

const hookBtn = document.getElementById("hookBtn");

if (hookBtn) {

  hookBtn.addEventListener("click", () => {

    const topic = document.getElementById("hookTopic").value.trim();
    const style = document.getElementById("hookStyle").value;
    const output = document.getElementById("hookOutput");

    if (!topic) {
      output.innerHTML = "⚠️ Please enter a topic.";
      return;
    }

    output.innerHTML = `
      <h3>🔥 Viral Hooks</h3>

      <p><strong>Topic:</strong> ${topic}</p>
      <p><strong>Style:</strong> ${style}</p>

      <br>

      <p>🔥 Stop scrolling! You need to know this about ${topic}.</p>
      <p>😲 Nobody talks about this ${topic} secret...</p>
      <p>🚀 This one trick can change your ${topic} journey!</p>
      <p>💯 If you're serious about ${topic}, watch this till the end.</p>
      <p>⚡ I wish someone had told me this earlier about ${topic}.</p>
    `;

  });

}

// ===============================
// Copy Viral Hooks
// ===============================

const copyHookBtn = document.getElementById("copyHookBtn");

if (copyHookBtn) {

  copyHookBtn.addEventListener("click", () => {

    const text = document.getElementById("hookOutput").innerText;

    navigator.clipboard.writeText(text);

    alert("✅ Viral Hooks Copied!");

  });

}
// ===============================
// Comment Reply AI
// ===============================

const replyBtn = document.getElementById("replyBtn");

if (replyBtn) {

  replyBtn.addEventListener("click", () => {

    const comment = document.getElementById("commentInput").value.trim();
    const tone = document.getElementById("replyTone").value;
    const output = document.getElementById("replyOutput");

    if (!comment) {
      output.innerHTML = "⚠️ Please enter a comment.";
      return;
    }

    let reply = "";

    if (tone.includes("Friendly")) {
      reply = "😊 Thank you so much! I'm really glad you liked it. ❤️";
    } else if (tone.includes("Professional")) {
      reply = "Thank you for your valuable feedback. Your support means a lot!";
    } else if (tone.includes("Funny")) {
      reply = "😂 Haha! You just made my day. Thanks a lot!";
    } else if (tone.includes("Thank You")) {
      reply = "❤️ Thank you for your love and support. It truly means a lot!";
    } else {
      reply = "🚀 Thank you! Keep supporting and keep growing with us!";
    }

    output.innerHTML = `
      <h3>💬 AI Reply</h3>

      <p><strong>Comment:</strong> ${comment}</p>

      <br>

      <p>${reply}</p>
    `;

  });

}

// ===============================
// Copy Reply
// ===============================

const copyReplyBtn = document.getElementById("copyReplyBtn");

if (copyReplyBtn) {

  copyReplyBtn.addEventListener("click", () => {

    const text = document.getElementById("replyOutput").innerText;

    navigator.clipboard.writeText(text);

    alert("✅ Reply Copied!");

  });

}
// ===============================
// Content Planner
// ===============================

const plannerBtn = document.getElementById("plannerBtn");

if (plannerBtn) {

  plannerBtn.addEventListener("click", () => {

    const type = document.getElementById("contentType").value;
    const niche = document.getElementById("contentNiche").value;
    const days = document.getElementById("postingDays").value;
    const output = document.getElementById("plannerOutput");

    output.innerHTML = `
      <h3>📅 Weekly Content Plan</h3>

      <p><strong>Platform:</strong> ${type}</p>
      <p><strong>Niche:</strong> ${niche}</p>
      <p><strong>Posting:</strong> ${days}</p>

      <br>

      <p>📌 Monday - Educational Reel</p>
      <p>📌 Tuesday - Trending Topic</p>
      <p>📌 Wednesday - Behind The Scenes</p>
      <p>📌 Thursday - Tips & Tricks</p>
      <p>📌 Friday - Viral Challenge</p>
      <p>📌 Saturday - Q&A / Story</p>
      <p>📌 Sunday - Weekly Recap</p>
    `;

  });

}

// ===============================
// Copy Planner
// ===============================

const copyPlannerBtn = document.getElementById("copyPlannerBtn");

if (copyPlannerBtn) {

  copyPlannerBtn.addEventListener("click", () => {

    const text = document.getElementById("plannerOutput").innerText;

    navigator.clipboard.writeText(text);

    alert("✅ Content Plan Copied!");

  });

}
// ===============================
// Trending Songs Finder
// ===============================

const songBtn = document.getElementById("songBtn");

if (songBtn) {

  songBtn.addEventListener("click", () => {

    const platform = document.getElementById("songPlatform").value;
    const category = document.getElementById("songCategory").value;
    const output = document.getElementById("songOutput");

    output.innerHTML = `
      <h3>🎵 Trending Songs</h3>

      <p><strong>Platform:</strong> ${platform}</p>
      <p><strong>Category:</strong> ${category}</p>

      <br>

      <p>🎶 Golden Hour</p>
      <p>🎶 Heat Waves</p>
      <p>🎶 Until I Found You</p>
      <p>🎶 Perfect</p>
      <p>🎶 Night Changes</p>

      <br>

      <p><strong>💡 Tip:</strong> Check Instagram's Trending Audio section regularly for the latest viral sounds.</p>
    `;

  });

}

// ===============================
// Copy Song List
// ===============================

const copySongBtn = document.getElementById("copySongBtn");

if (copySongBtn) {

  copySongBtn.addEventListener("click", () => {

    const text = document.getElementById("songOutput").innerText;

    navigator.clipboard.writeText(text);

    alert("✅ Song List Copied!");

  });

}
// ===============================
// Thumbnail Title Generator
// ===============================

const thumbnailBtn = document.getElementById("thumbnailBtn");

if (thumbnailBtn) {

  thumbnailBtn.addEventListener("click", () => {

    const topic = document.getElementById("videoTopic").value.trim();
    const style = document.getElementById("titleStyle").value;
    const output = document.getElementById("thumbnailOutput");

    if (!topic) {
      output.innerHTML = "⚠️ Please enter a video topic.";
      return;
    }

    output.innerHTML = `
      <h3>🖼️ Thumbnail Title Ideas</h3>

      <p><strong>Topic:</strong> ${topic}</p>
      <p><strong>Style:</strong> ${style}</p>

      <br>

      <p>🔥 The Biggest ${topic} Mistake!</p>
      <p>😱 Nobody Told You This About ${topic}</p>
      <p>🚀 ${topic}: 5 Secret Tips</p>
      <p>⚡ How I Mastered ${topic}</p>
      <p>💯 The Truth About ${topic}</p>

    `;

  });

}

// ===============================
// Copy Thumbnail Titles
// ===============================

const copyThumbnailBtn = document.getElementById("copyThumbnailBtn");

if (copyThumbnailBtn) {

  copyThumbnailBtn.addEventListener("click", () => {

    const text = document.getElementById("thumbnailOutput").innerText;

    navigator.clipboard.writeText(text);

    alert("✅ Thumbnail Titles Copied!");

  });

}
// ===============================
// YouTube Title Generator
// ===============================

const youtubeBtn = document.getElementById("youtubeBtn");

if (youtubeBtn) {

  youtubeBtn.addEventListener("click", () => {

    const topic = document.getElementById("youtubeTopic").value.trim();
    const style = document.getElementById("youtubeStyle").value;
    const output = document.getElementById("youtubeOutput");

    if (!topic) {
      output.innerHTML = "⚠️ Please enter a video topic.";
      return;
    }

    output.innerHTML = `
      <h3>📝 YouTube Title Ideas</h3>

      <p><strong>Topic:</strong> ${topic}</p>
      <p><strong>Style:</strong> ${style}</p>

      <br>

      <p>🔥 10 ${topic} Secrets You Must Know!</p>
      <p>😱 I Tried ${topic} for 30 Days – Here's What Happened!</p>
      <p>🚀 The Ultimate ${topic} Guide (2026)</p>
      <p>💯 How to Master ${topic} Like a Pro</p>
      <p>⚡ Biggest ${topic} Mistakes to Avoid</p>

    `;

  });

}

// ===============================
// Copy YouTube Titles
// ===============================

const copyYoutubeBtn = document.getElementById("copyYoutubeBtn");

if (copyYoutubeBtn) {

  copyYoutubeBtn.addEventListener("click", () => {

    const text = document.getElementById("youtubeOutput").innerText;

    navigator.clipboard.writeText(text);

    alert("✅ YouTube Titles Copied!");

  });

}
// ===============================
// CTA Generator
// ===============================

const ctaBtn = document.getElementById("ctaBtn");

if (ctaBtn) {

  ctaBtn.addEventListener("click", () => {

    const platform = document.getElementById("ctaPlatform").value;
    const goal = document.getElementById("ctaGoal").value;
    const output = document.getElementById("ctaOutput");

    let ctas = [];

    switch (goal) {

      case "Get More Followers":
        ctas = [
          "🔥 Follow for more amazing content!",
          "❤️ Follow now and don't miss the next post!",
          "🚀 Join our community by following!"
        ];
        break;

      case "Increase Likes":
        ctas = [
          "👍 Like this post if it helped you!",
          "❤️ Double tap if you agree!",
          "🔥 Hit the Like button now!"
        ];
        break;

      case "Get More Comments":
        ctas = [
          "💬 Share your opinion in the comments!",
          "👇 Comment your favorite tip!",
          "🤔 What do you think? Tell me below!"
        ];
        break;

      case "Increase Shares":
        ctas = [
          "📤 Share this with your friends!",
          "🚀 Send this to someone who needs it!",
          "❤️ Share if you found this useful!"
        ];
        break;

      case "Subscribe Channel":
        ctas = [
          "🔔 Subscribe for more amazing videos!",
          "🎥 Don't forget to subscribe!",
          "🚀 Join our YouTube family!"
        ];
        break;

      case "Save Post":
        ctas = [
          "💾 Save this post for later!",
          "📌 Bookmark this so you don't forget!",
          "⭐ Save this reel now!"
        ];
        break;
    }

    output.innerHTML = `
      <h3>📢 CTA Suggestions</h3>

      <p><strong>Platform:</strong> ${platform}</p>
      <p><strong>Goal:</strong> ${goal}</p>

      <br>

      ${ctas.map(item => `<p>${item}</p>`).join("")}
    `;

  });

}

// ===============================
// Copy CTA
// ===============================

const copyCtaBtn = document.getElementById("copyCtaBtn");

if (copyCtaBtn) {

  copyCtaBtn.addEventListener("click", () => {

    const text = document.getElementById("ctaOutput").innerText;

    navigator.clipboard.writeText(text);

    alert("✅ CTA Copied!");

  });

}
// ===============================
// Emoji Suggestion Generator
// ===============================

const emojiBtn = document.getElementById("emojiBtn");

if (emojiBtn) {

  emojiBtn.addEventListener("click", () => {

    const topic = document.getElementById("emojiTopic").value.trim();
    const mood = document.getElementById("emojiMood").value;
    const output = document.getElementById("emojiOutput");

    if (!topic) {
      output.innerHTML = "⚠️ Please enter a caption or topic.";
      return;
    }

    let emojis = "";

    if (mood.includes("Happy")) {
      emojis = "😊 😄 🎉 🌟 💛 ✨";
    } else if (mood.includes("Love")) {
      emojis = "❤️ 💕 😍 🥰 💖 🌹";
    } else if (mood.includes("Motivational")) {
      emojis = "🚀 💯 🔥 ⭐ 💪 🎯";
    } else if (mood.includes("Sad")) {
      emojis = "🥺 💔 🌧️ 😔 🖤";
    } else if (mood.includes("Funny")) {
      emojis = "😂 🤣 😆 🙌 😜";
    } else if (mood.includes("Travel")) {
      emojis = "✈️ 🌍 🏝️ 📸 🧳";
    } else if (mood.includes("Gaming")) {
      emojis = "🎮 🕹️ 🔥 🏆 👾";
    } else {
      emojis = "🎬 🎥 🍿 ✨ 📽️";
    }

    output.innerHTML = `
      <h3>😀 Suggested Emojis</h3>

      <p><strong>Topic:</strong> ${topic}</p>
      <p><strong>Mood:</strong> ${mood}</p>

      <br>

      <div style="font-size:32px;line-height:2;">
        ${emojis}
      </div>
    `;

  });

}

// ===============================
// Copy Emojis
// ===============================

const copyEmojiBtn = document.getElementById("copyEmojiBtn");

if (copyEmojiBtn) {

  copyEmojiBtn.addEventListener("click", () => {

    const text = document.getElementById("emojiOutput").innerText;

    navigator.clipboard.writeText(text);

    alert("✅ Emojis Copied!");

  });

}
// ===============================
// Caption Translator
// ===============================

const translateBtn = document.getElementById("translateBtn");

if (translateBtn) {

  translateBtn.addEventListener("click", () => {

    const input = document.getElementById("captionInput").value.trim();
    const direction = document.getElementById("translateDirection").value;
    const output = document.getElementById("translationOutput");

    if (!input) {
      output.innerHTML = "⚠️ Please enter a caption.";
      return;
    }

    let translated = "";

    if (direction === "Hindi → English") {

      translated =
`[Demo Translation]

"${input}"

This is a translated English version of your caption.
(Real AI Translation will be available after AI integration.)`;

    } else {

      translated =
`[डेमो अनुवाद]

"${input}"

यह आपके कैप्शन का हिंदी संस्करण है।
(रीयल AI Translation बाद में जोड़ा जाएगा।)`;

    }

    output.innerHTML = `
      <h3>🌍 Translation Result</h3>

      <pre style="white-space:pre-wrap;font-family:inherit;">
${translated}
      </pre>
    `;

  });

}

// ===============================
// Copy Translation
// ===============================

const copyTranslateBtn = document.getElementById("copyTranslateBtn");

if (copyTranslateBtn) {

  copyTranslateBtn.addEventListener("click", () => {

    const text = document.getElementById("translationOutput").innerText;

    navigator.clipboard.writeText(text);

    alert("✅ Translation Copied!");

  });

}
// ===============================
// Viral Score Checker
// ===============================

const viralBtn = document.getElementById("viralBtn");

if (viralBtn) {

  viralBtn.addEventListener("click", () => {

    const hook = document.getElementById("viralHook").value.trim();
    const caption = document.getElementById("viralCaption").value.trim();
    const hashtags = document.getElementById("viralHashtags").value.trim();
    const output = document.getElementById("viralOutput");

    if (!hook || !caption || !hashtags) {
      output.innerHTML = "⚠️ Please fill all fields.";
      return;
    }

    let score = 50;

    if (hook.length > 20) score += 15;
    if (caption.length > 50) score += 15;

    const hashtagCount = hashtags.split("#").filter(tag => tag.trim() !== "").length;

    if (hashtagCount >= 5) score += 20;

    if (score > 100) score = 100;

    const hookRating = Math.min(10, Math.floor(hook.length / 8));
    const captionRating = Math.min(10, Math.floor(caption.length / 15));
    const hashtagRating = Math.min(10, hashtagCount);

    let suggestion = "🔥 Great! Your content looks strong.";

    if (score < 70) {
      suggestion = "💡 Improve your hook and use more relevant hashtags.";
    } else if (score < 90) {
      suggestion = "🚀 Good! A stronger CTA can improve performance.";
    }

    output.innerHTML = `
      <h3>📈 Viral Report</h3>

      <h2>${score}/100</h2>

      <p>🎣 Hook Rating: ${hookRating}/10</p>
      <p>📝 Caption Rating: ${captionRating}/10</p>
      <p>🏷️ Hashtag Rating: ${hashtagRating}/10</p>

      <br>

      <p><strong>Suggestion:</strong></p>
      <p>${suggestion}</p>
    `;

  });

}

// ===============================
// Copy Viral Report
// ===============================

const copyViralBtn = document.getElementById("copyViralBtn");

if (copyViralBtn) {

  copyViralBtn.addEventListener("click", () => {

    const text = document.getElementById("viralOutput").innerText;

    navigator.clipboard.writeText(text);

    alert("✅ Viral Report Copied!");

  });

}
// ===============================
// Engagement Calculator
// ===============================

const engagementBtn = document.getElementById("engagementBtn");

if (engagementBtn) {

  engagementBtn.addEventListener("click", () => {

    const likes = Number(document.getElementById("likes").value) || 0;
    const comments = Number(document.getElementById("comments").value) || 0;
    const shares = Number(document.getElementById("shares").value) || 0;
    const followers = Number(document.getElementById("followers").value) || 0;

    const output = document.getElementById("engagementOutput");

    if (followers <= 0) {
      output.innerHTML = "⚠️ Please enter a valid follower count.";
      return;
    }

    const totalEngagement = likes + comments + shares;
    const rate = ((totalEngagement / followers) * 100).toFixed(2);

    let rating = "";
    let tip = "";

    if (rate < 3) {
      rating = "🔴 Needs Improvement";
      tip = "Use stronger hooks, better hashtags and post consistently.";
    } else if (rate < 6) {
      rating = "🟡 Good";
      tip = "Good performance! Try improving your CTA to boost engagement.";
    } else {
      rating = "🟢 Excellent";
      tip = "Amazing engagement! Keep posting consistently.";
    }

    output.innerHTML = `
      <h3>📊 Engagement Report</h3>

      <p><strong>Total Engagement:</strong> ${totalEngagement}</p>
      <p><strong>Engagement Rate:</strong> ${rate}%</p>
      <p><strong>Performance:</strong> ${rating}</p>

      <br>

      <p><strong>💡 Tip:</strong></p>
      <p>${tip}</p>
    `;

  });

}

// ===============================
// Copy Engagement Result
// ===============================

const copyEngagementBtn = document.getElementById("copyEngagementBtn");

if (copyEngagementBtn) {

  copyEngagementBtn.addEventListener("click", () => {

    const text = document.getElementById("engagementOutput").innerText;

    navigator.clipboard.writeText(text);

    alert("✅ Engagement Report Copied!");

  });

}
// ===============================
// Live Tool Search
// ===============================

const toolSearch = document.getElementById("toolSearch");

if (toolSearch) {

toolSearch.addEventListener("keyup", function () {

const value = this.value.toLowerCase();

const cards = document.querySelectorAll(".tool-card");

cards.forEach(card => {

const text = card.innerText.toLowerCase();

if (text.includes(value)) {

card.style.display = "block";

} else {

card.style.display = "none";

}

});

});

}
