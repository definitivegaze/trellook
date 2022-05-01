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
    return listOfLabelColours;
}

// function change_background_colour(card, listOfColours){
//     card.style.backgroundColor
// }

listOfCards.forEach(get_label_colours);

// listOfCards.forEach(card => {
//     listCardLabels = card.querySelector(".list-card-labels")
//     // console.log(listCardLabels.classList)
//     if (cardLabels = listCardLabels.querySelector(".card-label")){
//         var count = 0
//         for (cardLabel in cardLabels.classList) {
//             // console.log(cardLabel)
//             if (cardLabel.includes("card-label-")) {
//                 count += 1;
//                 console.log(cardLabel.substr(11,))
//                 card.style.backgroundColor = cardLabel.substr(11,);
//             }
//         }
//         console.log(count)
//     }
//         // card.style.backgroundColor = "#eb5a4647";
//     })