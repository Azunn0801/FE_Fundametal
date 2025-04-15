let subject = []

function addSubject()    {
    let input = document.getElementById('input')
    if(input.value === "")  {
        alert("tên môn học không được để trống!")
    }
    else {
        subject.push(input.value)
        input.value = ""
        renderSubject()
    }
}

function renderSubject() {
    let ol = document.getElementById('listSubject')
    ol.innerHTML = ""
    for(let i = 0; i < subject.length; i++) {
        let li = document.createElement('li')
        li.innerText = subject[i]
        ol.appendChild(li)
    }
}