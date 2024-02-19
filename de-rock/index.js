question = document.getElementById("question")
display =document.getElementById("display")


function changeInput(value) {
    question.innerHTML += value
    display.innerHTML = value
}
function clearAll() {
    question.innerHTML = ""
    working = ""
    display.innerHTML = ""
}

function backspace() {
    display.innerHTML = ""
    let spliced = question.innerHTML.slice(0, -1)
    question.innerHTML = spliced

    spliced = working.slice(0, -1)
    working = spliced
}

    function solution() {
    }

    function solution() {
        console.log(working)
        ans = eval(working). tostring()
        display.innerHTML = ans

    }





