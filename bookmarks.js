console.log("hallo")

for (const card of document.querySelectorAll ('[data-js="card-container"]')) {
    const bookmark = card.querySelector('[data-js="bookmark"]');
    if (bookmark) {
        bookmark.addEventListener("click", () => {
            bookmark.classList.toggle("paws1bookmark");
        });
    }
}
for (const button of card.querySelectorAll('[data-js="answer"]')) {
    const rightbutton = card.querySelector('[data-js="rightbutton"]');
    if (rightbutton) {
        rightbutton.addEventListener("click", () => {
            rightbutton.classList.toggle("rightbuttonclick");
        });
    }
}






/* for (const button of card.querySelectorAll('[data-js="rightbutton"]')) {
    button.addEventListener("click", () => {

    if () {
        bookmark.addEventListener("click", () => {
            bookmark.classList.toggle("paws1bookmark");
        button.classList.toggle("rightbuttonclick");
    });
}

for (const button of card.querySelectorAll('[data-js="falsebutton"]')) {
    button.addEventListener("click", () => {
        button.classList.toggle("falsebuttonclick");
    });
} */





/* const rightButton1 = document.querySelector('[data-js="rightbutton1"]')
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
}) */