const moodToggle = document.getElementById("moodToggle");
const emojiFace = document.getElementById("emojiFace");
const moodText = document.getElementById("moodText");

let isHappy = true;

moodToggle.addEventListener("change", () => {
  // Rotate emoji
  emojiFace.style.transform = "rotateY(180deg)";
  setTimeout(() => {
    emojiFace.textContent = isHappy ? "😢" : "🙂";
    emojiFace.style.transform = "rotateY(0deg)";
    isHappy = !isHappy;

    // Change text and bg
    moodText.textContent = isHappy ? "Feeling happy!" : "Feeling sad...";
    document.body.style.background = isHappy ? "#e0f7fa" : "#fce4ec";
  }, 300); // Wait for half rotation
});
