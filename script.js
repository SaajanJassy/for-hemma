document.addEventListener('DOMContentLoaded', () => {
    // 1. PASSWORD & SECTION LOGIC
    const loginBtn = document.getElementById('login-btn');
    const passwordInput = document.getElementById('password-input');
    const errorMsg = document.getElementById('password-error');
    const passwordSection = document.getElementById('password-section');
    const proposalSection = document.getElementById('proposal-section');

    function verify() {
        if (passwordInput.value.toLowerCase().trim() === "bubba") {
            passwordSection.classList.add('hidden');
            proposalSection.classList.remove('hidden');
            window.scrollTo(0, 0); // Reset scroll for Hemma
        } else {
            errorMsg.classList.remove('hidden');
        }
    }

    if (loginBtn) loginBtn.addEventListener('click', verify);
    if (passwordInput) {
        passwordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') verify();
        });
    }

    // 2. SMOOTH GLIDING "NO" BUTTON
    const noBtn = document.getElementById('no-btn');
    let isMoving = false;

    if (noBtn) {
        noBtn.addEventListener('mouseover', () => {
            if (isMoving) return;
            isMoving = true;

            const padding = 100;
            // Use clientWidth/Height to keep it inside the visible window
            const maxX = window.innerWidth - noBtn.offsetWidth - padding;
            const maxY = window.innerHeight - noBtn.offsetHeight - padding;
            
            const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
            const randomY = Math.max(padding, Math.floor(Math.random() * maxY));
            
            noBtn.style.left = randomX + 'px';
            noBtn.style.top = randomY + 'px';

            setTimeout(() => { isMoving = false; }, 600);
        });
    }
});

// 3. SHOW MEMORIES (YES BUTTON)
function showMemories() {
    document.getElementById('proposal-section').classList.add('hidden');
    document.getElementById('memories-section').classList.remove('hidden');
    window.scrollTo(0, 0);

    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ffffff', '#ffb3c1']
    });
}

// 4. LIGHTBOX LOGIC
let currentIndex = 0;
// We fetch the images list ONLY when needed to ensure they are found
function getImages() { return document.querySelectorAll('.memory-card'); }

function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    document.getElementById('lightbox').style.display = 'flex';
}

function updateLightbox() {
    const images = getImages();
    const mainImg = document.getElementById('main-img');
    const prevImg = document.getElementById('prev-img');
    const nextImg = document.getElementById('next-img');

    mainImg.src = images[currentIndex].src;
    
    let prevIdx = (currentIndex - 1 + images.length) % images.length;
    let nextIdx = (currentIndex + 1) % images.length;
    
    prevImg.src = images[prevIdx].src;
    nextImg.src = images[nextIdx].src;
}

function changeImage(step, event) {
    if (event) event.stopPropagation();
    const images = getImages();
    currentIndex = (currentIndex + step + images.length) % images.length;
    updateLightbox();
}

function closeLightbox(event) {
    const lightbox = document.getElementById('lightbox');
    if (event.target === lightbox || event.target.id === 'lightbox') {
        lightbox.style.display = 'none';
    }
}

// Keyboard Support
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox && lightbox.style.display === 'flex') {
        if (e.key === "ArrowLeft") changeImage(-1);
        if (e.key === "ArrowRight") changeImage(1);
        if (e.key === "Escape") lightbox.style.display = 'none';
    }
});
