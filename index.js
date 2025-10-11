console.log("hallo")

const bookmark1 = document.querySelector('[data-js="bookmark1"]')
const bookmark2 = document.querySelector('[data-js="bookmark2"]')
const bookmark3 = document.querySelector('[data-js="bookmark3"]')
const bookmark4 = document.querySelector('[data-js="bookmark4"]')
const bookmark5 = document.querySelector('[data-js="bookmark5"]')



bookmark1.addEventListener("click", () => {
    bookmark1.classList.toggle("paws1bookmark")
})

bookmark2.addEventListener("click", () => {
    bookmark2.classList.toggle("paws1bookmark")
})

bookmark3.addEventListener("click", () => {
    bookmark3.classList.toggle("paws1bookmark")
})

bookmark4.addEventListener("click", () => {
    bookmark4.classList.toggle("paws1bookmark")
})

bookmark5.addEventListener("click", () => {
    bookmark5.classList.toggle("paws1bookmark")
})


