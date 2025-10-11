console.log("hallo")

const bookmark1 = document.querySelector('[data-js="bookmark1"]')
const bookmark2 = document.querySelector('[data-js="bookmark2"]')

bookmark1.addEventListener("click", () => {
    bookmark1.classList.toggle("paws1bookmark")
})

bookmark2.addEventListener("click", () => {
    bookmark2.classList.toggle("paws1bookmark")
})