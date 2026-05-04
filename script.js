const maxTrail = 25;        // limit number of dots
const trails = [];
let lastSpawn = 0;
const spawnDelay = 20;      // ms between dots

document.addEventListener("mousemove", (e) => {
    const now = Date.now();

    // throttle how often dots spawn
    if (now - lastSpawn < spawnDelay) return;
    lastSpawn = now;

    const trail = document.createElement("div");
    trail.className = "trail";

    trail.style.left = e.pageX + "px";
    trail.style.top = e.pageY + "px";

    document.body.appendChild(trail);
    trails.push(trail);

    // remove oldest if too many
    if (trails.length > maxTrail) {
        const old = trails.shift();
        old.remove();
    }

    // auto remove after animation
    setTimeout(() => {
        trail.remove();
        const index = trails.indexOf(trail);
        if (index > -1) trails.splice(index, 1);
    }, 500);
});

if (timeLeft <= 3) {
    timerElement.style.color = "red";
}

<script>
const text = document.getElementById("riddleText");
const content = text.textContent;
text.textContent = "";

[...content].forEach((letter, i) => {
    const span = document.createElement("span");

    // Preserve spaces properly
    span.innerHTML = (letter === " ") ? "&nbsp;" : letter;

    span.style.animationDelay = (i * 0.04) + "s";

    text.appendChild(span);
});
</script>

<script>
const img = document.getElementById("floatFollow");

let mouseX = 0;
let mouseY = 0;

let currentX = window.innerWidth / 2;
let currentY = window.innerHeight / 2;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    // Smooth follow (ease effect)
    currentX += (mouseX - currentX) * 0.05;
    currentY += (mouseY - currentY) * 0.05;

    img.style.left = currentX + "px";
    img.style.top = currentY + "px";

    requestAnimationFrame(animate);
}

animate();
</script>

<script>
window.addEventListener("load", () => {
    document.body.classList.add("fade-in");
});
</script>

        <script>
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const href = this.href;

        document.body.style.opacity = 0;

        setTimeout(() => {
            window.location.href = href;
        }, 800); // match CSS duration
    });
});
</script>
