const rippleAnimation = document.querySelectorAll(".ripple");
rippleAnimation.forEach((button) => {
    button.addEventListener("click", function (e) {
        const x = e.clientX;
        const y = e.clientY;

        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const btnCircle = document.createElement("span");

        btnCircle.classList.add("btn-circles");
        btnCircle.style.top = yInside + "px";
        btnCircle.style.left = xInside + "px";

        this.appendChild(btnCircle);
        setTimeout(() => btnCircle.remove(), 500);
    });
});