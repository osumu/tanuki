const scenario = getScenario();

let currentIndex = 0;
let selectedIndex = 0;
let gameStarted = false;

let typing = false;
let fullText = "";
let textIndex = 0;
let typingInterval = null;

const nameBox = document.getElementById("nameBox");
const dialogText = document.getElementById("dialogText");
const choicesContainer = document.getElementById("choices");
const nextMark = document.getElementById("nextMark");
const gameImage = document.getElementById("gameImage");

function findLabel(labelName) {
    return scenario.findIndex(s => s.label === labelName);
}

function typeText(text) {

    clearInterval(typingInterval);

    typing = true;

    fullText = text;

    textIndex = 0;

    dialogText.textContent = "";

    nextMark.style.display = "none";

    typingInterval = setInterval(() => {

        dialogText.innerHTML +=
            fullText[textIndex] === "\n"
                ? "<br>"
                : fullText[textIndex];

        textIndex++;

        if (textIndex >= fullText.length) {

            clearInterval(typingInterval);

            typing = false;

            const current = scenario[currentIndex];

            if (current.type === "message1") {
                nextMark.style.display = "block";
            }

            if (current.type === "message2") {
                setTimeout(() => {
                    currentIndex++;
                    nextEvent();
                }, 250);
            }

        }

    }, 30);

}

function renderChoices(choices) {

    choicesContainer.innerHTML = "";

    choices.forEach((choice, index) => {

        const div = document.createElement("div");

        div.className = "choice";

        if (index === selectedIndex) {
            div.classList.add("selected");
        }

        div.textContent = choice.text;

        choicesContainer.appendChild(div);

    });

}
function nextEvent() {

    while (true) {

        const current = scenario[currentIndex];

        if (!current) {
            console.error("out", currentIndex);
            return;
        }

        if (current.image) {
            gameImage.src = current.image;
        }

        /*
          message
        */
        if (
            current.type === "message1" ||
            current.type === "message2"
        ) {

            nameBox.textContent = current.name;

            choicesContainer.innerHTML = "";

            typeText(current.text);

            return;
        }

        if (current.type === "choice") {
            gameImage.src = current.image || gameImage.src;
            nameBox.textContent = current.name || "";
            dialogText.textContent = current.text || "";
            nextMark.style.display = "none";
            renderChoices(current.choices);
            return;
        }

        currentIndex++;
    }
}

function startGame() {

    document.getElementById("titleScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "flex";

    currentIndex = 0;
    selectedIndex = 0;

    nextEvent();

}

function handleEnter() {

    if (typing) {

        clearInterval(typingInterval);

        dialogText.textContent = fullText;

        typing = false;

        const current = scenario[currentIndex];

        if (current.type === "message1") {
            nextMark.style.display = "block";
        }

        if (current.type === "message2") {
            setTimeout(() => {
                currentIndex++;
                nextEvent();
            }, 200);
        }

        return;
    }

    const current = scenario[currentIndex];

    if (current.type === "message1") {

        nextMark.style.display = "none";

        currentIndex++;

        nextEvent();

        return;
    }

    if (current.type === "choice") {

        const selected = current.choices[selectedIndex];

        if (selected.jump === "title") {

            document.getElementById("gameScreen").style.display = "none";
            document.getElementById("titleScreen").style.display = "flex";

            gameStarted = false;

            return;
        }

        if (typeof selected.jump === "number") {
            currentIndex = selected.jump;
        } else {
            currentIndex = findLabel(selected.jump);
        }

        selectedIndex = 0;

        nextEvent();

    }

}

document.addEventListener("keydown", (e) => {

    if (!gameStarted) {

        if (e.key === "Enter") {
            gameStarted = true;
            startGame();
        }

        return;
    }

    const current = scenario[currentIndex];

    if (current && current.type === "choice") {

        if (e.key === "ArrowDown") {

            selectedIndex++;

            if (selectedIndex >= current.choices.length) {
                selectedIndex = 0;
            }

            renderChoices(current.choices);
        }

        if (e.key === "ArrowUp") {

            selectedIndex--;

            if (selectedIndex < 0) {
                selectedIndex = current.choices.length - 1;
            }

            renderChoices(current.choices);
        }

    }

    if (e.key === "Enter") {
        handleEnter();
    }

});