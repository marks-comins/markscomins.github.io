// Effetto scroll per l'header (opzionale)
window.addEventListener('scroll', function() {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.querySelector('.used');
    const dropdown = document.querySelector('.dropdown-content');

    // 1. Gestione click sul testo "USATO"
    trigger.addEventListener('click', (event) => {
        event.preventDefault(); // Impedisce al link di ricaricare la pagina
        dropdown.classList.toggle('show');
    });

    // 2. Chiudi se si clicca fuori dal menu
    document.addEventListener('click', (event) => {
        // Se il click NON è sul trigger E NON è dentro il dropdown
        if (!trigger.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.querySelector('.newest');
    const dropdown = document.querySelector('.dropydown-content');

    // 1. Gestione click sul testo "USATO"
    trigger.addEventListener('click', (event) => {
        event.preventDefault(); // Impedisce al link di ricaricare la pagina
        dropdown.classList.toggle('show');
    });

    // 2. Chiudi se si clicca fuori dal menu
    document.addEventListener('click', (event) => {
        // Se il click NON è sul trigger E NON è dentro il dropdown
        if (!trigger.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });
});