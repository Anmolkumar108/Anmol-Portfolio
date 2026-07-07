document.addEventListener("DOMContentLoaded", () => {

    if (window.AOS) {
        AOS.init({
            duration: 900,
            once: true,
            offset: 90
        });
    }

    // Step 2 ke mutabik replace kiya gya block
    const tiltElements = document.querySelectorAll(".profile-card, .about-card, .project-card");

    if (tiltElements.length && window.VanillaTilt) {
        VanillaTilt.init(tiltElements, {
            max: 10,
            speed: 400,
            glare: true,
            "max-glare": 0.20,
            scale: 1.02
        });
    }

});