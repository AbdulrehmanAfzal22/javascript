let q1 = document.getElementById("question1")
let q3 = document.getElementById("question2")
let q2 = document.getElementById("question3")

q1.addEventListener("click",function () {
    document.getElementById("answer1").removeAttribute("id")
})
q2.addEventListener("click",function () {
    document.getElementById("answer2").removeAttribute("id")
})
q3.addEventListener("click",function () {
    document.getElementById("answer3").removeAttribute("id")
})