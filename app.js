function clickHandler(color) {
    // document.body.style.backgroundColor = `${color}`;

    return function () {
        document.body.style.backgroundColor = `${color}`;
        if (color === "blue") {
            document.querySelector("h1").innerText = "BLUE";
            document.querySelector("h1").style.color = "#fff";
            document.querySelector("h1").style.marginLeft = "20px";
            document.querySelector("#blue").style.color = "blue";
        } else {
            document.querySelector("h1").innerText = "MAROON";
            document.querySelector("h1").style.color = "#fff";
            document.querySelector("#maroon").style.color = "maroon";
        }
    }
}

document.querySelector("#blue").onclick = clickHandler("blue");
document.querySelector("#maroon").onclick = clickHandler("maroon");