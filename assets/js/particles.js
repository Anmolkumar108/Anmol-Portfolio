const heroBackgrounds = document.querySelectorAll('.hero-background');

heroBackgrounds.forEach(heroBackground => {
    const canvas = document.createElement('canvas');
    canvas.className = 'hero-particles';
    heroBackground.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let particles = [];
    let animationFrameId = null;

    const resizeCanvas = () => {
        const rect = heroBackground.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
        canvas.width = width * window.devicePixelRatio;
        canvas.height = height * window.devicePixelRatio;
        ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);

        const count = Math.min(70, Math.max(28, Math.floor((width + height) / 22)));
        particles = Array.from({ length: count }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.7 + 0.5,
            vx: (Math.random() - 0.5) * 0.25,
            vy: (Math.random() - 0.5) * 0.25,
            alpha: Math.random() * 0.6 + 0.2
        }));
    };

    