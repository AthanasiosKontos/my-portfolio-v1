document.addEventListener('DOMContentLoaded', function() {
    // Calculate the seconds since I started programming
    const startProgrammingDate = new Date('September 3, 2023 09:00:00').getTime();
    const updateProgrammingSeconds = () => {
        const now = new Date().getTime();
        const programmingSeconds = Math.floor((now - startProgrammingDate) / 1000);
        const secondsElement = document.getElementById('seconds-programming');
        if (secondsElement) {
            secondsElement.textContent = programmingSeconds.toLocaleString('en-US');
        }
    };
    
    // Update the programming seconds immediately and every second.
    updateProgrammingSeconds();
    setInterval(updateProgrammingSeconds, 1000);

    // Implement smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact form submission logic
    var contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Here you would normally handle the form submission, e.g. via AJAX
            alert('Thank you for your message!');
        });
    }
});
