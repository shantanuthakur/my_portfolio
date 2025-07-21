document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
        });
    }

    // --- Typing Effect ---
    const typingTextElement = document.getElementById('typing-text');
    if (typingTextElement) {
        const textToType = "Aspiring Machine Learning / Data Analyst";
        let charIndex = 0;
        function type() {
            if (charIndex < textToType.length) {
                typingTextElement.textContent += textToType.charAt(charIndex++);
                setTimeout(type, 100);
            }
        }
        setTimeout(type, 500);
    }
    
    // --- Scroll Reveal Animation ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
