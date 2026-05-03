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

<script>
let timeLeft = 10;
const timerElement = document.getElementById("timer");

const countdown = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(countdown);
        window.location.href = "nextpage.html"; // change this to your page
    }
}, 1000);
</script>

if (timeLeft <= 3) {
    timerElement.style.color = "red";
}
