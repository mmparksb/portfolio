const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -20px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


document.querySelectorAll('.toggle-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        const detail = btn.nextElementSibling;
        detail.classList.toggle('hidden');
        btn.textContent = detail.classList.contains('hidden') ? '상세 보기' : '닫기';
    });
});
