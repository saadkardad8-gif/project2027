function playPro() {
    let audio = document.getElementById("sound");
    audio.currentTime = 0;
    audio.play();

    let text = document.getElementById("text");

    text.style.opacity = 0;

    setTimeout(() => {
        text.innerText = "🔥 SYSTEM ACTIVATED 🔥";
        text.style.opacity = 1;
    }, 300);

    // vibration effect (optional)
    document.body.style.animation = "shake 0.3s";

    setTimeout(() => {
        document.body.style.animation = "";
    }, 300);
}