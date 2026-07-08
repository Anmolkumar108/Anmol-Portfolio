const heroBackgrounds = document.querySelectorAll('.hero-background');

heroBackgrounds.forEach(heroBackground => {
    const canvas = document.createElement('canvas');
    canvas.className = 'hero-particles';
    heroBackground.appendChild(canvas);

    