function clearDisplay() {
    document.getElementById("screen").value=""

}
function buttonclick(val) {
    document.getElementById("screen").value=document.getElementById("screen").value+val
}

function equalClick() {
    var text=document.getElementById("screen").value
    result=eval(text)
    document.getElementById("screen").value=result
}