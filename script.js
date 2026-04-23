document.addEventListener("mousemove", function(e) {
    const trail = document.createElement("div");
    trail.className = "trail";

    trail.style.left = e.pageX + "px";
    trail.style.top = e.pageY + "px";

    document.body.appendChild(trail);

    // Remove after animation ends
    setTimeout(() => {
        trail.remove();
    }, 500);
});
