// document.getElementById("count-el").innerText = 5
let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-bo")
let placeHolder = "Previous entries: "
let saveData = ""
//console.log(saveEl)

function increment() {
    console.log("The button was clicked")
    count += 1
    console.log(count)
    countEl.innerText = count
}
function decrease() {
    console.log("The other button was clicked")
    count -= 1
    console.log(count)
    countEl.innerText = count
}
function save() {
    console.log(count)
    console.log("Saved!")
    saveData += count + " - "
    console.log(saveData)
    saveEl.innerText = "Previous entries: " + saveData
}

