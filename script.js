// Password Logic
function checkPassword() {
    const input = document.getElementById('password-input').value;
    const errorMsg = document.getElementById('password-error');
    const passwordSection = document.getElementById('password-section');
    const proposalSection = document.getElementById('proposal-section');

    if (input.toLowerCase() === "bubba") {
        passwordSection.classList.add('hidden');
        proposalSection.classList.remove('hidden');
    } else {
        errorMsg.classList.remove('hidden');
    }
}

// Moving Button Logic
const noBtn = document.getElementById('no-btn');
noBtn.addEventListener('mouseover', () => {
    // Calculate random position within the viewport padding
    const padding = 100;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;
    
    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));
    
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});

// Final Success Logic
function showMemories() {
    const proposalSection = document.getElementById('proposal-section');
    const memoriesSection = document.getElementById('memories-section');

    proposalSection.classList.add('hidden');
    memoriesSection.classList.remove('hidden');

    // Confetti Burst
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ffffff', '#ffb3c1']
    });
}
