document.getElementById("eventBtn").addEventListener(
    "click",

    function manipulateH1() {
        if (document.getElementById("h1Text").innerHTML === "Hello World.") {
            document.getElementById("h1Text").style.color = "red";
            document.getElementById("h1Text").innerHTML = "Goodbye World."
    }
    else {
        document.getElementById("h1Text").style.color = "black";
        document.getElementById("h1Text").innerHTML = "Hello World."}
    }

);