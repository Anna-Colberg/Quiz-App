console.log("hallo");

const darkMode = document.querySelector('[data-js="dark_mode"]')
const logMode = document.querySelector('[data-js="log_mode"]')



darkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark_mode")
})

