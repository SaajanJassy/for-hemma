const noBtn = document.getElementById('no-btn');
const proposalSection = document.getElementById('proposal-section');
const memoriesSection = document.getElementById('memories-section');

// The "Moving Away" Logic
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

function showMemories() {
    proposalSection.classList.add('hidden');
    memoriesSection.classList.remove('hidden');
    // Optional: Add confetti logic here!
}
