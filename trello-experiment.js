const rootStyle = document.getElementById("trello-root")
rootStyle.classList.add("body-card-label-text")

const listOfCards = document.querySelectorAll(".list-card.js-member-droppable.ui-droppable")

listOfCards.forEach(card => {
    listCardLabels = card.querySelector(".list-card-labels")
    // console.log(listCardLabels.classList)
    if (cardLabels = listCardLabels.querySelector(".card-label")){
        cardLabelColour = cardLabels.className;
        console.log(cardLabelColour
        )}
        // card.style.backgroundColor = "#eb5a4647";
    })