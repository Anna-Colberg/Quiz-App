console.log("hallo")


/* Textfeld für Question */
const personalMessage = document.querySelector('[data-js="personal-message"]')
const charactersCount = document.querySelector('[data-js="counter"]')

personalMessage.addEventListener("input", (event) => {
    const count = event.target.value.length;
    charactersCount.innerText = event.target.maxLength - count;
});

/* Textfeld für Answer 1 */
const personalMessage1 = document.querySelector('[data-js="personal-message1"]')
const charactersCount1 = document.querySelector('[data-js="counter1"]')

personalMessage1.addEventListener("input", (event) => {
    const count = event.target.value.length;
    charactersCount1.innerText = event.target.maxLength - count;
});

/* Textfeld für Answer 2 */
const personalMessage2 = document.querySelector('[data-js="personal-message2"]')
const charactersCount2 = document.querySelector('[data-js="counter2"]')

personalMessage2.addEventListener("input", (event) => {
    const count = event.target.value.length;
    charactersCount2.innerText = event.target.maxLength - count;
});

/* Textfeld für Answer 3 */
const personalMessage3 = document.querySelector('[data-js="personal-message3"]')
const charactersCount3 = document.querySelector('[data-js="counter3"]')

personalMessage3.addEventListener("input", (event) => {
    const count = event.target.value.length;
    charactersCount3.innerText = event.target.maxLength - count;
});



/* Formular */
const form = document.querySelector('[data-js="message-form"]');

/* Fieldset Personal Data */
const firstInput = document.querySelector('[data-js="first-input"]');
const lastInput = document.querySelector('[data-js="last-input"]');

/* Platz für neue Fragenstellungen */
const messageContainer = document.querySelector('[data-js="message-container"]');


const newcardElement = document.createElement("div");
newcardElement.classList.add("new-post");


/* Auf den Button Submit klicken soll folgendes ausgeführt werden: */
form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    const newElement = document.createElement ("p");
    newElement.textContent = firstInput.value;

    const newElement2 = document.createElement ("p");
    newElement2.textContent = lastInput.value;

    const newElement3 = document.createElement ("p");
    newElement3.textContent = personalMessage.value;

    const newElement4 = document.createElement ("p");
    newElement4.textContent = personalMessage1.value;

    const newElement5 = document.createElement ("p");
    newElement5.textContent = personalMessage2.value;

    const newElement6 = document.createElement ("p");
    newElement6.textContent = personalMessage3.value;

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    newcardElement.appendChild(newElement);
    newcardElement.appendChild(newElement2)
    newcardElement.appendChild(newElement3)
    newcardElement.appendChild(newElement4)
    newcardElement.appendChild(newElement5)
    newcardElement.appendChild(newElement6)
    form.append(newcardElement);
    event.target.reset(); 
});









/* Fieldset mit firstInput/lastInput/personalMessage/personalMessage1/personalMessage2/personalMessage3 
sollen ausgefüllt im Block messageContainer erstellt werden. Sobald ich den addbutton 'Submit' klicke */

/* 
1. Erstelle einen EventListener für das submit event auf dem Form Element.
2. blockiere mithilfe eines preventDefault das senden an den Server.
3. erstelle ein neues Element was unsichtbar im messageContainer erscheinen soll.
4. suche die Eingaben des Users aus dem Formular raus und speichere sie in einer Variable ab. 
5. fülle das neue hinzugefügte Element mit den korrekten HTML Elementen, nutze dafür die richtigen Variablen 
an den richtigen Stellen.
6. appende das Element in den Container
7. beim betätigen des submit Button sollen die vorherigen Eingaben gelöscht werden*/
