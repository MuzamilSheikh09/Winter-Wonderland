const canvas = document.getElementById("snowfall");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create Snowflakes
const snowflakes = [];
function createSnowflakes() {
    for (let i = 0; i < 100; i++) {
        snowflakes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 4 + 1,
            speed: Math.random() * 2 + 0.5,
        });
    }
}

// Draw Snowflakes
function drawSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.beginPath();

    snowflakes.forEach((flake) => {
        ctx.moveTo(flake.x, flake.y);
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
    });

    ctx.fill();
}

// Update Snowflakes
function updateSnowflakes() {
    snowflakes.forEach((flake) => {
        flake.y += flake.speed;

        // Reset snowflake position when it moves off-screen
        if (flake.y > canvas.height) {
            flake.y = 0;
            flake.x = Math.random() * canvas.width;
        }
    });
}

// Animate Snowfall
function animateSnowfall() {
    drawSnowflakes();
    updateSnowflakes();
    requestAnimationFrame(animateSnowfall);
}

// Initialize
createSnowflakes();
animateSnowfall();
