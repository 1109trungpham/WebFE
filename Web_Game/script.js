document.addEventListener('DOMContentLoaded', () => {
    const car1 = document.getElementById('car1');
    const car2 = document.getElementById('car2');
    let isMovingLeft1 = false;
    let isMovingRight1 = false;

    let isMovingLeft2 = false;
    let isMovingRight2 = false;

    document.addEventListener('keydown', (e) => {
        // Xe 1
        if (e.key === 'a') {
            isMovingLeft1 = true;
        }

        if (e.key === 'd') {
            isMovingRight1 = true;
        }

        // Xe 2
        if (e.key === 'ArrowLeft') {
            isMovingLeft2 = true;
        }

        if (e.key === 'ArrowRight') {
            isMovingRight2 = true;
        }
    });

    document.addEventListener('keyup', (e) => {
        // Xe 1
        if (e.key === 'a') {
            isMovingLeft1 = false;
        }

        if (e.key === 'd') {
            isMovingRight1 = false;
        }

        // Xe 2
        if (e.key === 'ArrowLeft') {
            isMovingLeft2 = false;
        }

        if (e.key === 'ArrowRight') {
            isMovingRight2 = false;
        }
    });

    function moveCar(car, isMovingLeft, isMovingRight) {
        const carPosition = parseInt(window.getComputedStyle(car).left);

        if (isMovingLeft && carPosition > 150) {
            car.style.left = `${carPosition - 20}px`;
        }

        if (isMovingRight && carPosition < 1300) {
            car.style.left = `${carPosition + 20}px`;
        }
    }

    function gameLoop() {
        moveCar(car1, isMovingLeft1, isMovingRight1);
        moveCar(car2, isMovingLeft2, isMovingRight2);
        requestAnimationFrame(gameLoop);
    }

    gameLoop();
});
