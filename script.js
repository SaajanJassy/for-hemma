const noBtn = document.getElementById('no-btn');
const proposalSection = document.getElementById('proposal-section');
const memoriesSection = document.getElementById('memories-section');

// The "No-Escape" Logic
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

function showMemories() {
    proposalSection.classList.add('hidden');
    memoriesSection.classList.remove('hidden');

    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ffffff', '#ffb3c1']
    });
}
