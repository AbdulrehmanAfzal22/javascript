let input = document.getElementById("myInput")
let counter = document.getElementById("counter")
let maxlimit = 100
input.addEventListener("input", function () {
    let used = input.value.trim()
    let remaining = maxlimit  - used
counter.textContent = remaining + " characters remaining";
    if (remaining<0) {
        counter.style.color = "red"

    }
    else{
        counter.style.color = "black"
    }
})