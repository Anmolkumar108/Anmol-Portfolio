const cursor = document.querySelector('.cursor');

if (cursor && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    window.addEventListener('mousemove', (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
        cursor.style.opacity = '1';
    });

    window.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });

    const animateCursor = () => {
        cursorX += (mouseX - cursorX) * 0.16;
        cursorY += (mouseY - cursorY) * 0.16;
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
        window.requestAnimationFrame(animateCursor);
    };

    animateCursor();
}
