const box = document.getElementById('box')

function checkemail()    {
    let input = document.getElementById('input')
    let result = ``
    if(input.value === "")  {
        result = "Email không được để trống"
    }
    else if(input.value.includes("@") && (input.value.includes(".com") || input.value.includes(".vn"))) {
        result = "Email hợp lệ"
    }
    else    {
        result = "Email không hợp lệ"
    }

    box.innerText = result
}
