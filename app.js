let x = 6;

document.getElementById("interval-start").addEventListener("click", () => timeOut());

function timeOut() {
    setTimeout(function () {
        document.getElementById("interval-div").innerHTML = x;
        x+=6;
        if(x <= 60) {
            timeOut();
        }
    }, 6000);
}