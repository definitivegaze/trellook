const rootStyle = document.getElementById("trello-root")
rootStyle.classList.add("body-card-label-text")

const listOfCards = document.querySelectorAll(".list-card.js-member-droppable.ui-droppable")

listOfCards.forEach(card => {
    listCardLabels = card.querySelector(".list-card-labels")
    // console.log(listCardLabels.classList)
    if (cardLabels = listCardLabels.querySelector(".card-label")){
        var count = 0
        for (cardLabel in cardLabels.classList) {
            // console.log(cardLabel)
            if (cardLabel.includes("card-label-")) {
                count += 1;
                console.log(cardLabel.substr(11,))
                card.style.backgroundColor = cardLabel.substr(11,);
            }
        }
        console.log(count)
    }
        // card.style.backgroundColor = "#eb5a4647";
    })