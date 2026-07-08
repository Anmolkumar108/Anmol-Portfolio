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

    const draw = () => {
        ctx.clearRect(0, 0, width, height);

        particles.forEach((particle, index) => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < 0 || particle.x > width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > height) particle.vy *= -1;

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(125, 211, 252, ${particle.alpha})`;
            ctx.fill();

            for (let j = index + 1; j < particles.length; j += 1) {
                const other = particles[j];
                const dx = particle.x - other.x;
                const dy = particle.y - other.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 140) {
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(other.x, other.y);
                    ctx.strokeStyle = `rgba(125, 211, 252, ${0.08 * (1 - distance / 140)})`;
                    ctx.stroke();
                }
            }
        });

