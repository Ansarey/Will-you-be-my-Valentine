const messages = [
    "Are you sure, Saraa?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

// YES button click
function handleYesClick() {
    window.location.href = "yes_page.html"; // redirects to your yes page
}

// NO button click
function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    // Change NO button text
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Optional: make YES button slightly bigger for fun
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.05}px`;

    // Move NO button to a random position
    moveNoButton();
}

// Function to move NO button randomly
function moveNoButton() {
    const noButton = document.querySelector('.no-button');
    const maxX = window.innerWidth - noButton.offsetWidth - 20;
    const maxY = window.innerHeight - noButton.offsetHeight - 20;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
    noButton.style.transition = "all 0.3s ease"; // smooth movement
}

// Make NO button move when hovered too
document.querySelector('.no-button').addEventListener('mouseenter', moveNoButton);

// Optional: Heart animation (from your previous version)
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}
setInterval(createHeart, 400);
