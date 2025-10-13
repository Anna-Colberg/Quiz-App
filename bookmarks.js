console.log("hallo")

const bookmark1 = document.querySelector('[data-js="bookmark1"]')
const bookmark2 = document.querySelector('[data-js="bookmark2"]')

bookmark1.addEventListener("click", () => {
    bookmark1.classList.toggle("paws1bookmark")
})
bookmark2.addEventListener("click", () => {
    bookmark2.classList.toggle("paws1bookmark")
})



const rightButton1 = document.querySelector('[data-js="rightbutton1"]')
rightButton1.addEventListener("click", () => {
    rightButton1.classList.toggle("rightbuttonclick")
})
const falseButton1 = document.querySelector('[data-js="falsebutton1"]')
falseButton1.addEventListener("click", () => {
    falseButton1.classList.toggle("fakebuttonclick")
})
const falseButton11 = document.querySelector('[data-js="falsebutton11"]')
falseButton11.addEventListener("click", () => {
    falseButton11.classList.toggle("fakebuttonclick")
})



const rightButton2 = document.querySelector('[data-js="rightbutton2"]')
rightButton2.addEventListener("click", () => {
    rightButton2.classList.toggle("rightbuttonclick")
})
const falseButton2 = document.querySelector('[data-js="falsebutton2"]')
falseButton2.addEventListener("click", () => {
    falseButton2.classList.toggle("fakebuttonclick")
})
const falseButton22 = document.querySelector('[data-js="falsebutton22"]')
falseButton22.addEventListener("click", () => {
    falseButton22.classList.toggle("fakebuttonclick")
})