const textEl = document.querySelector(".text")
const hideBtn = document.querySelector(".hide")
const showBtn = document.querySelector(".show")

hideBtn.onclick = () => {
    textEl.style.display = "none"
}

showBtn.onclick = () => {
    textEl.style.display = "block"
}