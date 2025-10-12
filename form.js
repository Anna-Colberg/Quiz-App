console.log("hallo")


const personalMessage = document.querySelector('[data-js="personal-message"]')
const charactersCount = document.querySelector('[data-js="counter"]')

personalMessage.addEventListener("input", (event) => {
    const count = event.target.value.length;
    charactersCount.innerText = event.target.maxLength - count;
});

const personalMessage1 = document.querySelector('[data-js="personal-message1"]')
const charactersCount1 = document.querySelector('[data-js="counter1"]')

personalMessage1.addEventListener("input", (event) => {
    const count = event.target.value.length;
    charactersCount1.innerText = event.target.maxLength - count;
});

const personalMessage2 = document.querySelector('[data-js="personal-message2"]')
const charactersCount2 = document.querySelector('[data-js="counter2"]')

personalMessage2.addEventListener("input", (event) => {
    const count = event.target.value.length;
    charactersCount2.innerText = event.target.maxLength - count;
});

const personalMessage3 = document.querySelector('[data-js="personal-message3"]')
const charactersCount3 = document.querySelector('[data-js="counter3"]')

personalMessage3.addEventListener("input", (event) => {
    const count = event.target.value.length;
    charactersCount3.innerText = event.target.maxLength - count;
});


const form = document.querySelector('[data-js="message-form"]');
const firstInput = document.querySelector('[data-js="first-input"]');
const lastInput = document.querySelector('[data-js="last-input"]');
const messageContainer = document.querySelector('[data-js="message-container"]')

const newElement = document.createElement("p");
newElement.classList.add("card");
newElement.textContent = firstInput.value;
messageContainer.append(newElement);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newListElement = document.createElement("p");
  newListElement.classList.add("card");
  newListElement.textContent = firstInput.value;
  messageContainer.append(newListElement);
  event.target.reset();
});

