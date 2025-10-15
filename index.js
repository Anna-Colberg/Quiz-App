console.log("hallo")

const card = document.querySelector('[data-js="card"]');
const cardContainer = document.querySelector('[data-js="card-container"]')
const falseButton /* answerButton */ = document.querySelector('[data-js="false-button"]');
const rightButton /* answerButton */ = document.querySelector('[data-js="right-button"]');
/* const answerDisplay = card.querySelector("['data-js='answer-display']"); */
const bookmarkButton = document.querySelector('[data-js="bookmark"]');

for (const card of document.querySelectorAll ('[data-js="card-container"]')) {
    const bookmark = card.querySelector('[data-js="bookmark"]');
    if (bookmark) {
        bookmark.addEventListener("click", () => {
            bookmark.classList.toggle("paws1bookmark");
        });
    }
}

/* Buttons answer RIGHT*/
const right = document.querySelector('[data-js="right-button"]')
right.addEventListener("click", () => {
    right.classList.toggle("rightbuttonclick")
})

/* Buttons answer FALSE*/
const falseb = document.querySelector('[data-js="false-button"]')
falseb.addEventListener("click", () => {
    falseb.classList.toggle("falsebuttonclick")
})
