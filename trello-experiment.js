const rootStyle = document.getElementById("trello-root")
rootStyle.classList.add("body-card-label-text")

// get list of cards
// for each card, get list of card labels
// get colours from card labels
// filled card with colours

const listOfCards = document.querySelectorAll(".list-card.js-member-droppable.ui-droppable")

function get_label_colours(card) {

    // there can be 0 or multiple card label per card
    let cardLabels = card.querySelectorAll(".card-label");
    let listOfLabelColours = []

    for (let i = 0; i < cardLabels.length; i++) {
        let cardClassLabels = cardLabels[i].classList;
        cardClassLabels.forEach(cardClassLabel => {
            if (cardClassLabel.includes("card-label-")){
                labelColour = cardClassLabel.split("-")[2];
                // console.log(labelColour);
                listOfLabelColours.push(labelColour)};
            })
    }
    console.log(listOfLabelColours);
    return (card,listOfLabelColours);
}

function change_background_colour(card, listOfColours){
    if (listOfColours.length == 1){
            card.style.backgroundColor = listOfColours[0];
    }
    if (listOfColours.length > 1){
    listOfColoursString = listOfColours.join(", ");
    console.log(listOfColoursString);
    card.style.backgroundImage = `linear-gradient(to right, ${listOfColoursString})`;
    }
}

listOfCards.forEach(card => {
    listOfColours = get_label_colours(card);
    change_background_colour(card, listOfColours);
    }
);
