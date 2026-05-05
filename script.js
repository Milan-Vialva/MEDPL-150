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
