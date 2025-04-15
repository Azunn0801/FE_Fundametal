let counter = 0

const btn = document.getElementById('toggle')
const counterText = document.getElementById('counter');

btn.addEventListener('click', function () {
    counter++
    counterText.innerText = `Số lần bấm: ${counter}`;
})