const listOfColours = ["blue", "green", "green"];

percentage = (1/(listOfColours.length)*100).toFixed(0);
listOfColourWithPosition = listOfColours.map(c => 
            `${c} ${percentage*listOfColours.indexOf(c)}% ${percentage*(listOfColours.indexOf(c)+1)}%`
        );
listOfColoursJoin = listOfColourWithPosition.join(`, `);
listOfColoursString = `linear-gradient(135deg, ${listOfColoursJoin})`;

console.log(listOfColoursString);
