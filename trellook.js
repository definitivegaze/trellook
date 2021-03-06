
function loadAllLabelText(){
    let rootStyle = document.getElementById("trello-root");
    console.log("finding rootstyle")
    rootStyle.classList.add("body-card-label-text");
}

// get list of cards
// for each card, get list of card labels
// get colours from card labels
// filled card with colours

const colourMap = {
    "green": "#cdeac8",
    "red": "#ffb3b3",
    "yellow": "#ffffb3",
    "orange": "#ffdfb3",
    "blue": "#b3e3ff",
    "purple": "#e2bff2",
    "sky": "#b3f5ff",
    "pink": "#ffb3e2",
    "black": "#cdd6e5",
    "lime": "#bcf6da"
}

function getLabelColours(card) {

    // there can be 0 or multiple card label per card
    let cardLabels = card.querySelectorAll(".card-label");
    let listOfLabelColours = [];

    for (let i = 0; i < cardLabels.length; i++) {
        let cardClassLabels = cardLabels[i].classList;
        cardClassLabels.forEach(cardClassLabel => {
            if (cardClassLabel.includes("card-label-")){
                labelColour = cardClassLabel.split("-")[2];
                listOfLabelColours.push(labelColour)};
            })
    };
    return (card,listOfLabelColours);
}

function changeBackgroundColour(card, listOfColours){
    if (listOfColours.length == 1){
        card.style.backgroundColor = colourMap[listOfColours[0]];
    };
    if (listOfColours.length > 1){
        percentage = (1/(listOfColours.length)*100).toFixed(0);
        listOfColourWithPosition = listOfColours.map(c => 
            `${colourMap[c]} ${percentage*listOfColours.indexOf(c)}% ${percentage*(listOfColours.indexOf(c)+1)}%`
        );
        listOfColoursJoin = listOfColourWithPosition.join(`, `);
        listOfColoursString = `linear-gradient(135deg, ${listOfColoursJoin})`;
        card.style.backgroundImage = listOfColoursString;
    };
}

function fillAllCards(){
    let listOfCards = document.querySelectorAll(".list-card-details");
    console.log("finding cards", listOfCards.length);
    listOfCards.forEach(card => {
        listOfColours = getLabelColours(card);
        changeBackgroundColour(card, listOfColours);
    });
}

function main(){
    loadAllLabelText();
    console.log("loading mutation observer");
    var observer = new MutationObserver(() => {
        console.log("observed mutation");
        fillAllCards();
        console.log("card colours refreshed");
    });
    observer.observe(document.body, {
        subtree: true,
        childList: true
    });
}

main();