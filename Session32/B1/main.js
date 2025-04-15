function changeColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}

const btn = document.getElementById('toggle')

btn.addEventListener('click', function () {
    document.querySelector('.background').style.backgroundColor = changeColor()
})
