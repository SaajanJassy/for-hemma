document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const passwordInput = document.getElementById('password-input');
    const errorMsg = document.getElementById('password-error');
    const passwordSection = document.getElementById('password-section');
    const proposalSection = document.getElementById('proposal-section');

    function verify() {
        if (passwordInput.value.toLowerCase() === "bubba") {
            passwordSection.classList.add('hidden');
            proposalSection.classList.remove('hidden');
        } else {
            errorMsg.classList.remove('hidden');
        }
    }

    // Click handler
    loginBtn.addEventListener('click', verify);

    // Keyboard "Enter" handler
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') verify();
    });

    // Moving Button Logic
    const noBtn = document.getElementById('no-btn');
    noBtn.addEventListener('mouseover', () => {
        const padding = 100;
        const maxX = window.innerWidth - noBtn.offsetWidth - padding;
        const maxY = window.innerHeight - noBtn.offsetHeight - padding;
        
        const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
        const randomY = Math.max(padding, Math.floor(Math.random() * maxY));
        
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
    });
});

// Keep this outside the DOMContentLoaded so the 'Yes' button can see it
function showMemories() {
    document.getElementById('proposal-section').classList.add('hidden');
    document.getElementById('memories-section').classList.remove('hidden');

    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ffffff', '#ffb3c1']
    });
}
