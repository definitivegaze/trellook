const rootStyle = document.getElementById("trello-root")
rootStyle.classList.add("body-card-label-text")

const listOfCards = document.querySelectorAll(".list-card.js-member-droppable.ui-droppable")

listOfCards.forEach(card => {
    listCardLabels = card.querySelector(".list-card-labels")
    // console.log(listCardLabels.classList)
    if (cardLabels = listCardLabels.querySelector(".card-label")){
        cardLabels.classList.forEach(cardLabel => {
            // console.log(cardLabel)
            if (cardLabel.includes("card-label-")) {
                console.log(cardLabel.substr(11,))
                card.style.backgroundColor = cardLabel.substr(11,);
            }
        })
    }
        // card.style.backgroundColor = "#eb5a4647";
    })