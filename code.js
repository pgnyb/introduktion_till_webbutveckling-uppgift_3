document.getElementById("eventBtn").addEventListener("click", function () {
    const h1 = document.getElementById("h1Text");

    if (h1.innerHTML === "Hello World.") {
        h1.innerHTML = "Goodbye World.";
        h1.classList.add("goodbye");
    } else {
        h1.innerHTML = "Hello World.";
        h1.classList.remove("goodbye");
    }
});